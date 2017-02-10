'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mergeProp = function mergeProp(propName, child, parent) {
  return child[propName] !== undefined ? child[propName] : parent[propName];
};

var DraggableList = function (_Component) {
  _inherits(DraggableList, _Component);

  _createClass(DraggableList, null, [{
    key: 'getLi',
    value: function getLi(target) {
      var t = target;
      if (t.tagName === 'DIV') return t;
      if (t.parentNode.tagName === 'DIV') return t.parentNode;
      while (t.parentNode.tagName !== 'DIV') {
        t = t.parentNode;
      }
      return t;
    }
  }]);

  function DraggableList(props) {
    _classCallCheck(this, DraggableList);

    var _this = _possibleConstructorReturn(this, (DraggableList.__proto__ || Object.getPrototypeOf(DraggableList)).call(this, props));

    _this.state = {
      data: props.children
    };

    _this.over = null;
    _this.placeholder = DraggableList.createPlaceholder();
    _this.nodePlacement = null;
    return _this;
  }

  _createClass(DraggableList, [{
    key: 'onDragStart',
    value: function onDragStart(e) {
      var target = e.currentTarget;
      if (target.children[0].tagName === 'LI') {
        this.dragged = e.currentTarget;
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', e.currentTarget);
      } else {
        e.preventDefault();
        return;
      }
    }
  }, {
    key: 'onDragOver',
    value: function onDragOver(e) {
      e.preventDefault();
      var target = e.target;
      target = DraggableList.getLi(target);
      if (target.parentNode.children[0].tagName === 'LI') {
        this.dragged.style.display = 'none';
        if (e.target.className === 'placeholder') return;
        var li = DraggableList.getLi(e.target);
        this.over = li.parentNode;
        var relY = e.clientY - this.over.offsetTop;
        var height = this.over.offsetHeight / 2;
        var parent = li.parentNode.parentNode;

        if (relY > height) {
          this.nodePlacement = 'after';
          parent.insertBefore(this.placeholder, li.parentNode.nextElementSibling);
        } else if (relY < height) {
          this.nodePlacement = 'before';
          parent.insertBefore(this.placeholder, li.parentNode);
        }
      }
    }
  }, {
    key: 'onDragEnd',
    value: function onDragEnd(e) {
      var _this2 = this;

      this.dragged.style.display = 'block';
      this.dragged.parentNode.removeChild(this.placeholder);
      var data = this.state.data;
      var from = parseInt(this.dragged.dataset.id);
      var to = parseInt(this.over.dataset.id);
      if (from < to) {
        to--;
      };
      if (this.nodePlacement === 'after') {
        to++;
      }
      var target = [].concat(_toConsumableArray(data));
      target.splice(to, 0, target.splice(from, 1)[0]);
      this.setState({ data: target }, function () {
        var arr = _this2.state.data;
        if (_this2.props.onDragEnd !== null && typeof _this2.props.onDragEnd === 'function') {
          _this2.props.onDragEnd(arr[_this2.dragged.dataset.id].props, arr[_this2.over.dataset.id].props);
        }
      });
    }
  }, {
    key: 'renderItems',
    value: function renderItems() {
      var _this3 = this;

      return _react2.default.Children.map(this.state.data, function (item, idx) {
        var selectable = mergeProp('selectable', item.props, _this3.props);
        var ripple = mergeProp('ripple', item.props, _this3.props);
        var wrapper = _react2.default.createElement('div', {
          onDragStart: _this3.onDragStart.bind(_this3),
          onDragEnd: _this3.onDragEnd.bind(_this3),
          draggable: true,
          'data-id': idx
        }, _react2.default.cloneElement(item, {
          selectable: selectable,
          ripple: ripple
        }));
        return wrapper;
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'ul',
        { 'data-react-toolbox': 'list', className: (0, _classnames2.default)(this.props.theme.list, this.props.className), onDragOver: this.onDragOver.bind(this) },
        this.renderItems()
      );
    }
  }]);

  return DraggableList;
}(_react.Component);

DraggableList.propTypes = {
  children: _react.PropTypes.node,
  className: _react.PropTypes.string,
  ripple: _react.PropTypes.bool,
  selectable: _react.PropTypes.bool,
  theme: _react.PropTypes.shape({
    list: _react.PropTypes.string
  }),
  onDragEnd: _react.PropTypes.func
};
DraggableList.defaultProps = {
  className: '',
  ripple: false,
  selectable: false
};

DraggableList.createPlaceholder = function () {
  var l = document.createElement('li');
  l.classList.add('placeholder');
  l.textContent = 'drop here';
  l.style.textAlign = 'center';
  l.style.padding = '1rem';
  return l;
};

exports.default = DraggableList;