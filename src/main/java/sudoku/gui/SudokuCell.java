```java
package sudoku.gui;

import javax.swing.*;
import java.awt.*;

/**
 * Представляет одну ячейку в сетке Судоку
 */
public class SudokuCell extends JTextField {
    private final int row;
    private final int col;
    private boolean isInitial;

    public SudokuCell(int row, int col) {
        this.row = row;
        this.col = col;
        this.isInitial = false;
        
        setHorizontalAlignment(JTextField.CENTER);
        setFont(new Font("Arial", Font.PLAIN, 20));
        setDocument(new NumberDocument()); // Ограничиваем ввод только цифрами
    }

    public int getRow() {
        return row;
    }

    public int getCol() {
        return col;
    }

    public void setInitial(boolean initial) {
        this.isInitial = initial;
        setEditable(!initial);
        if (initial) {
            setBackground(new Color(240, 240, 240));
            setForeground(Color.BLACK);
        } else {
            setBackground(Color.WHITE);
            setForeground(Color.BLUE);
        }
    }

    public boolean isInitial() {
        return isInitial;
    }
}
```