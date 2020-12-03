const lines = require('fs').readFileSync('3.dat', 'utf-8').split('\n').filter(n => n)
const results = lines.map((line, i) => line.charAt(i * 3 % line.length))
console.log(results.filter(c => c == '#').length)
