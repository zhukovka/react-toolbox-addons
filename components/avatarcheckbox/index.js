import { themr } from 'react-css-themr';
import { AVATARCHECKBOX } from '../identifiers.js';
import { avatarcheckboxFactory } from './AvatarCheckbox.js';
import theme from './theme.scss';

const Avatarbutton = avatarcheckboxFactory();
const ThemedAvatarbutton = themr(AVATARCHECKBOX, theme)(Avatarbutton);

export default ThemedAvatarbutton;
export { ThemedAvatarbutton as Avatarbutton };
