'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VerticalDivider = undefined;

var _identifiers = require('../identifiers');

var _reactCssThemr = require('react-css-themr');

var _VerticalDivider = require('./VerticalDivider.js');

var _theme = require('./theme.scss');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VerticalDivider = (0, _VerticalDivider.verticalDividerFactory)();
var ThemedVerticalDivider = (0, _reactCssThemr.themr)(_identifiers.VERTICALDIVIDER, _theme2.default)(VerticalDivider);

exports.default = ThemedVerticalDivider;
exports.VerticalDivider = ThemedVerticalDivider;