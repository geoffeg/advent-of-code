const list = require('fs').readFileSync(process.argv[2], 'utf-8').split('\n').filter(n => n)
const countVal = (item, val) => item.filter((e) => e == val).length;
const columnReducer = (list, comparator) => [...Array(list[0].length).keys()].reduce((acc, i) => {
  const column = acc.map((m) => m.charAt(i))
  const keep = comparator(countVal(column, 0), countVal(column, 1))
  return acc.length == 1 ? acc : acc.filter((e) => e.charAt(i) == keep)
}, list)
const oxygen = columnReducer(list, (zeroes, ones) => (zeroes > ones) ? 0 : (ones > zeroes) ? 1 : 1)
const co2 = columnReducer(list, (zeroes, ones) => (zeroes > ones) ? 1 : (ones > zeroes) ? 0 : 0)
console.log(parseInt(oxygen, 2) * parseInt(co2, 2))
