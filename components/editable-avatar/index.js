import {themr} from 'react-css-themr';
import theme from './theme.scss';
import {EditableAvatar} from './EditableAvatar';
import {EDITABLE_AVATAR} from './constants';

const _EditableAvatar = themr(EDITABLE_AVATAR, theme)(EditableAvatar);
export {_EditableAvatar as EditableAvatar};
export default _EditableAvatar;
