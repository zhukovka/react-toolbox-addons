import React, {PropTypes} from 'react';
import classnames from 'classnames';
import {TAB_ITEM} from './constants.js';

const TabItem = ({children, theme, active, primary, accent, className, ...other}) => {
    const classes = classnames(theme[TAB_ITEM], {
        [theme.active]: active,
        [theme.primary]: primary,
        [theme.accent]: accent
    }, className);
    return (
        <span className={classes} {...other}>{children}</span>
    );
};

TabItem.propTypes = {
    /**
     * add for item to have accent text color
     * Boolean accent
     */
    accent: PropTypes.bool,
    /**
     * add for item to have active class
     * Boolean active
     */
    active: PropTypes.bool,
    children: PropTypes.any,
    className: PropTypes.string,
    /**
     * add for item to have primary text color
     * Boolean primary
     */
    primary: PropTypes.bool,
    theme: PropTypes.object
};

export default TabItem;
