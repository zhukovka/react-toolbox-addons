import React, {PropTypes} from 'react';
import Input from 'react-toolbox/lib/input';
import {themr} from 'react-css-themr';
import classnames from 'classnames';
import {STYLED_INPUT} from '../identifiers.js';

/**
 * StyledInput props extend Input props
 */
const StyledInput = ({theme, className, large, white, ...other})=> {
    const classes = classnames({[theme.large]: large, [theme.white]: white}, theme.styled_input, className);
    return (
        <Input theme={theme} className={classes} {...other} />
    );
};

StyledInput.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    /**
     * sets text size to large
     * Boolean large
     */
    large: PropTypes.bool,
    theme: PropTypes.object,
    /**
     * sets text color to white
     * Boolean white
     */
    white: PropTypes.bool
};

const factory = () => StyledInput;
export default themr(STYLED_INPUT)(StyledInput);
export {factory as styledInputFactory};
export {StyledInput};
