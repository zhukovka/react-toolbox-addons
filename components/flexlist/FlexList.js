import React, {Component, PropTypes} from 'react';
import classnames from 'classnames';
import {themr} from 'react-css-themr';
import {FLEXLIST} from '../identifiers.js';
import InjectFlexListItem from 'react-toolbox/lib/list/ListItem.js';

const factory = (ListItem) => {
    class FlexList extends Component {
        static propTypes = {
            align: PropTypes.oneOf(['right', 'space-between', 'space-around', 'center']),
            children: PropTypes.node,
            className: PropTypes.string,
            flexlist: PropTypes.string,
            inverse: PropTypes.bool,
            ripple: PropTypes.bool,
            selectable: PropTypes.bool,
            theme: PropTypes.shape({}),
            wrap: PropTypes.bool
        };

        static defaultProps = {
            className: '',
            ripple: false,
            selectable: false,
            wrap: true
        };

        renderItems () {
            return React.Children.map(this.props.children, (item) => {
                let clone;
                if (item.type === ListItem) {
                    clone = React.cloneElement(item, {
                        ripple: this.props.ripple,
                        selectable: this.props.selectable,
                        theme: this.props.theme
                    });
                } else {
                    clone = React.cloneElement(item, {theme: this.props.theme});
                }
                return clone;
            });
        }

        render () {
            const {theme, align, className, inverse, wrap} = this.props;
            const classes = classnames([theme.flexlist, theme[align]], {
                [theme.inverse]: inverse,
                [theme.wrap]: wrap
            }, className);
            return (
                <ul data-react-toolbox='flexlist'
                    className={classes}>
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
