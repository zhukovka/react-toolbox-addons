import {RTDropZone} from './DropZone';
import {themr} from 'react-css-themr';
import theme from './theme.scss';
import {DROP_ZONE} from '../identifiers.js';

const _RTDropZone = themr(DROP_ZONE, theme)(RTDropZone);
export {_RTDropZone as DropZone};
