---
title: "Tables"
description: "Tables in Documenta: inserting, rows and columns, merged cells, borders and shading, ready-made styles, repeated header, sorting and formulas like =SUM(ABOVE)."
project: "documenta"
order: 6
section: "Tables and Objects"
---

## Inserting a table

- **Insert › Table…** (<kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>T</kbd>) or the table button in the toolbar: rows and columns are picked on a grid.
- **Insert › Convert to Table** turns the selected text into a table, with the automatic separator or one you choose. **Format › Table › Convert to Text** does the reverse.

With the cursor in a table, the **Format › Table** menu and the **Table** tab of the inspector appear.

## Rows, columns and cells

- **Insert Row Above** or **Below**, **Insert Column Left** or **Right**; **Delete Row**, **Delete Column**, **Delete Table**.
- **Merge Cells** on two or more selected cells, vertically too; **Unmerge Cells**, **Split into Two Columns** or **into Two Rows**.
- **Equal Columns** spreads the width evenly; the inspector also changes a cell's width, the table's position and the cells' inner margin.
- Tables can be nested inside one another.

## Borders, shading and styles

- **Borders**: ready-made boxes from the menu, or color, width and cell sides in the inspector. Background, sides and vertical alignment of the text apply to the selected cells.
- **Table Style**: Grid, Colored Header, Banded Rows, Rows Only, No Borders.
- **Repeat First Row on Each Page**: the header comes back at the top of every page the table continues on.

## Sorting rows

**Format › Table › Sort Rows**, A to Z or Z to A, by the cursor's column. Text, numbers and dates are each sorted by their type; the header row stays put.

## Formulas

**Format › Table › Formula** puts a calculated result in the cell:

- **Sum**, **Average**, **Minimum**, **Maximum** and **Count** of the cells above or to the left, like Word's `=SUM(ABOVE)` or `=AVERAGE(LEFT)`;
- **On Specific Cells…**: columns A, B, C… from the left and rows 1, 2, 3… from the top. `A1:B3` is a rectangle; several cells or ranges are separated by semicolons.

Formulas recalculate when the table changes; **Update Formulas** recalculates them on request. The result uses the number format of the cells, with the currency and decimal separator it finds. In RTF, DOC and plain text only the result remains; in ODT, a formula in a cell that also has other text is found again by Documenta, but not by LibreOffice.
