const lines = require('fs').readFileSync('3.dat', 'utf-8').split('\n').filter(n => n)
const results = [[1,1], [3,1], [5,1], [7,1], [1,2]].map(([h, v]) => {
  const filteredLines = lines.slice(v).filter((a, i) => i % v === 0)
  return filteredLines.map((line, i) =>
    line.charAt((i + 1) * h % line.length)
  ).filter(x => x == '#').length
})
console.log(results.reduce((x, y) => x * y))
