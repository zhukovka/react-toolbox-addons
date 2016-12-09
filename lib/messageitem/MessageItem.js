'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MessageItem = exports.MessageItemFactory = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _reactCssThemr = require('react-css-themr');

var _identifiers = require('../identifiers');

var _list = require('react-toolbox/lib/list');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MessageItem = function (_ListItem) {
    _inherits(MessageItem, _ListItem);

    function MessageItem() {
        _classCallCheck(this, MessageItem);

        return _possibleConstructorReturn(this, (MessageItem.__proto__ || Object.getPrototypeOf(MessageItem)).apply(this, arguments));
    }

    _createClass(MessageItem, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                theme = _props.theme,
                me = _props.me,
                time = _props.time,
                other = _objectWithoutProperties(_props, ['className', 'theme', 'me', 'time']);

            var listProps = _extends({
                className: (0, _classnames3.default)(theme.messageitem, _defineProperty({}, theme.me, me), className),
                theme: theme
            }, other);
            if (me) {
                listProps.leftIcon = 'me';
            }
            return _react2.default.createElement(
                'div',
                { className: theme.message },
                _react2.default.createElement(_list.ListItem, listProps),
                _react2.default.createElement(
                    'span',
                    { className: theme.time },
                    time
                )
            );
        }
    }]);

    return MessageItem;
}(_list.ListItem);

MessageItem.propTypes = {
    children: _react.PropTypes.any,
    className: _react.PropTypes.string,
    me: _react.PropTypes.bool,
    theme: _react.PropTypes.shape({
        listItem: _react.PropTypes.string
    }),
    time: _react.PropTypes.string
};
var factory = function factory() {
    return MessageItem;
};
exports.default = (0, _reactCssThemr.themr)(_identifiers.MESSAGEITEM)(MessageItem);
exports.MessageItemFactory = factory;
exports.MessageItem = MessageItem;