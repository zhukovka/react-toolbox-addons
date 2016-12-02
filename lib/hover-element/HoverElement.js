'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HoverElement = function (_Component) {
    _inherits(HoverElement, _Component);

    function HoverElement(props) {
        _classCallCheck(this, HoverElement);

        var _this = _possibleConstructorReturn(this, (HoverElement.__proto__ || Object.getPrototypeOf(HoverElement)).call(this, props));

        _this.state = {
            onHover: false
        };
        return _this;
    }

    _createClass(HoverElement, [{
        key: 'renderHoverElement',
        value: function renderHoverElement(bool) {
            var _props = this.props,
                theme = _props.theme,
                element = _props.element,
                position = _props.position;

            var cls = (0, _classnames3.default)(theme.element, _defineProperty({}, theme[position], position));
            if (bool) {
                return _react2.default.createElement(
                    'div',
                    { className: cls },
                    element
                );
            } else {
                return null;
            }
        }
    }, {
        key: 'handleHover',
        value: function handleHover(e, bool) {
            e.preventDefault();
            this.setState({
                onHover: bool
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props2 = this.props,
                children = _props2.children,
                theme = _props2.theme,
                props = _objectWithoutProperties(_props2, ['children', 'theme']);

            var onHover = this.state.onHover;

            return _react2.default.createElement(
                'div',
                _extends({ className: theme.wrapper,
                    onMouseEnter: function onMouseEnter(e) {
                        return _this2.handleHover(e, true);
                    },
                    onMouseLeave: function onMouseLeave(e) {
                        return _this2.handleHover(e, false);
                    }
                }, props),
                children,
                this.renderHoverElement(onHover)
            );
        }
    }]);

    return HoverElement;
}(_react.Component);

HoverElement.propTypes = {
    children: _react.PropTypes.array,
    element: _react.PropTypes.element,
    position: _react.PropTypes.string,
    theme: _react.PropTypes.object
};

HoverElement.defaultProps = {
    position: 'bottom'
};

exports.default = HoverElement;