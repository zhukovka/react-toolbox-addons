import {RTNavigationChips} from './NavigationChips.js';
import { NAVIGATIONS_CHIPS } from '../identifiers.js';
import {themr} from 'react-css-themr';
import theme from './theme.scss';

const _RTNavigationChips = themr(NAVIGATIONS_CHIPS, theme)(RTNavigationChips);
export { _RTNavigationChips as NavigationChips };
