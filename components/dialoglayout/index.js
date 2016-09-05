import {themr} from 'react-css-themr';
import theme from './theme.scss';
import {DIALOG_LAYOUT} from '../identifiers';
import DialogLayout from './DialogLayout';
import DialogPanel from './DialogPanel';

const ThemedDialogLayout = themr(DIALOG_LAYOUT, theme)(DialogLayout);
const ThemedDialogPanel = themr(DIALOG_LAYOUT, theme)(DialogPanel);

export {ThemedDialogLayout as DialogLayout};
export {ThemedDialogPanel as DialogPanel};
