'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactCssThemr = require('react-css-themr');

var _identifiers = require('../identifiers');

var _theme = require('./theme.scss');

var _theme2 = _interopRequireDefault(_theme);

var _StatusAvatar = require('./StatusAvatar');

var _StatusAvatar2 = _interopRequireDefault(_StatusAvatar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ThemedStatusAvatar = (0, _reactCssThemr.themr)(_identifiers.STATUSAVATAR, _theme2.default)(_StatusAvatar2.default);
exports.default = ThemedStatusAvatar;