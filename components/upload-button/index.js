import {themr} from 'react-css-themr';
import theme from './theme.scss';
import {UploadButton} from './UploadButton.js';
import {UPLOAD_BUTTON} from '../identifiers.js';

const _RTUploadButton = themr(UPLOAD_BUTTON, theme)(UploadButton);
export {_RTUploadButton as UploadButton};
export default UploadButton;

