import React, {PropTypes} from 'react';
import classnames from 'classnames';
import {
    CSS_ROW_CLASS,
    CSS_ROW_ALIGN,
    CSS_ROW_COLLAPSE,
    CSS_ROW_EXPANDED
} from './constants';
import {joinWithHyphen} from './Column.js';

const Row = ({className, children, theme, align, expanded, collapse}) => {

    const classes = classnames({
        [theme[CSS_ROW_CLASS]]: true,
        [theme[joinWithHyphen(CSS_ROW_ALIGN, align)]]: align,
        [theme[CSS_ROW_EXPANDED]]: expanded,
        [theme[CSS_ROW_COLLAPSE]]: collapse
    }, className);

    return (
        <div className={classes}>
            {children}
        </div>
    );
};
Row.propTypes = {
    align: PropTypes.string,
    children: React.PropTypes.any,
    className: PropTypes.string,
    collapse: PropTypes.bool,
    expanded: PropTypes.bool,
    theme: PropTypes.object
};
export {Row};
