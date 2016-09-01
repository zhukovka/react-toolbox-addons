import {themr} from 'react-css-themr';
import _theme from './theme.scss';
import {Row} from './Row';
import {Column} from './Column';
import {
  COLUMN,
  ROW
} from './constants';

const _Col = themr(COLUMN, _theme)(Column);
const _Row = themr(ROW, _theme)(Row);

export {_Col as Col};
export {_Row as Row};

