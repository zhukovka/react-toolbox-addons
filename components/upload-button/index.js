import {themr} from 'react-css-themr';
import theme from './theme.scss';
import {RTUploadButton} from './UploadButton.js';
import {UPLOAD_BUTTON} from '../identifiers.js';

const _RTUploadButton = themr(UPLOAD_BUTTON, theme)(RTUploadButton);
export {_RTUploadButton as UploadButton};