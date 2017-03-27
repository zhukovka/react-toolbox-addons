import theme from './theme.scss';
import {themr} from 'react-css-themr';
import GridItem from './GridItem.js';
import {GRID_ITEM} from '../identifiers';

const ThemedGridItem = themr(GRID_ITEM, theme)(GridItem);
export default ThemedGridItem;
export {ThemedGridItem as GridItem};
