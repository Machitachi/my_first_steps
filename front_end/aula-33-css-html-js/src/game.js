// iniciar minhas variáveis
let board = ['', '', '', '', '', '', '', '', ''];
let playerTime = 0;
let symbols = ['o', 'x'];
let gameOver = false;
let winsStates = [
    //vitoria na horizontal
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    //vitoria na vertical
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    //vitoria na diagonal
    [0, 4, 8],
    [2, 4, 6]
]

function handleMove(position) {

    if (gameOver) {
        return;
    }

    if (board[position] === '') {
        board[position] = symbols[playerTime];

        gameOver = isWin();

        if (gameOver === false) {
            if (playerTime === 0) {
                playerTime = 1;
            } else {
                playerTime = 0;
            }
        }        
   }
  return gameOver;
}

function isWin() {    

    for (let index = 0; index < winsStates.length; index += 1) {
        let sequencia = winsStates[index];

        let position1 = sequencia[0];
        let position2 = sequencia[1];
        let position3 = sequencia[2];

        if (board[position1] === board[position2] && board[position1] === board[position3] && board[position1] !== '') {
            return true;
        }
    }
    return false;
}


