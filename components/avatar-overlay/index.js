import {themr} from 'react-css-themr';
import theme from './theme.scss';
import {AvatarOverlay} from './AvatarOverlay';
import {AVATAR_OVERLAY} from '../identifiers';

const _AvatarOverlay = themr(AVATAR_OVERLAY, theme)(AvatarOverlay);

export {_AvatarOverlay as AvatarOverlay};
export default _AvatarOverlay;
