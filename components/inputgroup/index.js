import {themr} from 'react-css-themr';
import {INPUTGROUP} from '../identifiers';
import theme from './theme.scss';
import {InputGroupFactory} from './InputGroup';
const InputGroup = InputGroupFactory();
const ThemedInputGroup = themr(INPUTGROUP, theme)(InputGroup);
export default ThemedInputGroup;
