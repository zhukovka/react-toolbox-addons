import TabBar from './TabBar';
import TabItem from './TabItem';
import {themr} from 'react-css-themr';
import theme from './theme.scss';
import {
    TAB_BAR,
    TAB_ITEM
} from './constants';

const _TabBar = themr(TAB_BAR, theme)(TabBar);
const _TabItem = themr(TAB_ITEM, theme)(TabItem);

export {_TabBar as TabBar};
export {_TabItem as TabItem};
