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
            ripple: PropTypes.bool,
            selectable: PropTypes.bool,
            inverse: PropTypes.bool,
            theme: PropTypes.shape({
                flexlist: PropTypes.string,
                inverse: PropTypes.string
            })
        };

        static defaultProps = {
            className: '',
            ripple: false,
            selectable: false
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
            const {theme, align, className, inverse} = this.props;
            return (
                <ul data-react-toolbox='flexlist'
                    className={classnames([theme.flexlist, theme[align]], {[theme.inverse]: inverse}, className)}>
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
