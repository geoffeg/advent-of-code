const data = require('fs').readFileSync('1.dat', 'utf-8').split('\n').filter(n => n).map((e) => Number(e));
const results = data.filter((d1) =>
  data.filter((d2) => 
    data.filter((d3) => 
      d1 + d2 + d3 == 2020
    )[0]
  )[0] !== undefined
);
console.log(results)
console.log(results.reduce((x, y) => x * y));
