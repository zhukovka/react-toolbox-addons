import { themr } from 'react-css-themr';
import { NAVDRAWER_PLUS_CHILDREN } from '../identifiers.js';
import NavDrawerPlusChildren from './NavDrawerPlusChildren.js';
import theme from './theme.scss';

const ThemedNavDrawerPlusChildren = themr(NAVDRAWER_PLUS_CHILDREN, theme)(NavDrawerPlusChildren);

export default ThemedNavDrawerPlusChildren;
export { ThemedNavDrawerPlusChildren as NavDrawerPlusChildren };
