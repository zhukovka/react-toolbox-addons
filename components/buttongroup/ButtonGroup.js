import React, {PropTypes} from 'react';
import {themr} from 'react-css-themr';
import classnames from 'classnames';
import {BUTTON_GROUP} from '../identifiers';

/**
 * ButtonGroup - wrapper for buttons or inputs with buttons
 */
const ButtonGroup = ({children, className, white, theme, align})=> {
    const classes = classnames(theme.buttonGroup, {
        [theme.white]: white
    }, theme[align], className);
    return (
        <div className={classes}>
            {children}
        </div>
    );
};
ButtonGroup.propTypes = {
    align: PropTypes.oneOf(['center', 'start', 'end']),
    children: PropTypes.node,
    className: PropTypes.string,
    theme: PropTypes.shape({
        buttonGroup: PropTypes.string,
        white: PropTypes.string
    }),
    /**
     * sets color of containing buttons to white
     * Boolean white
     */
    white: PropTypes.bool
};


const factory = () => ButtonGroup;
export default themr(BUTTON_GROUP)(ButtonGroup);
export {factory as buttonGroupFactory};
export {ButtonGroup};

