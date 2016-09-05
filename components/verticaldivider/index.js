import {VERTICALDIVIDER} from '../identifiers';
import { themr } from 'react-css-themr';
import { verticalDividerFactory } from './VerticalDivider.js';
import theme from './theme.scss';

const VerticalDivider = verticalDividerFactory();
const ThemedVerticalDivider = themr(VERTICALDIVIDER, theme)(VerticalDivider);

export default ThemedVerticalDivider;
export { ThemedVerticalDivider as VerticalDivider };
