import {themr} from 'react-css-themr';
import {GROUPLISTDIVIDER} from '../identifiers';
import theme from './theme.scss';
import {GroupListDividerFactory} from './GroupListDivider';
const GroupListDivider = GroupListDividerFactory();
const ThemedGroupListDivider = themr(GROUPLISTDIVIDER, theme)(GroupListDivider);
export default ThemedGroupListDivider;
