const fs = require('fs');
const { extractDeals } = require('../lib/extract-deals');
const urls = {
  appsumo: 'https://appsumo.com/blackfriday',
  ottokit: 'https://ottokit.com/blog/top-black-friday-deals/',
  sixam: 'https://6amtech.com/blog/best-ai-black-friday-deals/'
};
for (const f of ['appsumo', 'ottokit', 'sixam']) {
  const html = fs.readFileSync('/tmp/bf-' + (f === 'sixam' ? '6amtech' : f) + '.html', 'utf8');
  const c = extractDeals(html, urls[f]);
  console.log('--- ' + f + ': ' + c.length + ' candidates ---');
  console.log(c.slice(0, 8).map(x => [x.name, x.dealPrice, x.listPrice, x.discountPct, x.confidence].join(' | ')).join('\n'));
}
