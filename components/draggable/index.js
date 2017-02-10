import {draggablelistItemFactory} from './DraggableListItem';
import theme from './theme.scss';
import { themr } from 'react-css-themr';
import rippleFactory from 'react-toolbox/lib/ripple';
import { ListItemText } from 'react-toolbox/lib/list/ListItemText.js';
import { Avatar } from 'react-toolbox/lib/avatar';
import { listItemActionsFactory } from 'react-toolbox/lib/list/ListItemActions.js';
import { ListItemAction } from 'react-toolbox/lib/list/ListItemAction.js';

import { listItemContentFactory } from 'react-toolbox/lib/list/ListItemContent.js';
import {listItemLayoutFactory} from 'react-toolbox/lib/list/ListItemLayout.js';
import {DRAGGABLE_LIST} from '../identifiers';
import DraggableList from './DraggableList';

const ripple = rippleFactory({ centered: false, listItemIgnore: true });
const applyTheme = (Component) => themr('list', theme)(Component);
const ThemedListItemAction = applyTheme(ListItemAction);


const ThemedListItemText = applyTheme(ListItemText);
const ThemedListItemActions = applyTheme(listItemActionsFactory(ThemedListItemAction));

const ThemedListItemContent = applyTheme(listItemContentFactory(ThemedListItemText));
const ThemedListItemLayout = applyTheme(listItemLayoutFactory(Avatar, ThemedListItemContent, ThemedListItemActions));
const ThemedDraggableListItem = applyTheme(draggablelistItemFactory(ripple, ThemedListItemLayout, ThemedListItemContent));

const ThemedDraggableList = themr(DRAGGABLE_LIST, theme)(DraggableList);
export {ThemedDraggableListItem as DraggableListItem};
export {ThemedDraggableList as DraggableList};
