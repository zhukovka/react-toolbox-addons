import {themr} from 'react-css-themr';
import {GROUPLISTDIVIDER, GROUPLISTDIVIDERWITHCLICK} from '../identifiers';
import theme from './theme.scss';
import {GroupListDividerFactory} from './GroupListDivider';
import {GroupListDividerWithClickFactory} from './GroupListDividerWithClick';
const GroupListDivider = GroupListDividerFactory();
const GroupListDividerWithClick = GroupListDividerWithClickFactory();

const ThemedGroupListDivider = themr(GROUPLISTDIVIDER, theme)(GroupListDivider);
const ThemedGroupListDividerWithClick = themr(GROUPLISTDIVIDERWITHCLICK, theme)(GroupListDividerWithClick);
export {ThemedGroupListDivider as GroupListDivider};
export {ThemedGroupListDividerWithClick as GroupListDividerWithClick};
