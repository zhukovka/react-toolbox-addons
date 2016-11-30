'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomTooltip = undefined;

var _CustomTooltip = require('./CustomTooltip.js');

var _CustomTooltip2 = _interopRequireDefault(_CustomTooltip);

var _reactCssThemr = require('react-css-themr');

var _theme = require('./theme.scss');

var _theme2 = _interopRequireDefault(_theme);

var _identifiers = require('../identifiers.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ThemedCustomToolTip = (0, _reactCssThemr.themr)(_identifiers.CUSTOM_TOOLTIP, _theme2.default)(_CustomTooltip2.default);

exports.default = ThemedCustomToolTip;
exports.CustomTooltip = ThemedCustomToolTip;