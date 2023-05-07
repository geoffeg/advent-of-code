const data = require('fs').readFileSync(process.argv[2], 'utf-8').split('\n\n')
const drawings = data[0].split(',')
const boards = data.slice(1).map(x => x.split('\n').map(y => y.trim().split(/\s+/)))

const isBoardWinner = (board, drawings) => {
    return board.some(row => row.every(rowValue => drawings.includes(rowValue)))
}

function findWinningBoard(drawings, boards)  {
    let winningBoard;
    let winningDrawing = [];
    drawings.find((drawing, i) => {
        winningDrawing.push(drawing)
        const f = boards.find(board => {
            const horiz = isBoardWinner(board, winningDrawing)
            const vert = isBoardWinner(board[0].map((_, i) => board.map(row => row[i])), winningDrawing)
            return horiz || vert
        })
        winningBoard = f;
        return f != undefined
    })
    return { winningDrawing: winningDrawing, winningBoard: winningBoard }
}

const winner = findWinningBoard(drawings, boards)
const boardTotal = winner.winningBoard.flat().filter(boardValue => !winner.winningDrawing.includes(boardValue)).reduce((acc, cur) => acc += parseInt(cur), 0)
const score = boardTotal * winner.winningDrawing.reverse()[0]
console.log(score)
