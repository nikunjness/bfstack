/* Local crawl runner. Uses the same extractor as /api/crawl.
 *   node scripts/crawl.js                      -> crawls crawl-targets.json
 *   node scripts/crawl.js https://example.com  -> crawls one URL
 *   node scripts/crawl.js --out results.json   -> saves JSON
 * Nothing is written to deals.js automatically. */

const fs = require('fs');
const path = require('path');
const { extractDeals, stripTags } = require('../lib/extract-deals');
const seeds = require('../crawl-targets.json');

const args = process.argv.slice(2);
const outIndex = args.indexOf('--out');
let outFile = null;
if (outIndex !== -1) {
  outFile = args[outIndex + 1];
  args.splice(outIndex, 2);
}
const urls = args.length ? args : seeds.targets.map(t => t.url);

async function crawl(url) {
  const response = await fetch(url, {
    redirect: 'follow',
    signal: AbortSignal.timeout(15000),
    headers: { 'user-agent': 'BFAI-Crawler/1.0 (local)', 'accept': 'text/html' }
  });
  if (!response.ok) throw new Error('HTTP ' + response.status);
  const html = (await response.text()).slice(0, 2000000);
  const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  return {
    requestedUrl: url,
    finalUrl: response.url,
    title: titleMatch ? stripTags(titleMatch[1]).slice(0, 160) : '',
    fetchedAt: new Date().toISOString(),
    candidates: extractDeals(html, response.url, { limit: 20 })
  };
}

(async function () {
  const results = [];
  for (const url of urls) {
    try {
      const r = await crawl(url);
      results.push(r);
      console.log('\n=== ' + url + ' — ' + r.candidates.length + ' candidates ===');
      r.candidates.slice(0, 10).forEach(c => {
        console.log('  ' + c.name + ' | $' + (c.dealPrice == null ? '?' : c.dealPrice) +
          (c.listPrice ? ' / was $' + c.listPrice : '') +
          (c.discountPct ? ' / ' + c.discountPct + '% off' : '') + ' [' + c.confidence + ']');
      });
    } catch (e) {
      results.push({ requestedUrl: url, error: String(e.message || e) });
      console.log('\n=== ' + url + ' — ERROR: ' + e.message + ' ===');
    }
  }
  if (outFile) {
    const target = path.resolve(outFile);
    fs.writeFileSync(target, JSON.stringify(results, null, 2));
    console.log('\nSaved ' + target);
  }
})();
