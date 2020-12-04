const lines = require('fs').readFileSync('4.dat', 'ascii').split('\n')
const required = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid']
const recordSepIndexes = lines.reduce((a, e, i) => {
  if (e === '')
    a.push(i)
  return a
}, [0])
const chunks = recordSepIndexes.map((c, i, a) => {
  const record = lines.slice(c, a[i+1]).join(' ').split(' ')
  return i === 0 ? record : record.slice(1)
}).slice(0, -1)
const passports = chunks.map((chunk) => 
  Object.fromEntries(chunk.map((s) => s.split(':')))
)
const valid = passports.map((passport) =>
  required.every(v => Object.keys(passport).includes(v))
)
console.log(valid.filter(v => v == true).length)
