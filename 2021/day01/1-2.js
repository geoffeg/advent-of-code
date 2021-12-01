const list = require('fs').readFileSync(process.argv[2], 'utf-8').split('\n').filter(n => n).map((e) => Number(e))
const slices = list.reduce((acc, cur, i, arr) => acc.concat([arr.slice(i, i+3)]), [])
const sums = slices.filter((l) => l.length == 3).map((l) => l.reduce((a, b) => a+b))
const inc = sums.filter((e, i, a) => a[i+1] > e)
console.log(inc.length)

