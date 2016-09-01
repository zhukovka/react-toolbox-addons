import React, {PropTypes} from 'react';
import Dropdown from 'react-toolbox/lib/dropdown';
import {themr} from 'react-css-themr';
import classnames from 'classnames';
import {STYLED_DROPDOWN} from '../identifiers.js';

/**
 * StyledDropdown
 */

const StyledDropdown = ({theme, className, ...other})=> {
    const classes = classnames(theme.dropdown_styled, className);
    return (
        <Dropdown className={classes} {...other} theme={theme}/>
    );
};

StyledDropdown.propTypes = {
    allowBlank: PropTypes.bool,
    auto: PropTypes.bool,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    error: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    source: PropTypes.array.isRequired,
    template: PropTypes.func,
    theme: PropTypes.shape({
        active: PropTypes.string,
        disabled: PropTypes.string,
        dropdown: PropTypes.string,
        error: PropTypes.string,
        errored: PropTypes.string,
        field: PropTypes.string,
        label: PropTypes.string,
        selected: PropTypes.string,
        templateValue: PropTypes.string,
        up: PropTypes.string,
        value: PropTypes.string,
        values: PropTypes.string
    }),
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
};

const factory = ()=>StyledDropdown;
export default themr(STYLED_DROPDOWN)(StyledDropdown);
export {factory as styledDropdownFactory};
export {StyledDropdown};
