const lines = require('fs').readFileSync('sample.dat', 'ascii').split('\n')
const ROWS = 127
const COLUMNS = 8
const operations = {
  'F' : (i) => { console.log('F', i); return i[0][1] /= 2, i },
  'B' : (i) => { console.log('B', i); return i[0][0] = i[0][1] / 2, i },
  'L' : (i) => { console.log('L', i); return i[1][1] /= 2, i },
  'R' : (i) => { console.log('R', i); return i[1][0]  = i[1][1] = 2, i }
}
const result = lines.map((line) => {
  console.log()
  return line.split('').reduce((a, v, i) => {
    const res = operations[v](a)
    console.log('a', a, 'v', v, 'Res', res)
    return res
  }, [[0, 127], [0, 8]])
})
console.log(result)
