import {themr} from 'react-css-themr';
import {HOVERABLECONTENT} from '../identifiers';
import theme from './theme.scss';
import {HoverableContentFactory} from './HoverableContent';
const HoverableContent = HoverableContentFactory();
const ThemedHoverableContent = themr(HOVERABLECONTENT, theme)(HoverableContent);
export default ThemedHoverableContent;
