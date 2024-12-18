```java
package sudoku;

import sudoku.gui.SudokuFrame;
import javax.swing.*;

/**
 * Главный класс для запуска игры Судоку
 */
public class Main {
    public static void main(String[] args) {
        // Запускаем GUI в потоке обработки событий Swing
        SwingUtilities.invokeLater(() -> {
            try {
                // Устанавливаем системный Look and Feel
                UIManager.setLookAndFeel(UIManager.getSystemLookAndFeelClassName());
            } catch (Exception e) {
                e.printStackTrace();
            }
            
            SudokuFrame frame = new SudokuFrame();
            frame.setVisible(true);
        });
    }
}
```