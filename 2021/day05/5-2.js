const R = require("ramda")
const data = require('fs').readFileSync(process.argv[2], 'utf-8').split('\n').map(line => line.split(' -> ').map(coords => coords.split(',').map(str => parseInt(str))))
// * the first value is the column (vertical)
// * the second value is the row (horizontal)
function range(start, stop) {
    const length = Math.abs(stop - start) + 1
    return Array.from({ length }, (_, i) => {
      return start > stop ? start - i : start + i
    })
}

function initializeBoard(lines) {
    const maxByIndex = (arr, index) => {
        return arr.reduce((winner, [x, y]) => Math.max(winner, x[index], y[index]), 0)
    }
    const columnsMax = maxByIndex(lines, 0)
    const rowsMax = maxByIndex(lines, 1)
    return Array(rowsMax + 1).fill().map(() => Array(columnsMax + 1).fill(0))
}

function drawLine(board, point1, point2) {
    R.xprod(range(point1[0], point2[0]), range(point1[1], point2[1])).forEach(([x, y]) => {
        board[y][x]++
    })
    return board
}

const completedBoard = data.reduce((board, line) => {
    return drawLine(board, line[0], line[1])
}, initializeBoard(data))

console.log(completedBoard.flat().filter(v => v >= 2).length)