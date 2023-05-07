const data = require('fs').readFileSync(process.argv[2], 'utf-8').split('\n\n')
const drawings = data[0].split(',')
const boards = data.slice(1).map(x => x.split('\n').map(y => y.trim().split(/\s+/)))

const isBoardWinner = (board, drawings) => {
    return board.some(row => row.every(rowValue => drawings.includes(rowValue)))
}

function findWinningBoard(drawings, boards)  {
    return drawings.reduce((prev, drawing) => {
        if (prev.winningBoardNumbers.size == boards.length) return prev;
        prev.drawings.push(drawing)
        boards.forEach((board, boardNumber) => {
            const horiz = isBoardWinner(board, prev.drawings)
            const vert = isBoardWinner(board[0].map((_, i) => board.map(row => row[i])), prev.drawings)
            if (horiz || vert) {
                prev.winningBoardNumbers.add(boardNumber)
            }
        })
        return prev
    }, { drawings: [], winningBoardNumbers: new Set() })
}

const winners = findWinningBoard(drawings, boards)
const winner = boards[Array.from(winners.winningBoardNumbers)[boards.length - 1]]
const boardTotal = winner.flat().filter(boardValue => !winners.drawings.includes(boardValue)).reduce((acc, cur) => acc += parseInt(cur), 0)
const score = boardTotal * winners.drawings.reverse()[0]
console.log(score)
