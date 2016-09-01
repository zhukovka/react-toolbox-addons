import {themr} from 'react-css-themr';
import {BOTTOMSHEET_PLUS} from '../identifiers.js';
import {bottomsheetFactory} from './BottomSheetPlus';
import {Overlay} from 'react-toolbox/lib/overlay';
import {IconButton} from 'react-toolbox/lib/button';
import theme from './theme.scss';

const ThemedBottomSheetPlus = themr(BOTTOMSHEET_PLUS, theme)(bottomsheetFactory(Overlay, IconButton));

export default ThemedBottomSheetPlus;
export {ThemedBottomSheetPlus as BottomSheetPlus};