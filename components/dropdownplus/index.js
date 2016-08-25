import { themr } from 'react-css-themr';
import { DROPDOWNPLUS } from '../identifiers.js';
import { dropdownFactory } from './DropdownPlus.js';
import { Input } from 'react-toolbox/lib/input';
import theme from './theme.scss';

const DropdownPlus = dropdownFactory(Input);
const ThemedDropdownPlus = themr(DROPDOWNPLUS, theme)(DropdownPlus);

export default ThemedDropdownPlus;
export { ThemedDropdownPlus as DropdownPlus };
