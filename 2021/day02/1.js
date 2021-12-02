const list = require('fs').readFileSync(process.argv[2], 'utf-8').split('\n').filter(n => n).map((e) => [e.split(' ')[0][0], Number(e.split(' ')[1])])
const pos = list.reduce((acc, v) => {
  if (v[0] == "f") acc['h']+=v[1];
  if (v[0] == "d") acc['v']+=v[1];
  if (v[0] == "u") acc['v']-=v[1];
  return acc;
},{h: 0, v: 0})
console.log(pos['h'] * pos['v'])

