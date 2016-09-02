import {themr} from 'react-css-themr';
import theme from './theme.scss';
import {DIALOG_LAYOUT} from '../identifiers';
import DialogLayout from './DialogLayout';

const ThemedDialogLayout = themr(DIALOG_LAYOUT, theme)(DialogLayout);

export default ThemedDialogLayout;
