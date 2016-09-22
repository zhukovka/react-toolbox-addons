import React, {PropTypes} from 'react';
import classnames from 'classnames';
import {themr} from 'react-css-themr';
import {INPUTGROUP} from '../identifiers';

const InputGroup = ({children, className, shadow, rightIcon, theme, accent, primary, white, ...other}) => {
    const classes = classnames(theme.inputgroup, {
        [theme.accent]: accent,
        [theme.primary]: primary,
        [theme.rightIcon]: rightIcon,
        [theme.shadow]: shadow,
        [theme.white]: white
    }, className);
    return (
        <div className={classes} {...other} data-react-toolbox="inputgroup">
            {children}
        </div>);
};
InputGroup.propTypes = {
    /**
     * set accent text color to all children
     * Boolean accent
     */
    accent: PropTypes.bool,
    children: PropTypes.any,
    className: PropTypes.string,
    /**
     * set primary text color to all children
     * Boolean primary
     */
    primary: PropTypes.bool,
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
    }),
    /**
     * set white text color to all children
     * Boolean white
     */
    white: PropTypes.bool
};
const factory = () => InputGroup;
export default themr(INPUTGROUP)(InputGroup);
export {factory as InputGroupFactory};
export {InputGroup};
