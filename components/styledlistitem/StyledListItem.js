import React, {PropTypes} from 'react';
import classnames from 'classnames';
import {themr} from 'react-css-themr';
import {STYLEDLISTITEM} from '../identifiers';
import {ListItem} from 'react-toolbox/lib/list';
const StyledListItem = ({theme, className, ...other}) => {
    const classes = classnames(theme.styledlistitem, className);
    return (<ListItem {...other} className={classes} theme={theme}/>);
};
StyledListItem.propTypes = {
    className: PropTypes.string,
    theme: PropTypes.object
};
const factory = () => StyledListItem;
export default themr(STYLEDLISTITEM)(StyledListItem);
export {factory as StyledListItemFactory};
export {StyledListItem};
