'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ICON_DONE = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _theme = require('./theme.scss');

var _theme2 = _interopRequireDefault(_theme);

var _avatar = require('react-toolbox/lib/avatar');

var _avatar2 = _interopRequireDefault(_avatar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ICON_DONE = exports.ICON_DONE = 'done';

var Checkmark = function Checkmark() {
    return _react2.default.createElement(_avatar2.default, { icon: ICON_DONE, theme: _theme2.default });
};

exports.default = Checkmark;