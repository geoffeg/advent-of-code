const data = require('fs').readFileSync('1.dat', 'utf-8').split('\n').filter(n => n).map((e) => Number(e));

const matrix = data.map(x => data.map(y => data.map(z => [x, y, z])))
const results = matrix.flat(2).find(([x, y, z]) => x+y+z == 2020)
console.log(results.reduce((x, y) => x * y));
