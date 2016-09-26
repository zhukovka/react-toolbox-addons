import {themr} from 'react-css-themr';
    import {STYLEDLISTITEM} from '../identifiers';
    import theme from './theme.scss';
    import {StyledListItemFactory} from './StyledListItem';
    const StyledListItem = StyledListItemFactory();
    const ThemedStyledListItem = themr(STYLEDLISTITEM, theme)(StyledListItem);
    export default ThemedStyledListItem;
