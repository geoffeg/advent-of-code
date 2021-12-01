const list = require('fs').readFileSync(process.argv[2], 'utf-8').split('\n').filter(n => n).map((e) => Number(e))
const inc = list.filter((e, i, a) => a[i+1] > e)
console.log(inc.length)

