'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Avatarbutton = undefined;

var _reactCssThemr = require('react-css-themr');

var _identifiers = require('../identifiers.js');

var _AvatarCheckbox = require('./AvatarCheckbox.js');

var _theme = require('./theme.scss');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Avatarbutton = (0, _AvatarCheckbox.avatarcheckboxFactory)();
var ThemedAvatarbutton = (0, _reactCssThemr.themr)(_identifiers.AVATARCHECKBOX, _theme2.default)(Avatarbutton);

exports.default = ThemedAvatarbutton;
exports.Avatarbutton = ThemedAvatarbutton;