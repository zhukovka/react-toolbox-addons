import React, {PropTypes} from 'react';
import classnames from 'classnames';
import {
    CSS_ROW_CLASS,
    CSS_ROW_ALIGN,
    CSS_ROW_COLLAPSE,
    CSS_ROW_EXPANDED
} from './constants';
import {joinWithHyphen,classMaps} from './Column.js';

const RTRow = ({className, children, theme, align, expanded, collapse, up}) => {

    const classes = classnames({
        [theme[CSS_ROW_CLASS]]: true,
        [theme[joinWithHyphen(CSS_ROW_ALIGN, align)]]: align,
        [theme[CSS_ROW_COLLAPSE]]: collapse,
        [theme[CSS_ROW_EXPANDED]] : expanded
    }, classMaps(up, theme), className);

    return (
        <div className={classes}>
            {children}
        </div>
    );
};
RTRow.propTypes = {
    align: PropTypes.string,
    children: PropTypes.array,
    className: PropTypes.string,
    collapse: PropTypes.bool,
    expanded: PropTypes.bool,
    theme: PropTypes.object
};
export default RTRow;
