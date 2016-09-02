import React, {PropTypes} from 'react';
import classnames from 'classnames';
import {
    TAB_ITEM,
    TAB_ITEM_ACTIVE
} from './constants.js';

const TabItem = ({children, theme, active, className, ...other}) => {
    const classes = classnames(theme[TAB_ITEM], {
        [theme[TAB_ITEM_ACTIVE]]: active
    }, className);
    return (
        <span className={classes} {...other}>{children}</span>
    );
};

TabItem.propTypes = {
    /**
     * add for item to have active class
     * Boolean active
     */
    active: PropTypes.bool,
    children: PropTypes.any,
    className: PropTypes.string,
    theme: PropTypes.object
};

export default TabItem;
