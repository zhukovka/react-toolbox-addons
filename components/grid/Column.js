import React, {PropTypes} from 'react';
import classnames from 'classnames';
import {
    CSS_COLUMN_CLASS,
    CSS_SMALL,
    CSS_MEDIUM,
    CSS_LARGE,
    CSS_ALIGN,
    CSS_SHRINK
} from './constants';

export function joinWithHyphen (...args) {
    return args.join('-');
}


export function classMaps (names, theme) {
    return (names || '').split(' ').map(str=>theme[str]);
}
const Column = (props) => {
    const {className, theme, children, offset, align, small, medium, large, order, shrink, ...other} = props;
    const classes = classnames(theme.card, theme[CSS_COLUMN_CLASS], {
        [theme[joinWithHyphen(CSS_SMALL, small)]]: small,
        [theme[joinWithHyphen(CSS_MEDIUM, medium)]]: medium,
        [theme[joinWithHyphen(CSS_LARGE, large)]]: large,
        [theme[joinWithHyphen(CSS_ALIGN, align)]]: align,
        [theme[CSS_SHRINK]]: shrink
    }, classMaps(offset, theme), classMaps(order, theme), className);

    return (
        <div data-react-toolbox='col' className={classes} {...other}>
            {children}
        </div>
    );
};
Column.propTypes = {
    align: PropTypes.string,
    children: PropTypes.any,
    className: PropTypes.string,
    large: PropTypes.number,
    medium: PropTypes.number,
    offset: PropTypes.string,
    order: PropTypes.string,
    shrink: PropTypes.bool,
    small: PropTypes.number,
    theme: PropTypes.object
};
export {Column};
