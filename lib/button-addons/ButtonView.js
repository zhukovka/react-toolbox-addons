'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ButtonView = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _button = require('react-toolbox/lib/button');

var _button2 = _interopRequireDefault(_button);

var _theme = require('./theme.scss');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ButtonView = function ButtonView(props) {
    var ICON_VISIBILITY = 'visibility';

    return _react2.default.createElement(_button2.default, _extends({}, props, { neutral: false, icon: ICON_VISIBILITY, theme: _theme2.default }));
};
ButtonView.propTypes = {
    props: _react.PropTypes.object
};

exports.ButtonView = ButtonView;