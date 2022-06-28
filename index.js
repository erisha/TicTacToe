let playBoard = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = 'X';
let gameActive = true;
const displayStatus = document.querySelector('.playerTurn');
const winningMessage = () => `Player ${currentPlayer} wins!`;
const tieMessage = () => `It's a tie!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

displayStatus.innerHTML = currentPlayerTurn();

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [6, 7, 8]
    ];

    function selectedSquare(squareClicked, squareClickedIndex) {
        playBoard[squareClickedIndex] = currentPlayer;
        squareClicked.innerHTML = currentPlayer;
    }
    
    function playerChange() {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        displayStatus.innerHTML = currentPlayerTurn();
    }
    
    function result() {
        let winRound = false;
        for (let i = 0; i <= 7; i++) {
            const winningCombo = winningCombos[i];
            let a = playBoard[winningCombo[0]];
            let b = playBoard[winningCombo[1]];
            let c = playBoard[winningCombo[2]];
            if (a === '' || b === '' || c === '') {
                continue;
            }
            if (a === b && b === c) {
                winRound = true;
                break
            }
        }
    
        if (winRound) {
            displayStatus.innerHTML = winningMessage();
            gameActive = false;
            return;
        }
    
        let tiedRound = !playBoard.includes("");
        if (tiedRound) {
            displayStatus.innerHTML = tieMessage();
            gameActive = false;
            return;
        }
    
        playerChange();
    }
    
    function squareClicked(squareClickedEvent) {
        const squareClicked = squareClickedEvent.target;
        const squareClickedIndex = parseInt(squareClicked.getAttribute('data-cell-index'));
    
        if (playBoard[squareClickedIndex] !== "" || !gameActive) {
            return;
        }
    
        selectedSquare(squareClicked, squareClickedIndex);
        result();
    }
    
    function restartGame() {
        gameActive = true;
        currentPlayer = "X";
        playBoard = ["", "", "", "", "", "", "", "", ""];
        displayStatus.innerHTML = currentPlayerTurn();
        document.querySelectorAll('.square').forEach(square => square.innerHTML = "");
    }
    
    
    document.querySelectorAll('.square').forEach(square => square.addEventListener('click', squareClicked));
    document.querySelector('.reset').addEventListener('click', restartGame);
     