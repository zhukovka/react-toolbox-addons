import { themr } from 'react-css-themr';
import {CARD_EXPANDABLE} from '../identifiers';
import { cardExpandableFactory } from './CardExpandable.js';
import theme from './theme.scss';

const CardExpandable = cardExpandableFactory();
const ThemedCardExpandable = themr(CARD_EXPANDABLE, theme)(CardExpandable);

export default ThemedCardExpandable;
export { ThemedCardExpandable as CardExpandable };
