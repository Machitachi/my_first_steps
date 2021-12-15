document.addEventListener('DOMContentLoaded', () => {
    let vectors = document.querySelectorAll('.vector');

    vectors.forEach((vector) => {
       vector.addEventListener('click', handleClick); 
    })
});

function handleClick(event) {
    console.log(event.target);

    let vector = event.target;
    let position = vector.id;

    if (handleMove(position)) {
        let win = document.getElementById('win');

        if (playerTime === 0) {
            win.innerHTML = `A ganhadora foi: 👩🏼‍🦳 - Velhinha`;
        } else if (playerTime === 1) {
            win.innerHTML = `O ganhador foi: 👨🏻‍🦳 - Velhinho`;
        } else {
            win.innerHTML = `Vixe, ninguem ganhou 😳`;
        }
    }

    updateVector();
}  

function updateVector() {
    let vectors = document.querySelectorAll('.vector');

    vectors.forEach((vector) => {
        let position = vector.id;
        let symbol = board[position];

        if (symbol !== '') {
            vector.innerHTML = `<div class="${symbol}"></div>`;
        } 
    })
}



function resetarJogo() {

    let square = document.getElementsByClassName('vector');

    square.innerHTML = '';
    console.log(square)

    board = ['', '', '', '', '', '', '', '', ''];
    playerTime = 0;
    gameOver = false;

    updateVector();
    
    
    console.log("jogo resetado")
}