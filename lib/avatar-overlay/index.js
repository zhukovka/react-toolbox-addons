'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AvatarOverlay = undefined;

var _reactCssThemr = require('react-css-themr');

var _theme = require('./theme.scss');

var _theme2 = _interopRequireDefault(_theme);

var _AvatarOverlay2 = require('./AvatarOverlay');

var _AvatarOverlay3 = _interopRequireDefault(_AvatarOverlay2);

var _identifiers = require('../identifiers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _AvatarOverlay = (0, _reactCssThemr.themr)(_identifiers.AVATAR_OVERLAY, _theme2.default)(_AvatarOverlay3.default);

exports.AvatarOverlay = _AvatarOverlay;
exports.default = _AvatarOverlay;