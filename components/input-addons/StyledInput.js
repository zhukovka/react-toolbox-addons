import React, {PropTypes} from 'react';
import Input from 'react-toolbox/lib/input';
import {themr} from 'react-css-themr';
import classnames from 'classnames';
import {STYLED_INPUT} from '../identifiers.js';


const StyledInput = ({theme, className, large, white, ...other})=> {
    const classes = classnames({[theme.large]: large, [theme.white]: white}, className);
    return (
        <Input theme={theme} className={classes} {...other} />
    );
};

StyledInput.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    error: PropTypes.string,
    floating: PropTypes.bool,
    hint: PropTypes.string,
    icon: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
    ]),
    label: PropTypes.string,
    large: PropTypes.bool,
    maxLength: PropTypes.number,
    multiline: PropTypes.bool,
    name: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onKeyPress: PropTypes.func,
    required: PropTypes.bool,
    theme: PropTypes.shape({
        bar: PropTypes.string,
        counter: PropTypes.string,
        disabled: PropTypes.string,
        error: PropTypes.string,
        errored: PropTypes.string,
        hidden: PropTypes.string,
        hint: PropTypes.string,
        icon: PropTypes.string,
        input: PropTypes.string,
        inputElement: PropTypes.string,
        large: PropTypes.string,
        required: PropTypes.string,
        withIcon: PropTypes.string
    }),
    type: PropTypes.string,
    value: PropTypes.any,
    white: PropTypes.bool
};

const factory = () => StyledInput;
export default themr(STYLED_INPUT)(StyledInput);
export {factory as styledInputFactory};
export {StyledInput};
