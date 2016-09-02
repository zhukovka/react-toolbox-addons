'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Slider = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Slider = function (_Component) {
    _inherits(Slider, _Component);

    _createClass(Slider, null, [{
        key: 'createOrderArray',
        value: function createOrderArray(tar, len) {
            var _array = new Array(len);
            for (var i = 0; i < _array.length; i++) {
                if (i < tar) {
                    _array[i] = len - tar + i;
                } else if (i === tar) {
                    _array[i] = 1;
                } else {
                    _array[i] = i - tar;
                }
            }
            return _array;
        }
    }, {
        key: 'getWidth',
        value: function getWidth(count) {
            return {
                width: 100 / count + '%'
            };
        }
    }]);

    function Slider(props) {
        _classCallCheck(this, Slider);

        var _this = _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this, props));

        _this.state = {
            order: 1
        };
        return _this;
    }

    _createClass(Slider, [{
        key: 'renderChildren',
        value: function renderChildren() {
            var _props = this.props;
            var theme = _props.theme;
            var children = _props.children;
            var count = _props.count;
            var order = this.state.order;

            if (children && Array.isArray(children)) {
                var _ret = function () {
                    var orderArray = Slider.createOrderArray(order, children.length);
                    var elementWidth = Slider.getWidth(count);
                    return {
                        v: children.map(function (el, index) {
                            return _react2.default.createElement(
                                'div',
                                { key: index,
                                    className: theme[_constants.SLIDER_ITEM],
                                    style: {
                                        order: orderArray[index],
                                        width: elementWidth
                                    }
                                },
                                el
                            );
                        })
                    };
                }();

                if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
            }
        }
    }, {
        key: 'handleControls',
        value: function handleControls(type) {
            var order = this.state.order;
            var children = this.props.children;

            var childrenLength = children.length;
            var newOrder = void 0;
            if (type === _constants.SLIDER_BUTTON_NEXT) {
                newOrder = order + 1 > childrenLength ? 1 : order + 1;
            } else if (type === _constants.SLIDER_BUTTON_PREV) {
                newOrder = order - 1 < 1 ? 12 : order - 1;
            }
            this.setState({
                order: newOrder
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var theme = this.props.theme;

            return _react2.default.createElement(
                'div',
                { className: theme[_constants.SLIDER_CONTAINER] },
                _react2.default.createElement(
                    'div',
                    { className: theme[_constants.SLIDER_ITEMS_CONTAINER] },
                    this.renderChildren()
                ),
                _react2.default.createElement(
                    'div',
                    { className: theme[_constants.SLIDER_CONTROLS] },
                    _react2.default.createElement(
                        'button',
                        { className: theme[_constants.SLIDER_BUTTON_PREV],
                            onClick: this.handleControls.bind(this, _constants.SLIDER_BUTTON_PREV)
                        },
                        _constants.SLIDER_BUTTON_PREV
                    ),
                    _react2.default.createElement(
                        'button',
                        { className: theme[_constants.SLIDER_BUTTON_NEXT],
                            onClick: this.handleControls.bind(this, _constants.SLIDER_BUTTON_NEXT)
                        },
                        _constants.SLIDER_BUTTON_NEXT
                    )
                )
            );
        }
    }]);

    return Slider;
}(_react.Component);

Slider.defaultProps = {
    count: 1
};


Slider.propTypes = {
    children: _react.PropTypes.any,
    count: _react.PropTypes.number,
    theme: _react.PropTypes.object
};

exports.Slider = Slider;