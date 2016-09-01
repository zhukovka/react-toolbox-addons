import {themr} from 'react-css-themr';
import theme from './theme.scss';
import {STYLED_INPUT, STYLED_DROPDOWN} from '../identifiers';
import {styledInputFactory} from './StyledInput';
import {StyledDropdown} from './StyledDropdown';

const StyledInput = styledInputFactory();
const ThemedStyledInput = themr(STYLED_INPUT, theme)(StyledInput);

const ThemedStyledDropdown = themr(STYLED_DROPDOWN, theme, { composeTheme: false })(StyledDropdown);


export {ThemedStyledInput as StyledInput};
export {ThemedStyledDropdown as StyledDropdown};
