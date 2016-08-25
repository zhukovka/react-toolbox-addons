import React, {PropTypes} from 'react';
import {
    CSS_CLASS_STATUS_COMPONENT
} from './constants';
import classnames from 'classnames';

const StatusComponent = ({
    status,
    theme
}) => {
    const classes = classnames(theme[CSS_CLASS_STATUS_COMPONENT], theme[CSS_CLASS_STATUS_COMPONENT + '--' + status]);
    return (<span className={classes}></span>);
};
StatusComponent.propTypes = {
    status: PropTypes.string.isRequired,
    theme: PropTypes.object.isRequired
};
export {StatusComponent};
