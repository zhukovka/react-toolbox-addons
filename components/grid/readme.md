# Grid

A [dialog](https://www.google.com/design/spec/components/pickers.html#pickers-date-pickers) date  picker is used to select a single date. The selected day is indicated by a filled circle. The current day is indicated by a different color and type weight.

<!-- example -->
```jsx

## Properties

| Name            | Type            | Default       | Description |
|:-----|:-----|:-----|:-----|
| `active`        | `Boolean`       | `false`       | Allows to control if the picker should be shown from outside. Beware you should update the prop when the Dialog is closed. |
| `autoOk`        | `Boolean`       | `false`       | Automatically selects a date upon clicking on a day. |
| `className`     | `String`        |               | This class will be placed at the top of the `DatePickerDialog` component so you can provide custom styles.|
| `inputClassName`| `String`        |               | This class will be applied to `Input` component of `DatePicker`. |
| `inputFormat`   | `Function`      |               | Function to format the date displayed on the input. |
| `label`         | `String`        |               | The text string to use for the floating label element in the input component.|
| `locale`        | `String` or `Object` | `'en'`     | Set the locale for the date picker dialog ('en','es','af','ar','be','bg','bn','bo','br','bs','ca','gl','eu','pt','it',fr'). Object is supported too (see example above). |
| `maxDate`       | `Date`          |               | Date object with the maximum selectable date. |
| `minDate`       | `Date`          |               | Date object with the minimum selectable date. |
| `onChange`      | `Function`      |               | Callback called when the picker value is changed.|
| `onEscKeyDown`  | `Function`      |               | Callback called when the ESC key is pressed with the overlay active. |
| `onOverlayClick`| `Function`      |               | Callback to be invoked when the dialog overlay is clicked.|
| `readonly`      | `Boolean`       |               | The input element will be readonly and look like disabled.|
| `sundayFirstDayOfWeek` | `Boolean`| `false`       | Set week's first day to Sunday. Default week's first day is Monday ([ISO 8601](https://en.wikipedia.org/wiki/ISO_8601#Week_dates)). |
| `value`         | `Date`          |               | Date object with the currently selected date. |

## Theme

| Name     | Description|
|:---------|:-----------|
| `small` | small column .|
| `medium` | medium column.|
| `large` | large column.|
