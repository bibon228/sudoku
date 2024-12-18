```java
package sudoku.gui;

import sudoku.SudokuGame;
import javax.swing.*;
import java.awt.*;
import java.awt.event.KeyAdapter;
import java.awt.event.KeyEvent;

/**
 * Главное окно игры Судоку
 */
public class SudokuFrame extends JFrame {
    private final SudokuGame game;
    private final SudokuCell[][] cells;
    private final JPanel boardPanel;
    private final JButton newGameButton;
    private final JButton checkButton;
    private final JLabel messageLabel;

    public SudokuFrame() {
        game = new SudokuGame();
        cells = new SudokuCell[9][9];

        setTitle("Судоку");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLayout(new BorderLayout(10, 10));

        // Создаем панель с сеткой судоку
        boardPanel = new JPanel(new GridLayout(9, 9, 1, 1));
        boardPanel.setBorder(BorderFactory.createLineBorder(Color.BLACK, 2));
        createCells();

        // Создаем панель управления
        JPanel controlPanel = new JPanel();
        newGameButton = new JButton("Новая игра");
        checkButton = new JButton("Проверить");
        messageLabel = new JLabel("");
        messageLabel.setForeground(Color.BLUE);

        controlPanel.add(newGameButton);
        controlPanel.add(checkButton);
        controlPanel.add(messageLabel);

        // Добавляем компоненты на форму
        add(boardPanel, BorderLayout.CENTER);
        add(controlPanel, BorderLayout.SOUTH);

        // Настраиваем обработчики событий
        setupEventHandlers();

        // Начинаем новую игру
        startNewGame();

        // Устанавливаем размер и положение окна
        pack();
        setLocationRelativeTo(null);
    }

    private void createCells() {
        for (int row = 0; row < 9; row++) {
            for (int col = 0; col < 9; col++) {
                SudokuCell cell = new SudokuCell(row, col);
                cells[row][col] = cell;
                
                // Добавляем рамки для визуального разделения блоков 3x3
                int top = (row % 3 == 0) ? 2 : 1;
                int left = (col % 3 == 0) ? 2 : 1;
                int bottom = (row % 3 == 2) ? 2 : 1;
                int right = (col % 3 == 2) ? 2 : 1;
                
                cell.setBorder(BorderFactory.createMatteBorder(top, left, bottom, right, Color.BLACK));
                boardPanel.add(cell);
            }
        }
    }

    private void setupEventHandlers() {
        newGameButton.addActionListener(e -> startNewGame());
        
        checkButton.addActionListener(e -> checkSolution());

        // Добавляем обработчик ввода для всех ячеек
        for (int row = 0; row < 9; row++) {
            for (int col = 0; col < 9; col++) {
                final SudokuCell cell = cells[row][col];
                cell.addKeyListener(new KeyAdapter() {
                    @Override
                    public void keyReleased(KeyEvent e) {
                        if (!cell.isInitial() && !cell.getText().isEmpty()) {
                            int number = Integer.parseInt(cell.getText());
                            if (!game.makeMove(cell.getRow(), cell.getCol(), number)) {
                                messageLabel.setText("Недопустимый ход!");
                                cell.setText("");
                            } else {
                                messageLabel.setText("");
                            }
                        }
                    }
                });
            }
        }
    }

    private void startNewGame() {
        game.newGame();
        updateBoard();
        messageLabel.setText("");
    }

    private void updateBoard() {
        int[][] boardState = game.getBoardState();
        for (int row = 0; row < 9; row++) {
            for (int col = 0; col < 9; col++) {
                SudokuCell cell = cells[row][col];
                int value = boardState[row][col];
                
                if (value != 0) {
                    cell.setText(String.valueOf(value));
                    cell.setInitial(true);
                } else {
                    cell.setText("");
                    cell.setInitial(false);
                }
            }
        }
    }

    private void checkSolution() {
        if (game.isGameComplete()) {
            messageLabel.setText("Поздравляем! Вы решили головоломку!");
            JOptionPane.showMessageDialog(this, 
                "Поздравляем! Вы успешно решили головоломку!", 
                "Победа!", 
                JOptionPane.INFORMATION_MESSAGE);
        } else {
            messageLabel.setText("Решение пока не верно. Продолжайте!");
        }
    }
}
```