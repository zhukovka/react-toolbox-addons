import React, {Component, PropTypes} from 'react';
import classnames from 'classnames';
import {themr} from 'react-css-themr';
import {FLEXLIST} from '../identifiers.js';
import InjectFlexListItem from 'react-toolbox/lib/list/ListItem.js';

const factory = (ListItem) => {
    class FlexList extends Component {
        static propTypes = {
            align: PropTypes.oneOf(['right', 'space-between', 'space-around', 'center']),
            auto: PropTypes.bool,
            children: PropTypes.node,
            className: PropTypes.string,
            flexlist: PropTypes.string,
            inverse: PropTypes.bool,
            ripple: PropTypes.bool,
            selectable: PropTypes.bool,
            small: PropTypes.bool,
            theme: PropTypes.shape({}),
            width: PropTypes.string,
            wrap: PropTypes.bool
        };

        static defaultProps = {
            className: '',
            ripple: false,
            selectable: false,
            wrap: true
        };

        renderItems () {
            const {children, theme, ripple, selectable, width} = this.props;
            return React.Children.map(children, (item) => {
                let clone;
                if (item.type === ListItem) {
                    clone = React.cloneElement(item, {
                        ripple,
                        selectable,
                        theme
                    });
                } else {
                    const {className, style, ...other} = item.props;
                    clone = React.cloneElement(item, {
                        className: classnames({[theme.flexlist_item]: width}, className),
                        style: {width, ...style},
                        ...other
                    });
                }
                return clone;
            });
        }

        render () {
            const {children, theme, ripple, selectable, width, align, auto, className, small, inverse, wrap, ...other} = this.props; //eslint-disable-line no-unused-vars
            const classes = classnames([theme.flexlist, theme[align]], {
                [theme.inverse]: inverse,
                [theme.wrap]: wrap,
                [theme.auto]: auto,
                [theme.small]: small
            }, className);
            return (
                <ul data-react-toolbox='flexlist'
                    className={classes}
                    {...other}>
                    {this.renderItems()}
                </ul>
            );
        }
    }

    return FlexList;
};

const FlexList = factory(InjectFlexListItem);
export default themr(FLEXLIST)(FlexList);
export {factory as flexlistFactory};
export {FlexList};
