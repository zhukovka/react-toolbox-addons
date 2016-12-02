import ElementClick from './ElementClick.js';
import {themr} from 'react-css-themr';
import theme from './theme.scss';
import {ELEMENT_CLICK} from '../identifiers.js';

const ThemedElementClick = themr(ELEMENT_CLICK, theme)(ElementClick);
export {ThemedElementClick as ElementClick};
export default ThemedElementClick;
