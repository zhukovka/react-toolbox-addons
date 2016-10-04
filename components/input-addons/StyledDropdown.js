import React, {PropTypes} from 'react';
import Dropdown from 'react-toolbox/lib/dropdown';
import {themr} from 'react-css-themr';
import classnames from 'classnames';
import {STYLED_DROPDOWN} from '../identifiers.js';

/**
 * StyledDropdown props extend Dropdown props
 */
const StyledDropdown = ({theme, className, primary, collapse, align, ...other})=> {
    const classes = classnames(theme.dropdown_styled, {
        [theme.primary]: primary,
        [theme.collapse]: collapse,
        [theme[align]]: align
        }, className);
    return (
        <Dropdown className={classes} {...other} theme={theme}/>
    );
};

StyledDropdown.propTypes = {
    /**
     * set to align text of selected item
     * one of ['right', 'center']
     * String align
     */
    align: PropTypes.oneOf(['right', 'center']),
    className: PropTypes.string,
    /**
     * set to remove top and bottom padding
     * Boolean collapse
     */
    collapse: PropTypes.bool,
    /**
     * set color of selected item text to primary
     * Boolean primary
     */
    primary: PropTypes.bool,
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
