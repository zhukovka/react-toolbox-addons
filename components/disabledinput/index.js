import {DISABLED_INPUT} from '../identifiers';
import { themr } from 'react-css-themr';
import { disabledInputFactory } from './DisabledInput';
import theme from './theme.scss';

const DisabledInput = disabledInputFactory();
const ThemedDisabledInput = themr(DISABLED_INPUT, theme)(DisabledInput);

export default ThemedDisabledInput;
export { ThemedDisabledInput as DisabledInput };
