import { themr } from 'react-css-themr';
import { NAVDRAWER_PLUS } from '../identifiers.js';
import { navDrawerPlusFactory } from './NavDrawerPlus.js';

import theme from './theme.scss';

const NavDrawerPlus = navDrawerPlusFactory();
const ThemedNavDrawerPlus = themr(NAVDRAWER_PLUS, theme)(NavDrawerPlus);

export default ThemedNavDrawerPlus;
export { ThemedNavDrawerPlus as NavDrawerPlus };
