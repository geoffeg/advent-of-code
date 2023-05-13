const R = require("ramda")
const data = require('fs').readFileSync(process.argv[2], 'utf-8').split('\n').map(line => {
    const matches = line.match(/(([0-9]+),([0-9]+)) -> ([0-9]+),([0-9]+)/).map(match => parseInt(match))
    return [[matches[2], matches[3]], [matches[4], matches[5]]]
})
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

function drawOrthogonalLine(board, point1, point2) {
    R.xprod(range(point1[0], point2[0]), range(point1[1], point2[1])).forEach(([x, y]) => {
        board[y][x]++
    })
    return board
}

function drawDiagonalLine(board, point1, point2) {
    range(point1[0], point2[0]).forEach((y, i) => {
        const x = point1[1] > point2[1] ? point1[1] - i : point1[1] + i
        board[x][y]++
    })
    return board
}

const orthogonalBoard = data.filter(([p1, p2]) => p1[0] == p2[0] || p1[1] == p2[1]).reduce((board, line) => {
    return drawOrthogonalLine(board, line[0], line[1])
}, initializeBoard(data))

const orthogonalAndDiagonalBoard = data.filter(([p1, p2]) => p1[0] != p2[0] && p1[1] != p2[1]).reduce((board, line) => {
    return drawDiagonalLine(board, line[0], line[1])
}, orthogonalBoard)

console.log(orthogonalAndDiagonalBoard.flat().filter(v => v >= 2).length)