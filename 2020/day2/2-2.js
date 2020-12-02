const data = require('fs').readFileSync('2.dat', 'utf-8').split('\n').filter(n => n);
const results = data.filter((data) => {
  const [firstIndex, secondIndex, chara, pw] = data.split(/[\s-:]+/)
  return pw.charAt(firstIndex - 1) == chara ^ pw.charAt(secondIndex - 1) == chara
});
console.log(results.length)
