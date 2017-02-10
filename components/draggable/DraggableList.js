import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

import DraggableListItem from './DraggableListItem';


const mergeProp = (propName, child, parent) => (
  child[propName] !== undefined
  ? child[propName]
  : parent[propName]
);

  class DraggableList extends Component {
    static propTypes = {
      children: PropTypes.node,
      className: PropTypes.string,
      ripple: PropTypes.bool,
      selectable: PropTypes.bool,
      theme: PropTypes.shape({
        list: PropTypes.string
      }),
      onDragEnd: PropTypes.func
    };

    static getLi (target) {
      let t = target;
      if (t.tagName == 'DIV') return t;
      if (t.parentNode.tagName == 'DIV') return t.parentNode;
      while(t.parentNode.tagName != 'DIV') {
        t = t.parentNode;
      }
      return t;
    }

    static defaultProps = {
      className: '',
      ripple: false,
      selectable: false
    };
    static createPlaceholder = () => {
      const l = document.createElement('li');
      l.classList.add('placeholder');
      l.textContent = 'drop here';
      l.style.textAlign='center';
      l.style.padding = '1rem';
      return l;
    }
    constructor(props) {
      super(props);
      this.state = {
        data: props.children
      };

      this.over = null;
      this.placeholder = DraggableList.createPlaceholder();
      this.nodePlacement = null;
    }
    onDragStart (e) {
      const target = e.currentTarget;
      if (target.children[0].tagName == 'LI') {
        this.dragged = e.currentTarget;
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', e.currentTarget);
      }
    }
    onDragOver (e) {
      e.preventDefault();
      let target = e.target;
      target = DraggableList.getLi(target);
      if (target.parentNode.children[0].tagName == 'LI') {
        this.dragged.style.display = 'none';
        if(e.target.className == 'placeholder') return;
          const li = DraggableList.getLi(e.target);
          this.over = li.parentNode;
          var relY = e.clientY - this.over.offsetTop;
          var height = this.over.offsetHeight / 2;
          var parent = li.parentNode.parentNode;

          if(relY > height) {
            this.nodePlacement = 'after';
            parent.insertBefore(this.placeholder, li.parentNode.nextElementSibling);
          }
          else if(relY < height) {
            this.nodePlacement = 'before'
            parent.insertBefore(this.placeholder, li.parentNode);
          }
      }
    }
    onDragEnd (e) {
      this.dragged.style.display = 'block';
      this.dragged.parentNode.removeChild(this.placeholder);
      const data = this.state.data;
      let from = parseInt(this.dragged.dataset.id);
      let to = parseInt(this.over.dataset.id);
      if(from < to) {
        to--;
      };
      if(this.nodePlacement == 'after') {
        to++;
      }
      let target = [...data];
      target.splice(to, 0, target.splice(from, 1)[0]);
      this.setState({data: target});
    }

    renderItems () {
      return React.Children.map(this.state.data, (item, idx) => {
          const selectable = mergeProp('selectable', item.props, this.props);
          const ripple = mergeProp('ripple', item.props, this.props);
          const wrapper = React.createElement('div', {
            onDragStart: this.onDragStart.bind(this),
            onDragEnd: this.onDragEnd.bind(this),
            draggable: true,
            'data-id': idx
          }, React.cloneElement(item, {
            selectable: selectable,
            ripple: ripple
          }));
          return wrapper;
      });
    }

    render () {
      return (
        <ul data-react-toolbox='list' className={classnames(this.props.theme.list, this.props.className)} onDragOver={this.onDragOver.bind(this)}>
          {this.renderItems()}
        </ul>
      );
    }
  }

export default DraggableList;
