import { themr } from 'react-css-themr';
import { SIDEBAR_PLUS } from '../identifiers.js';
import { sidebarPlusFactory } from './SidebarPlus.js';

import theme from './theme.scss';

const SidebarPlus = sidebarPlusFactory();
const ThemedSidebarPlus = themr(SIDEBAR_PLUS, theme)(SidebarPlus);

export default ThemedSidebarPlus;
export { ThemedSidebarPlus as SidebarPlus };
