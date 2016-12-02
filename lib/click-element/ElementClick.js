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

var _button = require('react-toolbox/lib/button');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ElementClick = function (_Component) {
    _inherits(ElementClick, _Component);

    function ElementClick(props) {
        _classCallCheck(this, ElementClick);

        var _this = _possibleConstructorReturn(this, (ElementClick.__proto__ || Object.getPrototypeOf(ElementClick)).call(this, props));

        _this.state = {
            show: false
        };
        return _this;
    }

    _createClass(ElementClick, [{
        key: 'renderElement',
        value: function renderElement(bool) {
            var _this2 = this;

            var _props = this.props,
                theme = _props.theme,
                element = _props.element,
                position = _props.position;

            var cls = (0, _classnames3.default)(theme.element, _defineProperty({}, theme[position], position));
            if (bool) {
                return _react2.default.createElement(
                    'div',
                    { className: cls, ref: 'hoverElement' },
                    _react2.default.createElement(_button.IconButton, { icon: 'close',
                        className: theme.iconClose,
                        onClick: function onClick(e) {
                            _this2.setState({ show: false });
                        }
                    }),
                    element
                );
            } else {
                return null;
            }
        }
    }, {
        key: 'handleOnWrapperClick',
        value: function handleOnWrapperClick(e) {
            e.preventDefault();
            if (!this.state.show) {
                this.setState({
                    show: true
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                children = _props2.children,
                theme = _props2.theme,
                props = _objectWithoutProperties(_props2, ['children', 'theme']);

            var show = this.state.show;

            return _react2.default.createElement(
                'div',
                _extends({ className: theme.wrapper,
                    onClick: this.handleOnWrapperClick.bind(this)
                }, props),
                children,
                this.renderElement(show)
            );
        }
    }]);

    return ElementClick;
}(_react.Component);

ElementClick.propTypes = {
    children: _react.PropTypes.array,
    element: _react.PropTypes.element,
    position: _react.PropTypes.string,
    theme: _react.PropTypes.object
};

ElementClick.defaultProps = {
    position: 'bottom'
};

exports.default = ElementClick;