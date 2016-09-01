'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ButtonOutline = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _button = require('react-toolbox/lib/button');

var _button2 = _interopRequireDefault(_button);

var _theme = require('./theme.scss');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ButtonOutline = function ButtonOutline(props) {

    return _react2.default.createElement(_button2.default, _extends({}, props, { theme: _theme2.default }));
};
ButtonOutline.propTypes = {
    props: _react.PropTypes.object
};

exports.ButtonOutline = ButtonOutline;