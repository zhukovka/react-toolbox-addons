import {themr} from 'react-css-themr';
    import {GROUPLISTITEM} from '../identifiers';
    import theme from './theme.scss';
    import {GroupListItemFactory} from './GroupListItem';
    const GroupListItem = GroupListItemFactory();
    const ThemedGroupListItem = themr(GROUPLISTITEM, theme)(GroupListItem);
    export default ThemedGroupListItem;
