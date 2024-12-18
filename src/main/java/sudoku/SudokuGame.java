```java
package sudoku;

/**
 * Основной класс, управляющий игровым процессом Судоку
 */
public class SudokuGame {
    private Board board;
    private final GameValidator validator;

    public SudokuGame() {
        this.board = new Board();
        this.validator = new GameValidator();
    }

    /**
     * Начинает новую игру со случайно сгенерированной головоломкой
     */
    public void newGame() {
        board = BoardGenerator.generateBoard();
    }

    /**
     * Размещает число на доске, если ход допустим
     * @param row Номер строки (0-8)
     * @param col Номер столбца (0-8)
     * @param number Число для размещения (1-9)
     * @return true, если ход допустим и успешно выполнен
     */
    public boolean makeMove(int row, int col, int number) {
        if (!validator.isValidMove(board, row, col, number)) {
            return false;
        }
        board.setNumber(row, col, number);
        return true;
    }

    /**
     * Проверяет, завершена ли игра успешно
     * @return true, если головоломка решена правильно
     */
    public boolean isGameComplete() {
        return validator.isBoardComplete(board);
    }

    /**
     * Получает текущее состояние доски
     * @return Двумерный массив, представляющий доску
     */
    public int[][] getBoardState() {
        return board.getBoard();
    }
}
```