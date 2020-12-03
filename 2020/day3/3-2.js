const lines = require('fs').readFileSync('sample.dat', 'utf-8').split('\n').filter(n => n)
const slopes = [[1,1], [3,1], [5,1], [7,1], [1,2]]
const every = (arr, nth) => arr.filter((a, i) => i % nth === nth - 1)

const results = slopes.map(([h, v]) => {
  const lineIndexes = lines.slice(v).filter((a, i) => i % v === 0)
  const lineCharas = lineIndexes.map((line, i) => {
    console.log(i * h + 1 % line.length)
    return line.charAt(i * h + 1 % line.length)
  })
  console.log(lineIndexes)
  console.log(lineCharas)
  console.log(lineCharas.filter(n => n == '#'))
  console.log(lineCharas.filter(n => n == '#').length)
  //return lineCharas
})
console.log(results)
console.log(results.reduce((x, y) => x * y))
