import React, {PropTypes} from 'react';
import classnames from 'classnames';
import {themr} from 'react-css-themr';
import {INPUTGROUP} from '../identifiers';

const InputGroup = ({children, className, shadow, rightIcon, theme, ...other}) => {
    const classes = classnames(theme.inputgroup, {
        [theme.rightIcon]: rightIcon,
        [theme.shadow]: shadow
    }, className);
    return (
        <div className={classes} {...other}>
            {children}
        </div>);
};
InputGroup.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    /**
     * set to place any font icon to the right inside the preceding input
     * Boolean rightIcon
     */
    rightIcon: PropTypes.bool,
    /**
     * set to add bottom shadow to the input group
     * Boolean shadow
     */
    shadow: PropTypes.bool,
    theme: PropTypes.shape({
        inputgroup: PropTypes.string,
        rightIcon: PropTypes.string,
        shadow: PropTypes.string
    })
};
const factory = () => InputGroup;
export default themr(INPUTGROUP)(InputGroup);
export {factory as InputGroupFactory};
export {InputGroup};
