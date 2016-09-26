import React, {PropTypes} from 'react';
import classnames from 'classnames';
import {themr} from 'react-css-themr';
import {GROUPLISTITEM} from '../identifiers';
import {ListItem} from 'react-toolbox/lib/list';
const GroupListItem = ({theme, className, group, ...other}) => {
    const classes = classnames(theme.grouplistitem, theme[group], className);
    return (<ListItem {...other} className={classes} theme={theme}/>);
};
GroupListItem.propTypes = {
    className: PropTypes.string,
    group: PropTypes.string,
    theme: PropTypes.object
};
const factory = () => GroupListItem;
export default themr(GROUPLISTITEM)(GroupListItem);
export {factory as GroupListItemFactory};
export {GroupListItem};
