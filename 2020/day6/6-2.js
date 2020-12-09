const fileData = require('fs').readFileSync('6.dat', 'ascii').split('\n\n')
const results = fileData.map((line) => {
  const groupLength = line.split('\n').length
  const allGroupAnswers = line.replace(/\n/g, '')
  const uniqueAnswers = allGroupAnswers.split('').filter((val, i, arr) => arr.indexOf(val) === i)
  const answerFreq = allGroupAnswers.split('').reduce((acc, curr) => { return typeof acc[curr] == 'undefined' ? acc[curr] = 1 : acc[curr] += 1}, {} )
  console.log(allGroupAnswers)
  console.log(answerFreq)
  console.log()
})
