'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactCssThemr = require('react-css-themr');

var _identifiers = require('../identifiers');

var _theme = require('./theme.scss');

var _theme2 = _interopRequireDefault(_theme);

var _StyledAvatar = require('./StyledAvatar');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledAvatar = (0, _StyledAvatar.StyledAvatarFactory)();
var ThemedStyledAvatar = (0, _reactCssThemr.themr)(_identifiers.STYLEDAVATAR, _theme2.default)(StyledAvatar);
exports.default = ThemedStyledAvatar;