# Grid

Grid layout based on foundation grid flex system

##Advanced Sizing
If no sizing class is added to the column, it will simply expand to fill the leftover space
```
<Row>
  <Col small={4}>4 columns</Col>
  <Col>Whatever's left!</Col>
</Row>
```

## Row properties
| Name                | Type                   | Default         | Description|
|:-----|:-----|:-----|:-----|
| `align`     | `String`                 |            | Vertical alignment, available options are : top, middle, bottom, stretch. Example: (align='align-bottom').|
| `align`      | `String`                 |            | Horizontal alignment, available options ara right, center, justify, and spaced. Example: (align='align-spaced').|
| `up`       | `String`                 |            | To define column widths at the row-level, instead of the individual column level, you can add **up** property. Example (up='small-up-1 medium-up-3').|
| `expanded`       | `Boolean`                 |            | Set width of Row to equal 100% |

## Column properties
Column number indicate the number of columns you’d like to use out of the possible 12 per row.

| Name                | Type                   | Default         | Description|
|:-----|:-----|:-----|:-----|
| `small`       | `Number`                 |            | Set number for column , for small screen size. |
| `medium`       | `Number`                 |            | Sets number for column, for medium screen size. |
| `large`       | `Number`                 |            | Sets number for column, for large screen size. |
| `shrink`       | `Boolean`                 |            | Column will only take up the horizontal space its contents need. |
| `offset`       | `String`                 |            | Set for current column offset. Example ( offset='small-offset-3 medium-offset-6' ). |
| `order`       | `String`                 |            | Set manual ordering for column (1-6). Example : *order='small-order-1'*|
| `className`         | `String`               | `''`            | Sets a class to style of the Component.|


## Theme

| Name     | Description|
|:---------|:-----------|
| `column` | Column class.|
| `row`  | Row class.|
| `small-{1-12} | medium-{1-12} | large-{1-12} `   | Classes for column with modifiers.|
| `align-{right | center | justify | spaced}`   | Classes for row horizontal align.|
| `align-{top | middle | bottom | stretch}`   | Classes for row vertical align.|
| `{small | medium | large}-offset-{1-12}`   | Classes for row offset columns.|
| `{small | medium | large}-order-{1-6}`   | Classes for row order columns.|
| `{small | medium | large}-up-{1-12}`   | Classes for row with UP modifier.|



