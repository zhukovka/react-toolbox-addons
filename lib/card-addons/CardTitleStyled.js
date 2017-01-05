'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CardTitleStyled = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _card = require('react-toolbox/lib/card');

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var CardTitleStyled = function CardTitleStyled(_ref) {
    var theme = _ref.theme,
        primary = _ref.primary,
        className = _ref.className,
        other = _objectWithoutProperties(_ref, ['theme', 'primary', 'className']);

    var classes = (0, _classnames3.default)(theme.cardTitleStyled, _defineProperty({}, theme.primary, primary), className);
    return _react2.default.createElement(_card.CardTitle, _extends({}, other, { className: classes, theme: theme }));
};
CardTitleStyled.propTypes = {
    className: _react.PropTypes.string,
    primary: _react.PropTypes.bool,
    theme: _react.PropTypes.object
};
exports.CardTitleStyled = CardTitleStyled;
exports.default = CardTitleStyled;