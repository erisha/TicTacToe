let startBoard;
const board = document.querySelector('#board');
const square = document.querySelectorAll('.square');
const reset = document.querySelector ('#reset');
const human = 'X';
const computer = 'O';

const winnerCombo = [
    [0, 1, 2]
    [3, 4, 5]
    [0, 4, 8]
    [2, 4, 6]
    [0, 3, 6]
    [1, 4, 7]
    [2, 5, 8]
    [6, 7, 8]
]

newGame(); 

function newGame() {
    document.querySelector("#reset").style.display = "none";
}
startBoard = Array.from(Array(9).keys());

for (let i = 0; i < square.length; i++) {
    const square = array[i];
    
}


document.getElementById('squareOne')
document.getElementById('squareTwo')
document.getElementById('squareThree')
document.getElementById('squareFour')
document.getElementById('squareFive')
document.getElementById('squareSix')
document.getElementById('squareSeven')
document.getElementById('squareEight')
document.getElementById('squareNine')

