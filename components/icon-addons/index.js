import {themr} from 'react-css-themr';
import IconWithContent from './IconWithContent.js';
import theme from './theme.scss';
import {ICON_WITH_CONTENT} from '../identifiers.js';

const ThemedIconWithContent = themr(ICON_WITH_CONTENT, theme)(IconWithContent);
export default ThemedIconWithContent;
export {ThemedIconWithContent as IconWithContent};
