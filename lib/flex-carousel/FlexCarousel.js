'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _button = require('react-toolbox/lib/button');

var _button2 = _interopRequireDefault(_button);

var _constants = require('./constants.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FlexCarousel = function (_Component) {
    _inherits(FlexCarousel, _Component);

    _createClass(FlexCarousel, null, [{
        key: 'getOrderArray',
        value: function getOrderArray(arrLen, activeIndex) {
            var arr = [];
            for (var i = 0; i < arrLen; i++) {
                if (i < activeIndex) {
                    arr[i] = arrLen - activeIndex + i + 1;
                } else if (i === activeIndex) {
                    arr[i] = 1;
                } else {
                    arr[i] = i + 1 - activeIndex;
                }
            }
            return arr;
        }
    }]);

    function FlexCarousel(props) {
        _classCallCheck(this, FlexCarousel);

        var _this = _possibleConstructorReturn(this, (FlexCarousel.__proto__ || Object.getPrototypeOf(FlexCarousel)).call(this, props));

        _this.state = {
            active: 0,
            showControls: false,
            reverse: false
        };
        return _this;
    }

    _createClass(FlexCarousel, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            window.addEventListener(_constants.WINDOW_RESIZE_EVENT, this.handleResize.bind(this));
            if (this.calculateWidth()) {
                this.setState({
                    showControls: true
                });
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            window.removeEventListener(_constants.WINDOW_RESIZE_EVENT, this.handleResize.bind(this));
        }
    }, {
        key: 'calculateWidth',
        value: function calculateWidth() {
            if (this.refs) {
                var container = _reactDom2.default.findDOMNode(this.refs.flexContainer);
                if (container) {
                    var containerWidth = container.offsetWidth;
                    var childrenWidth = Array.prototype.map.call(container.children, function (el) {
                        return el.offsetWidth;
                    }).reduce(function (c, n) {
                        return c + n;
                    }, 0);
                    return containerWidth < childrenWidth;
                }
            } else {
                return false;
            }
        }
    }, {
        key: 'handleResize',
        value: function handleResize() {
            this.setState({
                showControls: this.calculateWidth()
            });
        }
    }, {
        key: 'forTransitionWorks',
        value: function forTransitionWorks() {
            var container = _reactDom2.default.findDOMNode(this.refs.flexContainer);
            var theme = this.props.theme;

            container.classList.remove(theme.forTransitionWorks);
            setTimeout(function () {
                container.classList.add(theme.forTransitionWorks);
            }, 50);
        }
    }, {
        key: 'next',
        value: function next(newVal) {
            if (this.props.children[newVal]) {
                this.setState({
                    active: newVal,
                    reverse: false
                }, this.forTransitionWorks);
            } else {
                this.setState({
                    active: 0,
                    reverse: false
                }, this.forTransitionWorks);
            }
        }
    }, {
        key: 'prev',
        value: function prev(newVal) {
            if (this.props.children[newVal]) {
                this.setState({
                    active: newVal,
                    reverse: true
                }, this.forTransitionWorks);
            } else {
                this.setState({
                    active: this.props.children.length - 1,
                    reverse: true
                }, this.forTransitionWorks);
            }
        }
    }, {
        key: 'renderControls',
        value: function renderControls() {
            var _this2 = this;

            var _state = this.state;
            var active = _state.active;
            var showControls = _state.showControls;

            if (showControls) {
                var theme = this.props.theme;

                var controlsArray = [];
                var prevButtonProps = {
                    icon: _constants.BUTTON_ICON_PREV,
                    className: (0, _classnames3.default)(theme.customButton, theme.left),
                    onClick: function onClick(e) {
                        return _this2.prev(active - 1);
                    }
                };
                var nextButtonProps = {
                    icon: _constants.BUTTON_ICON_NEXT,
                    className: (0, _classnames3.default)(theme.customButton, theme.right),
                    onClick: function onClick(e) {
                        return _this2.next(active + 1);
                    }
                };
                controlsArray.push(prevButtonProps, nextButtonProps);
                return controlsArray.map(function (btnProps, index) {
                    return _react2.default.createElement(_button2.default, _extends({ key: index, flat: true }, btnProps));
                });
            } else {
                return null;
            }
        }
    }, {
        key: 'renderItems',
        value: function renderItems() {
            var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var _props = this.props;
            var theme = _props.theme;
            var children = _props.children;
            var itemWidth = _props.itemWidth;
            var active = this.state.active;

            var _itemWidth = itemWidth + 'px';
            var orderList = FlexCarousel.getOrderArray(children.length, active);
            return _react2.default.Children.map(items, function (el, index) {
                return _react2.default.createElement(
                    'li',
                    { key: index + '_index',
                        className: theme.item,
                        style: { order: orderList[index], minWidth: _itemWidth, maxWidth: _itemWidth } },
                    el
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props;
            var children = _props2.children;
            var theme = _props2.theme;

            var cls = (0, _classnames3.default)(theme.container, _defineProperty({}, theme.isReverse, this.state.reverse), theme.forTransitionWorks);
            return _react2.default.createElement(
                'div',
                { className: theme.wrapper },
                _react2.default.createElement(
                    'ul',
                    { className: cls, ref: _constants.FLEX_CONTAINER_REF },
                    this.renderItems(children)
                ),
                this.renderControls()
            );
        }
    }]);

    return FlexCarousel;
}(_react.Component);

FlexCarousel.propTypes = {
    children: _react.PropTypes.array,
    itemWidth: _react.PropTypes.number,
    theme: _react.PropTypes.shape({
        wrapper: _react.PropTypes.string,
        container: _react.PropTypes.string,
        isReverse: _react.PropTypes.string,
        customButton: _react.PropTypes.string,
        left: _react.PropTypes.string,
        right: _react.PropTypes.string,
        item: _react.PropTypes.string,
        forTransitionWorks: _react.PropTypes.string
    })
};
exports.default = FlexCarousel;