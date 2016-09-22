import React, {PropTypes} from 'react';
import classnames from 'classnames';
import {themr} from 'react-css-themr';
import {HOVERABLECONTENT} from '../identifiers';
const HoverableContent = ({children, theme, className, flex, ...other}) => {
    const classes = classnames(theme.hoverablecontent, {[theme.flex]: flex}, className);

    const renderItems = ()=> {
        return React.Children.map(children, (item) => {

            const clone = React.cloneElement(item, {
                className: theme.hoverable_item
            });
            return clone;
        });
    };

    return (
        <div {...other} className={classes}>
            {renderItems()}
        </div>);
};
HoverableContent.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    flex: PropTypes.bool,
    theme: PropTypes.object
};
const factory = () => HoverableContent;
export default themr(HOVERABLECONTENT)(HoverableContent);
export {factory as HoverableContentFactory};
export {HoverableContent};
