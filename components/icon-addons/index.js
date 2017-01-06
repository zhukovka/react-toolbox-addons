import {themr} from 'react-css-themr';
import IconWithContent from './IconWithContent.js';
import theme from './theme.scss';

const ThemedIconWithContent = themr("IconWithContent", theme)(IconWithContent);
export default ThemedIconWithContent;
export {ThemedIconWithContent as IconWithContent};
