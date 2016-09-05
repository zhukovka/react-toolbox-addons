import {themr} from 'react-css-themr';
import {STATUSAVATAR} from '../identifiers';
import theme from './theme.scss';
import StatusAvatar from './StatusAvatar';
const ThemedStatusAvatar = themr(STATUSAVATAR, theme)(StatusAvatar);
export default ThemedStatusAvatar;
