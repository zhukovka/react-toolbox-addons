import {themr} from 'react-css-themr';
import {STYLEDAVATAR} from '../identifiers';
import theme from './theme.scss';
import {StyledAvatarFactory} from './StyledAvatar';
const StyledAvatar = StyledAvatarFactory();
const ThemedStyledAvatar = themr(STYLEDAVATAR, theme)(StyledAvatar);
export default ThemedStyledAvatar;
