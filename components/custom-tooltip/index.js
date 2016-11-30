import CustomTooltip from './CustomTooltip.js';
import {themr} from 'react-css-themr';
import theme from './theme.scss';
import {CUSTOM_TOOLTIP} from '../identifiers.js';

const ThemedCustomToolTip = themr(CUSTOM_TOOLTIP, theme)(CustomTooltip);

export default ThemedCustomToolTip;
export {ThemedCustomToolTip as CustomTooltip};
