const list = require('fs').readFileSync(process.argv[2], 'utf-8').split('\n').filter(n => n)
const strips = [...Array(list[0].length).keys()].map((e) => list.map((m) => m.charAt(e)).sort())
const indexes = strips.map((e) => e.indexOf('1'))
const gamma = strips.map((e, i) => (indexes[i] > (e.length / 2)) ? 0 : 1)
const epsilon = gamma.map((e) => e == 1 ? 0 : 1)
console.log(parseInt(gamma.join(''), 2) * parseInt(epsilon.join(''), 2))

