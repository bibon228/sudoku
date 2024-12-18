import './style.css';
import { generateSudoku, isValid } from './sudoku.js';

let board = generateSudoku();
let selectedCell = null;

function createBoard() {
  const app = document.querySelector('#app');
  app.innerHTML = `
    <div class="sudoku-container">
      <div class="sudoku-board"></div>
      <div class="controls">
        <button onclick="window.checkSolution()">Проверить</button>
        <button onclick="window.newGame()">Новая игра</button>
      </div>
      <div class="message"></div>
    </div>
  `;

  const boardElement = document.querySelector('.sudoku-board');
  
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const cell = document.createElement('input');
      cell.type = 'text';
      cell.className = 'cell';
      cell.maxLength = 1;
      cell.dataset.row = i;
      cell.dataset.col = j;
      
      if (board[i][j] !== 0) {
        cell.value = board[i][j];
        cell.readOnly = true;
      }
      
      cell.addEventListener('input', (e) => {
        const value = e.target.value;
        if (value && (isNaN(value) || value < 1 || value > 9)) {
          e.target.value = '';
        }
      });
      
      boardElement.appendChild(cell);
    }
  }
}

window.checkSolution = () => {
  const cells = document.querySelectorAll('.cell');
  let isComplete = true;
  let isCorrect = true;
  
  cells.forEach(cell => {
    const row = parseInt(cell.dataset.row);
    const col = parseInt(cell.dataset.col);
    const value = parseInt(cell.value) || 0;
    
    if (value === 0) {
      isComplete = false;
    } else if (!isValid(board, row, col, value)) {
      isCorrect = false;
    }
  });
  
  const message = document.querySelector('.message');
  if (!isComplete) {
    message.textContent = 'Заполните все ячейки!';
  } else if (!isCorrect) {
    message.textContent = 'Решение неверное. Попробуйте еще раз!';
  } else {
    message.textContent = 'Поздравляем! Вы решили судоку!';
  }
};

window.newGame = () => {
  board = generateSudoku();
  createBoard();
  document.querySelector('.message').textContent = '';
};

createBoard();