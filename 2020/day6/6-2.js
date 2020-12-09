const fileData = require('fs').readFileSync('6.dat', 'ascii').trim().split('\n\n')
const results = fileData.map(line => {
  const allGroupAnswers = line.replace(/\n/g, '')
  const answerFreq = allGroupAnswers.split('').reduce((acc, curr) => { 
    acc[curr] ? acc[curr] += 1 : acc[curr] = 1
    return acc
  }, {})
  const groupLength = line.split('\n').length
  return Object.entries(answerFreq).filter(f => f[1] === groupLength).map(e => e[0]).length
})
console.log(results.reduce((a, b) => a + b))
