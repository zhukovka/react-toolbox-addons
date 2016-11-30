'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var CustomTooltip = function (_Component) {
    _inherits(CustomTooltip, _Component);

    function CustomTooltip(props) {
        _classCallCheck(this, CustomTooltip);

        var _this = _possibleConstructorReturn(this, (CustomTooltip.__proto__ || Object.getPrototypeOf(CustomTooltip)).call(this, props));

        _this.state = {
            showTooltip: false
        };
        return _this;
    }

    _createClass(CustomTooltip, [{
        key: 'renderTooltip',
        value: function renderTooltip(bool) {
            var _props = this.props,
                title = _props.title,
                theme = _props.theme,
                position = _props.position;

            var cls = (0, _classnames3.default)(theme.customToolTip, _defineProperty({}, theme[position], true));
            return bool === true ? _react2.default.createElement(
                'p',
                { className: cls },
                title
            ) : null;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props2 = this.props,
                element = _props2.element,
                theme = _props2.theme;
            var showTooltip = this.state.showTooltip;

            return _react2.default.createElement(
                'div',
                { className: theme.wrapCustomTooltip, onMouseEnter: function onMouseEnter(e) {
                        return _this2.setState({ showTooltip: true });
                    },
                    onMouseLeave: function onMouseLeave(e) {
                        return _this2.setState({ showTooltip: false });
                    }
                },
                element,
                this.renderTooltip(showTooltip)
            );
        }
    }]);

    return CustomTooltip;
}(_react.Component);

CustomTooltip.propTypes = {
    element: _react.PropTypes.element,
    position: _react.PropTypes.string,
    theme: _react.PropTypes.object,
    title: _react.PropTypes.string
};

CustomTooltip.defaultProps = {
    position: 'top'
};

exports.default = CustomTooltip;