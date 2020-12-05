const lines = require('fs').readFileSync('sample.dat', 'ascii').split('\n')
const ROWS = 127
const COLUMNS = 8
const operations = {
  'F' : () => { return 'front' },
  'B' : () => { return 'back' },
  'L' : () => { return 'left' },
  'R' : () => { return 'right' }
}
const result = lines.map((line) => {
  return line.split('').map((chara) => {
    return operations[chara]()
  })
})
console.log(result)
