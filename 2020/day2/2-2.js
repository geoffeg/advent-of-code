const lines = require('fs').readFileSync('2.dat', 'utf-8').split('\n').filter(n => n);
const results = lines.filter((line) => {
  const [firstIndex, secondIndex, char, pw] = line.split(/[\s-:]+/)
  return pw.charAt(firstIndex - 1) == char ^ pw.charAt(secondIndex - 1) == char
});
console.log(results.length)
