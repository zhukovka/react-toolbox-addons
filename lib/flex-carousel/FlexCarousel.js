'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

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
            var container = this.refs.flexContainer;
            var containerWidth = container.offsetWidth;
            var childrenWidth = Array.prototype.map.call(container.children, function (el) {
                return el.offsetWidth;
            }).reduce(function (c, n) {
                return c + n;
            });
            if (containerWidth < childrenWidth) {
                this.setState({
                    showControls: true
                });
            }
        }
    }, {
        key: 'isSet',
        value: function isSet() {
            var container = this.refs.flexContainer;
            var theme = this.props.theme;

            container.classList.remove(theme.isSet);
            setTimeout(function () {
                container.classList.add(theme.isSet);
            }, 50);
        }
    }, {
        key: 'next',
        value: function next(newVal) {
            if (this.props.children[newVal]) {
                this.setState({
                    active: newVal,
                    reverse: false
                }, this.isSet);
            } else {
                this.setState({
                    active: 0,
                    reverse: false
                }, this.isSet);
            }
        }
    }, {
        key: 'prev',
        value: function prev(newVal) {
            if (this.props.children[newVal]) {
                this.setState({
                    active: newVal,
                    reverse: true
                }, this.isSet);
            } else {
                this.setState({
                    active: this.props.children.length - 1,
                    reverse: true
                }, this.isSet);
            }
        }
    }, {
        key: 'renderNextControl',
        value: function renderNextControl() {
            var _this2 = this;

            if (this.state.showControls) {
                var _ret = function () {
                    var active = _this2.state.active;
                    var theme = _this2.props.theme;

                    var controlCls = (0, _classnames3.default)(theme.control, theme.nextControl, 'material-icons');
                    return {
                        v: _react2.default.createElement(
                            'i',
                            { className: controlCls, onClick: function onClick(e) {
                                    return _this2.next(active + 1);
                                } },
                            'keyboard_arrow_right'
                        )
                    };
                }();

                if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
            }
        }
    }, {
        key: 'renderPrevControl',
        value: function renderPrevControl() {
            var _this3 = this;

            if (this.state.showControls) {
                var _ret2 = function () {
                    var active = _this3.state.active;
                    var theme = _this3.props.theme;

                    var controlCls = (0, _classnames3.default)(theme.control, theme.prevControl, 'material-icons');
                    return {
                        v: _react2.default.createElement(
                            'i',
                            { className: controlCls, onClick: function onClick(e) {
                                    return _this3.prev(active - 1);
                                } },
                            'keyboard_arrow_left'
                        )
                    };
                }();

                if ((typeof _ret2 === 'undefined' ? 'undefined' : _typeof(_ret2)) === "object") return _ret2.v;
            }
        }
    }, {
        key: 'renderItems',
        value: function renderItems() {
            var items = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
            var _props = this.props;
            var theme = _props.theme;
            var children = _props.children;
            var active = this.state.active;

            var orderList = FlexCarousel.getOrderArray(children.length, active);
            return _react2.default.Children.map(items, function (el, index) {
                return _react2.default.createElement(
                    'li',
                    { key: index + '_index', className: theme.item, style: { order: orderList[index] } },
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

            var cls = (0, _classnames3.default)(theme.container, _defineProperty({}, theme.isReverse, this.state.reverse), theme.isSet);
            return _react2.default.createElement(
                'div',
                { className: theme.wrapper },
                _react2.default.createElement(
                    'ul',
                    { className: cls, ref: 'flexContainer' },
                    this.renderItems(children)
                ),
                this.renderPrevControl(),
                this.renderNextControl()
            );
        }
    }]);

    return FlexCarousel;
}(_react.Component);

FlexCarousel.propTypes = {
    children: _react.PropTypes.array,
    theme: _react.PropTypes.object
};
exports.default = FlexCarousel;