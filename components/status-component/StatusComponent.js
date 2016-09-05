import React, {PropTypes} from 'react';
import {
    CSS_CLASS_STATUS_COMPONENT
} from './constants';
import classnames from 'classnames';

const StatusComponent = ({
    status,
    theme,
    className
}) => {
    const classes = classnames(theme[CSS_CLASS_STATUS_COMPONENT], theme[CSS_CLASS_STATUS_COMPONENT + '--' + status], className);
    return (<span className={classes}></span>);
};
StatusComponent.propTypes = {
    className: PropTypes.string,
    status: PropTypes.string.isRequired,
    theme: PropTypes.object
};
export {StatusComponent};
