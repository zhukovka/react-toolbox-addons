import React, {PropTypes} from 'react';
import Dropdown from 'react-toolbox/lib/dropdown';
import {themr} from 'react-css-themr';
import classnames from 'classnames';
import {STYLED_DROPDOWN} from '../identifiers.js';

/**
 * StyledDropdown props extend Dropdown props
 */
const StyledDropdown = ({theme, className, ...other})=> {
    const classes = classnames(theme.dropdown_styled, className);
    return (
        <Dropdown className={classes} {...other} theme={theme}/>
    );
};

StyledDropdown.propTypes = {
    className: PropTypes.string,
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
    })
};

const factory = ()=>StyledDropdown;
export default themr(STYLED_DROPDOWN)(StyledDropdown);
export {factory as styledDropdownFactory};
export {StyledDropdown};
