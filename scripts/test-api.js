const handler = require('../api/crawl');

function mockReq(method, body) {
  const chunks = body ? [Buffer.from(JSON.stringify(body))] : [];
  return {
    method,
    async *[Symbol.asyncIterator]() { for (const c of chunks) yield c; }
  };
}
function mockRes() {
  return {
    statusCode: 200,
    headers: {},
    setHeader(k, v) { this.headers[k] = v; },
    end(s) { this.body = s; }
  };
}
(async function () {
  let res = mockRes();
  await handler(mockReq('GET'), res);
  const get = JSON.parse(res.body);
  console.log('GET ok:', get.ok, 'targets:', get.targets.length);

  res = mockRes();
  await handler(mockReq('POST', { url: 'https://appsumo.com/blackfriday' }), res);
  const post = JSON.parse(res.body);
  console.log('POST ok:', post.ok, 'status:', res.statusCode, 'title:', post.title);
  console.log('candidates:', post.count, 'first:', post.candidates && post.candidates[0] && post.candidates[0].name);

  res = mockRes();
  await handler(mockReq('POST', { url: 'http://127.0.0.1/admin' }), res);
  const bad = JSON.parse(res.body);
  console.log('SSRF blocked:', !bad.ok, '|', bad.error);
})();
