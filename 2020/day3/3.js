const lines = require('fs').readFileSync('3.dat', 'utf-8').split('\n').filter(n => n)
var tobogganPos = 0
const results = lines.map((line) => {
  const charPos = line.charAt(tobogganPos) == '' ? tobogganPos = tobogganPos - line.length : tobogganPos += 3
  return line.charAt(charPos)
})
console.log(results)
const trees = results.filter(c => c == '#')
console.log(trees)
console.log(trees.length)
