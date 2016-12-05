import React, {PropTypes} from 'react';
import {themr} from 'react-css-themr';
import classnames from 'classnames';
import {SIDEBAR_PLUS} from '../identifiers';

const factory = () => {
    const RedHeading = ({children, className, theme})=> {
        const classes = classnames(theme.redHeading, className);
        return (
            <h5 className={classes}>
                {children}
            </h5>
        );
    };

    RedHeading.propTypes = {
        children: PropTypes.any,
        className: PropTypes.string,
        theme: PropTypes.shape({
            redHeading: PropTypes.string
        })
    };

    return RedHeading;
};
const RedHeading = factory();
export default themr(SIDEBAR_PLUS)(RedHeading);
export {factory as redHeadingFactory};
export {RedHeading};
