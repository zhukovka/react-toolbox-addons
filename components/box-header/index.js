import {themr} from 'react-css-themr';
import theme from './theme.scss';
import {RTBoxHeader} from './box-header.js';
import {BOX_HEADER} from '../identifiers.js';

const _RTBoxHeader = themr(BOX_HEADER, theme)(RTBoxHeader);
export {_RTBoxHeader as BoxHeader};
