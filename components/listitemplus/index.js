import { themr } from 'react-css-themr';
import { LISTITEMPLUS } from '../identifiers.js';
import { listItemPlusFactory } from './ListItemPlus.js';
import { ListItem } from 'react-toolbox/lib/list';
import theme from './theme.scss';

const ListItemPlus = listItemPlusFactory(ListItem);
const ThemedListItemPlus = themr(LISTITEMPLUS, theme)(ListItemPlus);

export default ThemedListItemPlus;
export { ThemedListItemPlus as ListItemPlus };
