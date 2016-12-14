'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _avatar = require('react-toolbox/lib/avatar');

var _avatar2 = _interopRequireDefault(_avatar);

var _font_icon = require('react-toolbox/lib/font_icon');

var _font_icon2 = _interopRequireDefault(_font_icon);

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var AvatarOverlay = function AvatarOverlay(_ref) {
    var theme = _ref.theme;
    var image = _ref.image;
    var icon = _ref.icon;
    var className = _ref.className;

    var other = _objectWithoutProperties(_ref, ['theme', 'image', 'icon', 'className']);

    var children = other.children;

    return _react2.default.createElement(
        _avatar2.default,
        _extends({ image: image, theme: theme, className: (0, _classnames3.default)(_defineProperty({}, theme.overlay, icon), className) }, other),
        _react2.default.createElement(_font_icon2.default, { className: theme[_constants.AVATAR_OVERLAY_ICON], value: icon }),
        children
    );
};
AvatarOverlay.propTypes = {
    className: _react.PropTypes.string,
    icon: _react.PropTypes.any,
    image: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.object]),
    onClick: _react.PropTypes.func,
    theme: _react.PropTypes.object
};
exports.default = AvatarOverlay;