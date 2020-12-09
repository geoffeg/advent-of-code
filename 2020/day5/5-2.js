const lines = require('fs').readFileSync('5.dat', 'ascii').split('\n').filter(n => n)
const trTable = {F:0,B:1,L:0,R:1}
const result = lines.map((line) => {
  const binary = line.replace(/[FBLR]/g, c => trTable[c])
  const decimalRow = parseInt(binary.substr(0, 7), 2)
  const decimalColumn = parseInt(binary.substr(7), 2)
  return decimalRow * 8 + decimalColumn;
}).sort((a,b) => a-b)
const continuousArray = Array.from({length: result.length}, (x, i) => result[0] +  i);
const missing = continuousArray.filter((f, i) => !result.includes(f))
console.log(missing[0])
