import {themr} from 'react-css-themr';
import _theme from './theme.scss';
import RTRow from './Row';
import RTColumn from './Column';
import {
  RT_COLUMN,
  RT_ROW
} from './constants';


const applyTheme = (Component, id)=>themr(id, _theme)(Component);

const Col = applyTheme(RTColumn, RT_COLUMN);
const Row = applyTheme(RTRow, RT_ROW);


export {Row, Col};

