import React, { PropTypes } from 'react';
import { themr } from 'react-css-themr';
import rippleFactory from 'react-toolbox/lib/ripple';
import {ListItem} from 'react-toolbox/lib/list';
import InjectListItemContent from 'react-toolbox/lib/list/ListItemContent.js';
import InjectListItemLayout from 'react-toolbox/lib/list/ListItemLayout.js';

const _ripple = rippleFactory({ centered: false, listItemIgnore: true });

const factory = (ripple, ListItemLayout, ListItemContent) => {
  class DraggableListItem extends ListItem {

    static propTypes = {
      children: PropTypes.any,
      className: PropTypes.string,
      disabled: PropTypes.bool,
      onClick: PropTypes.func,
      ripple: PropTypes.bool,
      theme: PropTypes.shape({
        listItem: PropTypes.string
      }),
      group: PropTypes.string,
      to: PropTypes.string,
      onDragStart: PropTypes.func,
      onDragEnd: PropTypes.func
    };

    static defaultProps = {
      className: '',
      disabled: false,
      ripple: false
    };


    groupChildren () {
      const children = {
        leftActions: [],
        rightActions: [],
        ignored: []
      };

      React.Children.forEach(this.props.children, (child, i) => {
        if (!React.isValidElement(child)) {
          return;
        }

        const { listItemIgnore, ...rest } = child.props;
        const strippedChild = { ...child, ...{ props: rest } };

        if (listItemIgnore) {
          children.ignored.push(strippedChild);
          return;
        }
        if (child.type === ListItemContent) {
          children.itemContent = strippedChild;
          return;
        }
        const bucket = children.itemContent ? 'rightActions' : 'leftActions';
        children[bucket].push({...strippedChild, key: i});
      });

      return children;
    }
    render () {
      const {className, onMouseDown, onTouchStart, to, onClick, ripple: hasRipple, theme, onDragStart, onDragEnd, onDragOver, draggable, ...other} = this.props; //eslint-disable-line no-unused-vars
      const children = this.groupChildren();
      const content = <ListItemLayout theme={theme} {...children} {...other}/>;
      return (
        <li className={`${theme.listItem} ${className}`} onClick={this.handleClick} onMouseDown={onMouseDown} onTouchStart={onTouchStart}
          draggable={draggable} onDragEnd={onDragEnd} onDragStart={onDragStart} onDragOver={onDragOver} {...other}
        >
          {to ? <a href={this.props.to}>{content}</a> : content}
          {children.ignored}
        </li>
      );
    }
  }
  return ripple(DraggableListItem);
};


const DraggableListItem = factory(_ripple, InjectListItemLayout, InjectListItemContent);

export default themr('dragList')(DraggableListItem);
export { factory as draggablelistItemFactory };
export { DraggableListItem };
