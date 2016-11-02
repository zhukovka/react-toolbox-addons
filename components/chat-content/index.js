import {themr} from 'react-css-themr';
import {CHAT_CONTENT} from '../identifiers.js';
import ChatContent from './ChatContent.js';
import theme from './theme.scss';
const ThemedChatComponent = themr(CHAT_CONTENT, theme)(ChatContent);

export default ThemedChatComponent;
export {ThemedChatComponent as ChatContent};
