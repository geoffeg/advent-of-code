const lines = require('fs').readFileSync('4.dat', 'ascii').split('\n')
const required = {
  'byr': new RegExp(/^(19[2-8][0-9]|199[0-9]|200[0-2])$/),
  'iyr': new RegExp(/^(201[0-9]|2020)$/),
  'eyr': new RegExp(/^(202[0-9]|2030)$/),
  'hgt': new RegExp(/^(?:(1[5-8][0-9]|19[0-3])cm|(59|6[0-9]|7[0-6])in)$/),
  'hcl': new RegExp(/^#[a-f0-9]{6}$/),
  'ecl': new RegExp(/^(?:amb|blu|brn|gry|grn|hzl|oth)$/),
  'pid': new RegExp(/^[0-9]{9}$/)
}
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
  Object.keys(required).every(v => Object.keys(passport).includes(v) && required[v].test(passport[v]))
)
console.log(valid.filter(v => v == true).length)
