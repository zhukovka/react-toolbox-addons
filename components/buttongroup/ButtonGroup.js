import React, {PropTypes} from 'react';
import {themr} from 'react-css-themr';
import classnames from 'classnames';
import {BUTTON_GROUP} from '../identifiers';

const ButtonGroup = ({children, className, white, theme})=> {
    const classes = classnames(theme.buttonGroup, {
        [theme.white]: white
    }, className);
    return (
        <div className={classes}>
            {children}
        </div>
    );
};
ButtonGroup.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    white: PropTypes.bool,
    theme: PropTypes.shape({
        buttonGroup: PropTypes.string,
        white: PropTypes.string
    })
};


const factory = () => ButtonGroup;
export default themr(BUTTON_GROUP)(ButtonGroup);
export {factory as buttonGroupFactory};
export {ButtonGroup};

