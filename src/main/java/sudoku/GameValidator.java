```java
package sudoku;

/**
 * Проверяет правила игры Судоку и допустимость ходов
 */
public class GameValidator {
    
    /**
     * Проверяет, допустим ли ход по правилам Судоку
     * @param board Текущее состояние доски
     * @param row Номер строки
     * @param col Номер столбца
     * @param number Число для проверки
     * @return true, если ход допустим
     */
    public boolean isValidMove(Board board, int row, int col, int number) {
        // Проверяем, не является ли ячейка частью начальной головоломки
        if (board.isInitialCell(row, col)) {
            return false;
        }

        // Проверяем, находится ли число в допустимом диапазоне
        if (number < 1 || number > 9) {
            return false;
        }

        return !isInRow(board, row, number) &&
               !isInColumn(board, col, number) &&
               !isInBox(board, row - row % 3, col - col % 3, number);
    }

    /**
     * Проверяет, есть ли число в указанной строке
     */
    private boolean isInRow(Board board, int row, int number) {
        for (int col = 0; col < Board.BOARD_SIZE; col++) {
            if (board.getNumber(row, col) == number) {
                return true;
            }
        }
        return false;
    }

    /**
     * Проверяет, есть ли число в указанном столбце
     */
    private boolean isInColumn(Board board, int col, int number) {
        for (int row = 0; row < Board.BOARD_SIZE; row++) {
            if (board.getNumber(row, col) == number) {
                return true;
            }
        }
        return false;
    }

    /**
     * Проверяет, есть ли число в квадрате 3x3
     */
    private boolean isInBox(Board board, int boxStartRow, int boxStartCol, int number) {
        for (int row = 0; row < 3; row++) {
            for (int col = 0; col < 3; col++) {
                if (board.getNumber(row + boxStartRow, col + boxStartCol) == number) {
                    return true;
                }
            }
        }
        return false;
    }

    /**
     * Проверяет, полностью ли заполнена доска и верно ли решение
     * @param board Текущее состояние доски
     * @return true, если головоломка решена правильно
     */
    public boolean isBoardComplete(Board board) {
        // Проверяем, заполнены ли все ячейки
        for (int row = 0; row < Board.BOARD_SIZE; row++) {
            for (int col = 0; col < Board.BOARD_SIZE; col++) {
                if (board.getNumber(row, col) == Board.EMPTY_CELL) {
                    return false;
                }
            }
        }

        // Проверяем правильность решения
        return isValidSolution(board);
    }

    /**
     * Проверяет правильность полного решения
     */
    private boolean isValidSolution(Board board) {
        // Проверяем строки
        for (int row = 0; row < Board.BOARD_SIZE; row++) {
            if (!isValidRow(board, row)) return false;
        }

        // Проверяем столбцы
        for (int col = 0; col < Board.BOARD_SIZE; col++) {
            if (!isValidColumn(board, col)) return false;
        }

        // Проверяем квадраты 3x3
        for (int row = 0; row < Board.BOARD_SIZE; row += 3) {
            for (int col = 0; col < Board.BOARD_SIZE; col += 3) {
                if (!isValidBox(board, row, col)) return false;
            }
        }

        return true;
    }

    private boolean isValidRow(Board board, int row) {
        boolean[] used = new boolean[Board.BOARD_SIZE + 1];
        for (int col = 0; col < Board.BOARD_SIZE; col++) {
            int num = board.getNumber(row, col);
            if (used[num]) return false;
            used[num] = true;
        }
        return true;
    }

    private boolean isValidColumn(Board board, int col) {
        boolean[] used = new boolean[Board.BOARD_SIZE + 1];
        for (int row = 0; row < Board.BOARD_SIZE; row++) {
            int num = board.getNumber(row, col);
            if (used[num]) return false;
            used[num] = true;
        }
        return true;
    }

    private boolean isValidBox(Board board, int startRow, int startCol) {
        boolean[] used = new boolean[Board.BOARD_SIZE + 1];
        for (int row = 0; row < 3; row++) {
            for (int col = 0; col < 3; col++) {
                int num = board.getNumber(startRow + row, startCol + col);
                if (used[num]) return false;
                used[num] = true;
            }
        }
        return true;
    }
}
```