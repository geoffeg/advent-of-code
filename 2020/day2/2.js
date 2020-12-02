const data = require('fs').readFileSync('2.dat', 'utf-8').split('\n').filter(n => n);
const results = data.filter((data) => {
  const [rangeStart, rangeEnd, chara, pw] = data.split(/[\s-:]+/)
  const pwcharas = pw.match(new RegExp(`${chara}{1}`, 'g'))
  const len = pwcharas ? pwcharas.length : 0
  return len >= rangeStart && len <= rangeEnd
});
console.log(results.length)
