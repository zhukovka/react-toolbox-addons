import {themr} from 'react-css-themr';
import {INPUTDDOWN} from '../identifiers';
import theme from './theme.scss';
import {InputDdownFactory} from './InputDdown';
const InputDdown = InputDdownFactory();
const ThemedInputDdown = themr(INPUTDDOWN, theme)(InputDdown);
export default ThemedInputDdown;
