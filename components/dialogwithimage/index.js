import { themr } from 'react-css-themr';
import { DIALOGWITHIMAGE } from '../identifiers.js';
import { dialogImageFactory } from './DialogWithImage.js';
import theme from './theme.scss';

const DialogwithImage = dialogImageFactory();
const ThemedDialogwithImage = themr(DIALOGWITHIMAGE, theme)(DialogwithImage);

export default ThemedDialogwithImage;
export { ThemedDialogwithImage as DialogwithImage };
