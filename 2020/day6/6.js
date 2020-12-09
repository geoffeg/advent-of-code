const fileData = require('fs').readFileSync('6.dat', 'ascii').split('\n\n')
const results = fileData.map((line) => {
  const allGroupAnswers = line.replace(/\n/g, '')
  const uniqueAnswers = allGroupAnswers.split('').filter((val, i, arr) => arr.indexOf(val) === i)
  return uniqueAnswers.length
})
console.log(results.reduce((a, b) => a + b))
