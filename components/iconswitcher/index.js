import {themr} from 'react-css-themr';
import {ICONSWITCHER} from '../identifiers';
import theme from './theme.scss';
import {IconSwitcherFactory} from './IconSwitcher';
const IconSwitcher = IconSwitcherFactory();
const ThemedIconSwitcher = themr(ICONSWITCHER, theme)(IconSwitcher);
export default ThemedIconSwitcher;
