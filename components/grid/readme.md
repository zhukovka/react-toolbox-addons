# Grid

Grid layout base on foundation grid flex system

If you want to provide a theme via context, the component key is `RTAutocomplete`.

## Row properties
| Name                | Type                   | Default         | Description|
|:-----|:-----|:-----|:-----|
| `align`       | `String`                 |            | Vertical alignment are top, middle, bottom, and stretch.|
| `align`       | `String`                 |            | Horizontal alignment are right, center, justify, and spaced.|

## Column properties

| Name                | Type                   | Default         | Description|
|:-----|:-----|:-----|:-----|
| `small`       | `Number`                 |            | Sets column width , for small screen size. |
| `medium`       | `Number`                 |            | Sets column width , for medium screen size. |
| `large`       | `Number`                 |            | Sets column width , for large screen size. |
| `align`       | `String`                 |    'align-left'        | Columns can be aligned the same way you would align text in a paragraph. |
| `shrink`       | `Boolean`                 |            | Column will only take up the horizontal space its contents need. |
| `offset`       | `String`                 |            | Set for current column offset ( small-offset-3 ). |
| `className`         | `String`               | `''`            | Sets a class to style of the Component.|

Additional properties will be passed to the Input Component so you can use `hint`, `name` ... etc.

## Theme

| Name     | Description|
|:---------|:-----------|
| `column` | Column class.|
| `row`  | Row class.|
| `small-{1-12} | medium-{1-12} | large-{1-12} `   | Classes for column with modifiers.|
| `align-{right | center | justify | spaced}`   | Classes for row horizontal align.|
| `align-{top | middle | bottom | stretch}`   | Classes for row vertical align.|
| `{small | medium | large}-offset-{1-12}`   | Classes for row offset columns.|



