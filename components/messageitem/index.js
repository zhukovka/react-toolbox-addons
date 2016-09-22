import {themr} from 'react-css-themr';
import {MESSAGEITEM} from '../identifiers';
import theme from './theme.scss';
import {MessageItemFactory} from './MessageItem';
const MessageItem = MessageItemFactory();
const ThemedMessageItem = themr(MESSAGEITEM, theme)(MessageItem);
export default ThemedMessageItem;
