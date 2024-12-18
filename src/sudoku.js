// Генерация случайной доски судоку
function generateSudoku() {
  const board = Array(9).fill().map(() => Array(9).fill(0));
  
  // Заполняем несколько ячеек для начала игры
  fillInitialCells(board);
  return board;
}

function fillInitialCells(board) {
  // Заполняем 20 случайных ячеек числами
  for (let i = 0; i < 20; i++) {
    let row = Math.floor(Math.random() * 9);
    let col = Math.floor(Math.random() * 9);
    let num = Math.floor(Math.random() * 9) + 1;
    
    while (!isValid(board, row, col, num) || board[row][col] !== 0) {
      row = Math.floor(Math.random() * 9);
      col = Math.floor(Math.random() * 9);
      num = Math.floor(Math.random() * 9) + 1;
    }
    
    board[row][col] = num;
  }
}

function isValid(board, row, col, num) {
  // Проверка строки
  for (let x = 0; x < 9; x++) {
    if (board[row][x] === num) return false;
  }
  
  // Проверка столбца
  for (let x = 0; x < 9; x++) {
    if (board[x][col] === num) return false;
  }
  
  // Проверка 3x3 блока
  let startRow = row - row % 3;
  let startCol = col - col % 3;
  
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i + startRow][j + startCol] === num) return false;
    }
  }
  
  return true;
}

export { generateSudoku, isValid };