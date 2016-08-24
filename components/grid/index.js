import {themr} from 'react-css-themr';
import _theme from './theme.scss';
import RTRow from './Row';
import RTColumn from './Column';
import {
  COLUMN,
  ROW
} from '../identifiers.js';


const applyTheme = (Component, id)=>themr(id, _theme)(Component);

const Col = applyTheme(RTColumn, COLUMN);
const Row = applyTheme(RTRow, ROW);


export {Row, Col};

