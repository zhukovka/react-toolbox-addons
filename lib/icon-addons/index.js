'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconWithContent = undefined;

var _reactCssThemr = require('react-css-themr');

var _IconWithContent = require('./IconWithContent.js');

var _IconWithContent2 = _interopRequireDefault(_IconWithContent);

var _theme = require('./theme.scss');

var _theme2 = _interopRequireDefault(_theme);

var _identifiers = require('../identifiers.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ThemedIconWithContent = (0, _reactCssThemr.themr)(_identifiers.ICON_WITH_CONTENT, _theme2.default)(_IconWithContent2.default);
exports.default = ThemedIconWithContent;
exports.IconWithContent = ThemedIconWithContent;