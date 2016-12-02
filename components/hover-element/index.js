import HoverElement from './HoverElement.js';
import {themr} from 'react-css-themr';
import theme from './theme.scss';
import {HOVER_ELEMENT} from '../identifiers.js';

const ThemedHoverElement = themr(HOVER_ELEMENT, theme)(HoverElement);
export {ThemedHoverElement as HoverElement};
export default ThemedHoverElement;
