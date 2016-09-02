'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditableAvatar = undefined;

var _reactCssThemr = require('react-css-themr');

var _theme = require('./theme.scss');

var _theme2 = _interopRequireDefault(_theme);

var _EditableAvatar2 = require('./EditableAvatar');

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _EditableAvatar = (0, _reactCssThemr.themr)(_constants.EDITABLE_AVATAR, _theme2.default)(_EditableAvatar2.EditableAvatar);
exports.EditableAvatar = _EditableAvatar;
exports.default = _EditableAvatar;