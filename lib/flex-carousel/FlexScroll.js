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

var _constants = require('./constants.js');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _button = require('react-toolbox/lib/button');

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FlexScroll = function (_Component) {
    _inherits(FlexScroll, _Component);

    function FlexScroll(props) {
        _classCallCheck(this, FlexScroll);

        var _this = _possibleConstructorReturn(this, (FlexScroll.__proto__ || Object.getPrototypeOf(FlexScroll)).call(this, props));

        _this.state = {
            currentIndex: 0
        };
        return _this;
    }

    _createClass(FlexScroll, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            window.addEventListener(_constants.WINDOW_RESIZE_EVENT, this.handleResize.bind(this));
            var amountOfItems = this.calculateWidth();
            if (!!amountOfItems && amountOfItems > 0) {
                this.setState({
                    amountOfItems: amountOfItems
                });
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            window.removeEventListener(_constants.WINDOW_RESIZE_EVENT, this.handleResize.bind(this));
        }
    }, {
        key: 'handleResize',
        value: function handleResize() {
            this.setState({
                amountOfItems: this.calculateWidth()
            });
        }
    }, {
        key: 'calculateWidth',
        value: function calculateWidth() {
            if (this.refs) {
                var container = _reactDom2.default.findDOMNode(this.refs.scroll);
                if (container) {
                    var containerWidth = container.offsetWidth;
                    return Math.floor(containerWidth / this.props.itemWidth);
                }
            } else {
                return false;
            }
        }
    }, {
        key: 'renderControls',
        value: function renderControls() {
            var _this2 = this;

            var _props = this.props;
            var theme = _props.theme;
            var children = _props.children;
            var _state = this.state;
            var currentIndex = _state.currentIndex;
            var amountOfItems = _state.amountOfItems;

            var controlsArray = [];
            var nextButtonProps = null;
            var prevButtonProps = null;
            if (currentIndex !== 0) {
                prevButtonProps = {
                    icon: _constants.BUTTON_ICON_PREV,
                    className: (0, _classnames2.default)(theme.customButton, theme.left),
                    onClick: function onClick(e) {
                        return _this2.setState({ currentIndex: currentIndex - 1 });
                    }
                };
                controlsArray.push(prevButtonProps);
            }
            if (amountOfItems + currentIndex < children.length) {
                nextButtonProps = {
                    icon: _constants.BUTTON_ICON_NEXT,
                    className: (0, _classnames2.default)(theme.customButton, theme.right),
                    onClick: function onClick(e) {
                        return _this2.setState({ currentIndex: currentIndex + 1 });
                    }
                };
                controlsArray.push(nextButtonProps);
            }
            return controlsArray.map(function (btnProps, index) {
                return _react2.default.createElement(_button2.default, _extends({ key: index, flat: true }, btnProps));
            });
        }
    }, {
        key: 'renderItems',
        value: function renderItems() {
            var items = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
            var _props2 = this.props;
            var theme = _props2.theme;
            var itemWidth = _props2.itemWidth;

            var _itemWidth = itemWidth + 'px';
            var ch = _react2.default.Children.map(items, function (el, index) {
                return _react2.default.createElement(
                    'li',
                    { key: index + '_index',
                        className: theme.scrollItem,
                        style: { minWidth: _itemWidth, maxWidth: _itemWidth } },
                    el
                );
            });
            return ch.slice(this.state.currentIndex, this.state.amountOfItems + this.state.currentIndex);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props3 = this.props;
            var children = _props3.children;
            var theme = _props3.theme;

            return _react2.default.createElement(
                'div',
                { className: theme.wrapper, ref: 'scroll' },
                _react2.default.createElement(
                    'div',
                    { className: theme.scrollContainer },
                    this.renderItems(children)
                ),
                this.renderControls()
            );
        }
    }]);

    return FlexScroll;
}(_react.Component);

FlexScroll.propTypes = {
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
exports.default = FlexScroll;