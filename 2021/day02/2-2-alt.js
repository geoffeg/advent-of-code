const list = require('fs').readFileSync(process.argv[2], 'utf-8').split('\n').filter(n => n).map((e) => [e.split(' ')[0][0], Number(e.split(' ')[1])])
const inst = {
  f : ([h, d, a], v) => [h+=v, d+=(a*v), a],
  d : ([h, d, a], v) => [h, d, a+=v],
  u : ([h, d, a], v) => [h, d, a-=v]
}
const pos = list.reduce((acc, v) => inst[v[0]](acc, v[1]), [0, 0, 0])
console.log(pos[0] * pos[1])

