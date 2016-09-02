'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _avatar = require('react-toolbox/lib/avatar');

var _avatar2 = _interopRequireDefault(_avatar);

var _font_icon = require('react-toolbox/lib/font_icon');

var _font_icon2 = _interopRequireDefault(_font_icon);

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var AvatarOverlay = function AvatarOverlay(_ref) {
    var theme = _ref.theme;
    var image = _ref.image;
    var icon = _ref.icon;

    var other = _objectWithoutProperties(_ref, ['theme', 'image', 'icon']);

    var children = other.children;

    return _react2.default.createElement(
        _avatar2.default,
        _extends({ image: image, theme: theme }, other),
        _react2.default.createElement(_font_icon2.default, { value: icon,
            className: theme[_constants.AVATAR_OVERLAY_ICON]
        }),
        children
    );
};
AvatarOverlay.propTypes = {
    icon: _react.PropTypes.string,
    image: _react.PropTypes.string,
    onClick: _react.PropTypes.func,
    theme: _react.PropTypes.object
};
exports.default = AvatarOverlay;