import React, {PropTypes} from 'react';
import classnames from 'classnames';
import Input from 'react-toolbox/lib/input';
import {List, ListItem} from 'react-toolbox/lib/list';
import {themr} from 'react-css-themr';
import {INPUTDDOWN} from '../identifiers';

const InputDdown = ({children, className, theme, accent, primary, array, hint, ...other}) => {
    const classes = classnames(theme.inputddown, {
        [theme.accent]: accent,
        [theme.primary]: primary
    }, className);
    const items = array.map((str, i, a) => (<ListItem legend={str} key={i} />));
    return (
        <Input className={classes} hint={hint} theme={theme} {...other}>
            <List selectable>
                {items}
            </List>
        </Input>
    );
};
InputDdown.propTypes = {
    /**
     * set accent text color to all children
     * Boolean accent
     */
    accent: PropTypes.bool,
    children: PropTypes.any,
    className: PropTypes.string,
    array: PropTypes.arrayOf(PropTypes.string),
    /**
     * set primary text color to all children
     * Boolean primary
     */
    primary: PropTypes.bool,
    hint: PropTypes.string,

    theme: PropTypes.shape({
        inputddown: PropTypes.string,
        rightIcon: PropTypes.string
    })
};
const factory = () => InputDdown;
export default themr(INPUTDDOWN)(InputDdown);
export {factory as InputDdownFactory};
export {InputDdown};
