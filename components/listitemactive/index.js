import { themr } from 'react-css-themr';
import { LISTITEMACTIVE } from '../identifiers.js';
import { listItemActiveFactory } from './ListItemActive.js';
import theme from './theme.scss';
import { ListItem } from 'react-toolbox/lib/list';


// const ListItemActive = listItemActiveFactory(ListItem);
// const ThemedListItemActive = themr(LISTITEMACTIVE, theme)(ListItemActive);
//
// export default ThemedListItemActive;
// export { ThemedListItemActive as ListItemActive };

const ListItemActive = listItemActiveFactory(ListItem);
const ThemedDropdownPlus = themr(LISTITEMACTIVE, theme)(ListItemActive);

export default ThemedDropdownPlus;
export { ThemedDropdownPlus as ListItemActive };
