import {RTUpload} from './Upload';
import {themr} from 'react-css-themr';
import theme from './theme.scss';
import {UPLOAD} from '../identifiers.js';

const _RTUpload = themr(UPLOAD, theme)(RTUpload);
export {_RTUpload as Upload};
