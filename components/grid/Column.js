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
const RTColumn = (props) => {
    const {className, theme, children, offset, align, small, medium, large, order, shrink, ...other} = props;
    const classes = classnames(theme.card, {
        [theme[CSS_COLUMN_CLASS]]: true, // default
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
RTColumn.propTypes = {
    align: PropTypes.string,
    children: PropTypes.array,
    className: PropTypes.string,
    large: PropTypes.string,
    medium: PropTypes.string,
    offset: PropTypes.string,
    order: PropTypes.string,
    shrink: PropTypes.string,
    small: PropTypes.string,
    theme: PropTypes.object
};
export default RTColumn;
