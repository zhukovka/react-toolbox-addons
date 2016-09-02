import {themr} from 'react-css-themr';
import theme from './theme.scss';
import {BUTTON_GROUP} from '../identifiers';
import {buttonGroupFactory} from './ButtonGroup';

const ButtonGroup = buttonGroupFactory();
const ThemedButtonGroup = themr(BUTTON_GROUP, theme)(ButtonGroup);

export default ThemedButtonGroup;
