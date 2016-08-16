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
      theme: PropTypes.shape({
        flexlist: PropTypes.string
      })
    };

    static defaultProps = {
      className: '',
      ripple: false,
      selectable: false
    };

    renderItems () {
      return React.Children.map(this.props.children, (item) => {
        if (item.type === ListItem) {
          return React.cloneElement(item, {
            ripple: this.props.ripple,
            selectable: this.props.selectable
          });
        } else {
          return React.cloneElement(item);
        }
      });
    }

    render () {
      const {theme, align} = this.props;
      return (
        <ul data-react-toolbox='flexlist' className={classnames([theme.flexlist, theme[align]], this.props.className)}>
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
