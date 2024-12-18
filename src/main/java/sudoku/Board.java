```java
package sudoku;

/**
 * Представляет игровую доску Судоку и операции с ней
 */
public class Board {
    private final int[][] board;
    private final boolean[][] initialCells;
    public static final int BOARD_SIZE = 9;
    public static final int EMPTY_CELL = 0;

    public Board() {
        this.board = new int[BOARD_SIZE][BOARD_SIZE];
        this.initialCells = new boolean[BOARD_SIZE][BOARD_SIZE];
    }

    /**
     * Устанавливает число на доске
     * @param row Номер строки
     * @param col Номер столбца
     * @param number Число для установки
     */
    public void setNumber(int row, int col, int number) {
        if (!initialCells[row][col]) {
            board[row][col] = number;
        }
    }

    /**
     * Получает число в указанной позиции
     * @param row Номер строки
     * @param col Номер столбца
     * @return Число в указанной позиции
     */
    public int getNumber(int row, int col) {
        return board[row][col];
    }

    /**
     * Получает копию текущего состояния доски
     * @return Двумерный массив, представляющий доску
     */
    public int[][] getBoard() {
        int[][] copy = new int[BOARD_SIZE][BOARD_SIZE];
        for (int i = 0; i < BOARD_SIZE; i++) {
            System.arraycopy(board[i], 0, copy[i], 0, BOARD_SIZE);
        }
        return copy;
    }

    /**
     * Отмечает ячейку как начальную (часть головоломки)
     * @param row Номер строки
     * @param col Номер столбца
     */
    public void setInitialCell(int row, int col) {
        initialCells[row][col] = true;
    }

    /**
     * Проверяет, является ли ячейка частью начальной головоломки
     * @param row Номер строки
     * @param col Номер столбца
     * @return true, если ячейка была частью начальной головоломки
     */
    public boolean isInitialCell(int row, int col) {
        return initialCells[row][col];
    }
}
```