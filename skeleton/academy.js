let board = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]
// Turn information
let gameOver = false
let crossesTurn = true
console.log('Crosses Turn.')

function takeTurn(row, column) {

    if (board[row][column] === null && crossesTurn === true) {
        console.log("crosses turn")
        board[row][column] = "Neo"
        crossesTurn = false
    } else if (board[row][column] === null && crossesTurn === false) {
        console.log("noughts turn")
        board[row][column] = "Morpheus"
        crossesTurn = true
    } else {
        console.log("Tile already played.")
    }
}

// Return either "noughts", "crosses" or "nobody" if the game is over.
// Otherwise return null to continue playing.
function checkWinner() {
    for (let row = 0; row <= 2; row++) {
        if (board[row][0] === board[row][1] && board[row][0] === board[row][2]) {
            if (board[row][0] != null) {
                return board[row][0]
            }
        }
    }
    for (let column = 0; column <= 2; column++) {
        if (board[0][column] === board[1][column] && board[0][column] === board[2][column]) {
            if (board[0][column] != null) {
                return board[0][column]
            }
        }
    }
    if (board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
        if (board[0][0] != null) {
            return board[0][0]
        }
    }
    if (board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
        if (board[0][2] != null) {
            return board[0][2]
        }
    }
    const flatBoard = [...board].flat()
    if (!flatBoard.includes(null)) {
        return "Nobody"
    }
}

function resetGame() {
    board = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ];
    gameOver = false
    let crossesTurn = true
}

console.log("resetGame was called");

// WORKS PERFECTLY ^^

function getBoard() {
    console.log("getBoard was called");
    return board
}

if (typeof exports === 'object') {
    console.log("Running in Node")
    // Node. Does not work with strict CommonJS, but only CommonJS-like
    // environments that support module.exports, like Node.
    module.exports = {
        takeTurn,
        checkWinner,
        resetGame,
        getBoard,
    }
} else {
    console.log("Running in Browser")
}


