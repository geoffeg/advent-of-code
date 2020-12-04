const lines = require('fs').readFileSync('sample.dat', 'utf-8').split('\n').filter(n => n)
const slopes = [[1,1], [3,1], [5,1], [7,1], [1,2]]
const every = (arr, nth) => arr.filter((a, i) => i % nth === nth - 1)

const results = slopes.map(([h, v]) => {
  const filteredLines = lines.slice(v).filter((a, i) => i % v === 0)
  const lineCharas = filteredLines.map((line, i) => {
    const index = (i + 1) * h % line.length
    //console.log(index)
    const chara = line.charAt(index)
    const replacement = chara == "#" ? 'X' : '-'
    //return line.substr(0, index) + replacement + line.substr(index + 1)
    return chara
    //console.log(i * h + 1 % line.length)
    //return line.charAt(i * h + 1 % line.length)
  }).filter(x => x == '#').length
  //console.log(filteredLines)
  //console.log(lineCharas)
  //console.log(lineCharas.filter(n => n == '#'))
  //console.log(lineCharas.filter(n => n == '#').length)
  return lineCharas
})
console.log(results)
//console.log(results.each((x) => x.filter((z) => z == '#')))
console.log(results.reduce((x, y) => x * y))
