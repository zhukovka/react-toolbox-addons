import {themr} from 'react-css-themr';
import {GROUPLISTITEM, LIST_ITEM_DROP_DOWN_CONTENT} from '../identifiers';
import theme from './theme.scss';
import {GroupListItemFactory} from './GroupListItem';
import {ListItemDropDownContentFactory} from './ListItemDropDownContent';
const GroupListItem = GroupListItemFactory();
const ListItemDropDownContent = ListItemDropDownContentFactory();
const ThemdeListItemWithDropDown = themr(LIST_ITEM_DROP_DOWN_CONTENT, theme)(ListItemDropDownContent);
const ThemedGroupListItem = themr(GROUPLISTITEM, theme)(GroupListItem);
export {ThemdeListItemWithDropDown as ListItemDropDownContent};
export {ThemedGroupListItem as GroupListItem};
