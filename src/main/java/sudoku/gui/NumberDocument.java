```java
package sudoku.gui;

import javax.swing.text.AttributeSet;
import javax.swing.text.BadLocationException;
import javax.swing.text.PlainDocument;

/**
 * Ограничивает ввод в текстовое поле только цифрами от 1 до 9
 */
public class NumberDocument extends PlainDocument {
    @Override
    public void insertString(int offs, String str, AttributeSet a) throws BadLocationException {
        if (str == null) return;
        
        // Проверяем, что вводится только одна цифра от 1 до 9
        if (getLength() + str.length() <= 1 && str.matches("[1-9]")) {
            super.insertString(offs, str, a);
        }
    }
}
```