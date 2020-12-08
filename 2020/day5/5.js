const lines = require('fs').readFileSync('5.dat', 'ascii').split('\n').filter(n => n)
const trTable = {F:0,B:1,L:0,R:1}

const result = lines.map((line) => {
  const binarySample = line.replace(/[FBLR]/g, c => trTable[c])
  const decimalRow = parseInt(binarySample.substr(0, 7), 2)
  const decimalColumn = parseInt(binarySample.substr(7), 2)
  return decimalRow * 8 + decimalColumn;
})
console.log(result.sort((a,b) => b-a)[0])
