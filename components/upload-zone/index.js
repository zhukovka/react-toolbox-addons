import {Upload} from './Upload';
import {themr} from 'react-css-themr';
import theme from './theme.scss';
import {UPLOAD} from '../identifiers.js';

const _Upload = themr(UPLOAD, theme)(Upload);
export {_Upload as Upload};
export default Upload;

