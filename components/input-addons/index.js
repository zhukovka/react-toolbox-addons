import {themr} from 'react-css-themr';
import theme from './theme.scss';
import {STYLED_INPUT} from '../identifiers';
import {styledInputFactory} from './StyledInput';

const StyledInput = styledInputFactory();
const ThemedStyledInput = themr(STYLED_INPUT, theme)(StyledInput);

export {ThemedStyledInput as StyledInput};
