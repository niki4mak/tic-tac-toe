import './style.css'

document.querySelector('#app').innerHTML = `
    <div class="game_title">TIC-TAC-TOE GAME</div>
    <div class="game_status">X's turn</div>
    <div class="game_container">
      <div id="0" class="cell"></div>
      <div id="1" class="cell"></div>
      <div id="2" class="cell"></div>
      <div id="3" class="cell"></div>
      <div id="4" class="cell"></div>
      <div id="5" class="cell"></div>
      <div id="6" class="cell"></div>
      <div id="7" class="cell"></div>
      <div id="8" class="cell"></div>
    </div>
    <button id="restart_button">Restart</button>
`
const gameStatus = document.querySelector('.game_status');
const cells = document.querySelectorAll('.cell');
const restartBtn = document.querySelector('#restart_button');
const winCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let isGameOver = false;
let counter = 0;

updateStatus();
startGame();

function startGame(){
  restartBtn.addEventListener('click', restartGame);

  cells.forEach((cell) => {
    cell.addEventListener('click', () =>  {
      makeTurn(cell);
    })
  })
}

function makeTurn(cell){
  if(isGameOver) return;

  if(cell.textContent === 'X' || cell.textContent === '0') return;

  cell.textContent = currentPlayer;
  board[Number(cell.id)] = currentPlayer;
  counter++;

  const winCombo = checkWin();

  if(winCombo){
    isGameOver = true;
    highlightCells(winCombo);
    gameStatus.textContent = `${currentPlayer} wins!`;
    return;
  }

  if(counter === 9){
    isGameOver = true;
    gameStatus.textContent = `Draw!`;
    return;
  }

  currentPlayer = currentPlayer === 'X' ? '0' : 'X';
  updateStatus();
}

function updateStatus(){
  gameStatus.textContent = `${currentPlayer}'s turn`;
}

function checkWin(){
  for(let i = 0; i < winCombinations.length; i++){
    const [a, b, c] = winCombinations[i];

    if(board[a] !== '' &&
      board[a] === board[b] &&
      board[b] === board[c]
    ){
      return [a, b, c];
    }
  }
  return null;
}

function highlightCells(winCombo){
  winCombo.forEach((index) => {
    cells[index].classList.add('winner');
  })
}

function restartGame(){
  cells.forEach((cell) => {
    cell.textContent = '';
    cell.classList.remove('winner');
  })

  currentPlayer = 'X';
  isGameOver = false;
  counter = 0;
  board = ['', '', '', '', '', '', '', '', ''];
  updateStatus();
}



