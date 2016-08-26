import {TRANSPARENT_CHIP} from '../identifiers.js';
import {themr} from 'react-css-themr';
import {chipTransparentFactory} from './ChipTransparent.js';
import theme from './theme.scss';
const ChipTransparent = chipTransparentFactory();
const ThemedChipTransparent = themr(TRANSPARENT_CHIP, theme)(ChipTransparent);

export default ThemedChipTransparent;
export {ThemedChipTransparent as ChipTransparent};
