/* Vercel serverless function: POST /api/crawl { url } -> deal candidates.
 * Returns candidates for review. It never writes to deals.js. */

const { extractDeals, stripTags } = require('../lib/extract-deals');
const seeds = require('../crawl-targets.json');

function json(res, status, body) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.end(JSON.stringify(body));
}

function validate(raw) {
  if (typeof raw !== 'string' || raw.length > 2000) throw new Error('URL is missing or too long.');
  const parsed = new URL(raw.trim());
  if (!/^https?:$/.test(parsed.protocol)) throw new Error('Only http and https URLs are allowed.');
  if (parsed.username || parsed.password) throw new Error('URLs with credentials are not allowed.');
  const host = parsed.hostname.toLowerCase().replace(/\.$/, '');
  if (!host || host === 'localhost' || /(^|\.)(localhost|local|internal)$/i.test(host) ||
      host === 'metadata.google.internal') throw new Error('That host is not allowed.');
  if (/^\d+\.\d+\.\d+\.\d+$/.test(host)) {
    const p = host.split('.').map(Number);
    if (p[0] === 0 || p[0] === 10 || p[0] === 127 || p[0] === 169 && p[1] === 254 ||
        p[0] === 172 && p[1] >= 16 && p[1] <= 31 || p[0] === 192 && p[1] === 168 ||
        p[0] === 100 && p[1] >= 64 && p[1] <= 127 || p[0] === 198 && p[1] >= 18 && p[1] <= 19) {
      throw new Error('Private IP ranges are not allowed.');
    }
  }
  if (/^\[|::$/.test(host) || /^(fc|fd|fe80)/i.test(host)) throw new Error('IPv6 local ranges are not allowed.');
  return parsed.toString();
}

async function readBody(req) {
  let raw = '';
  for await (const chunk of req) {
    raw += chunk;
    if (raw.length > 8192) throw new Error('Request body too large.');
  }
  try { return JSON.parse(raw || '{}'); } catch (e) { throw new Error('Invalid JSON body.'); }
}

async function fetchHtml(startUrl) {
  let current = validate(startUrl);
  for (let hop = 0; hop < 3; hop++) {
    const response = await fetch(current, {
      redirect: 'manual',
      signal: AbortSignal.timeout(9000),
      headers: {
        'user-agent': 'BFAI-Crawler/1.0 (+https://bfstack.vercel.app)',
        'accept': 'text/html,application/xhtml+xml;q=0.9,*/*;q=0.5'
      }
    });
    if ([301, 302, 303, 307, 308].includes(response.status)) {
      const location = response.headers.get('location');
      if (!location) throw new Error('Redirect without a location.');
      current = validate(new URL(location, current).toString());
      continue;
    }
    if (!response.ok) throw new Error('Source returned HTTP ' + response.status + '.');
    const type = response.headers.get('content-type') || '';
    if (!/html/i.test(type)) throw new Error('Source is not HTML (' + type.split(';')[0] + ').');
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let html = '';
    while (html.length < 2000000) {
      const { done, value } = await reader.read();
      if (done) break;
      html += decoder.decode(value, { stream: true });
    }
    await reader.cancel().catch(() => {});
    const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
    return {
      finalUrl: current,
      title: titleMatch ? stripTags(titleMatch[1]).slice(0, 160) : '',
      html: html.slice(0, 2000000),
      truncated: html.length >= 2000000
    };
  }
  throw new Error('Too many redirects.');
}

module.exports = async function handler(req, res) {
  if (req.method === 'GET') {
    return json(res, 200, {
      ok: true,
      usage: 'POST { "url": "https://example.com/deals" }',
      note: 'Returns deal candidates for review. Nothing is published automatically.',
      targets: seeds.targets.map(t => t.url)
    });
  }
  if (req.method !== 'POST') return json(res, 405, { ok: false, error: 'Method not allowed.' });

  try {
    const body = await readBody(req);
    const requested = body.url;
    const page = await fetchHtml(requested);
    const candidates = extractDeals(page.html, page.finalUrl, { limit: 20 });
    return json(res, 200, {
      ok: true,
      requestedUrl: String(requested).slice(0, 200),
      finalUrl: page.finalUrl,
      title: page.title,
      fetchedAt: new Date().toISOString(),
      truncated: page.truncated,
      count: candidates.length,
      warning: 'Candidates are heuristic matches, not verified offers. Check each on the vendor page before adding it to deals.js.',
      candidates
    });
  } catch (err) {
    return json(res, 400, { ok: false, error: String(err && err.message || err).slice(0, 300) });
  }
};
