const lines = require('fs').readFileSync('4.dat', 'ascii')
console.log(lines.split(/\n\s*\n/))
