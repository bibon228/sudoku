```java
package sudoku;

import java.util.Random;

/**
 * Генерирует головоломки Судоку
 */
public class BoardGenerator {
    private static final Random random = new Random();

    /**
     * Генерирует новую доску Судоку с заполненными числами
     * @return Новый экземпляр доски с допустимым начальным состоянием
     */
    public static Board generateBoard() {
        Board board = new Board();
        
        // Генерируем решённую доску
        fillBoard(board);
        
        // Удаляем некоторые числа для создания головоломки
        createPuzzle(board);
        
        return board;
    }

    /**
     * Заполняет доску допустимым решением
     */
    private static boolean fillBoard(Board board) {
        for (int row = 0; row < Board.BOARD_SIZE; row++) {
            for (int col = 0; col < Board.BOARD_SIZE; col++) {
                if (board.getNumber(row, col) == Board.EMPTY_CELL) {
                    for (int number = 1; number <= Board.BOARD_SIZE; number++) {
                        if (new GameValidator().isValidMove(board, row, col, number)) {
                            board.setNumber(row, col, number);
                            if (fillBoard(board)) {
                                return true;
                            }
                            board.setNumber(row, col, Board.EMPTY_CELL);
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    }

    /**
     * Удаляет числа из решённой доски для создания головоломки
     */
    private static void createPuzzle(Board board) {
        int cellsToRemove = 40; // Регулируем сложность, изменяя это число
        while (cellsToRemove > 0) {
            int row = random.nextInt(Board.BOARD_SIZE);
            int col = random.nextInt(Board.BOARD_SIZE);
            
            if (board.getNumber(row, col) != Board.EMPTY_CELL) {
                board.setNumber(row, col, Board.EMPTY_CELL);
                cellsToRemove--;
            }
        }

        // Отмечаем оставшиеся числа как начальные ячейки
        for (int row = 0; row < Board.BOARD_SIZE; row++) {
            for (int col = 0; col < Board.BOARD_SIZE; col++) {
                if (board.getNumber(row, col) != Board.EMPTY_CELL) {
                    board.setInitialCell(row, col);
                }
            }
        }
    }
}
```