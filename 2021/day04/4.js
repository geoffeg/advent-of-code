const data = require('fs').readFileSync(process.argv[2], 'utf-8').split('\n\n')
const drawings = data[0].split(',')
const boards = data.slice(1).map(x => x.split('\n').map(y => y.trim().split(/\s+/)))

const isBoardWinner = (board, drawings) => {
    return board.some(row => row.every(rowValue => drawings.includes(rowValue)))
}

function findWinningBoard(drawings, boards)  {
    return drawings.reduce((prev, drawing) => {
        if (prev.board) return prev
        prev.drawings.push(drawing)
        prev.board = boards.find(board => {
            const horiz = isBoardWinner(board, prev.drawings)
            const vert = isBoardWinner(board[0].map((_, i) => board.map(row => row[i])), prev.drawings)
            return horiz || vert
        })
        return prev
    }, {drawings: [], board: null})
}

const winner = findWinningBoard(drawings, boards)
const boardTotal = winner.board.flat().filter(boardValue => !winner.drawings.includes(boardValue)).reduce((acc, cur) => acc += parseInt(cur), 0)
const score = boardTotal * winner.drawings.reverse()[0]
console.log(score)
