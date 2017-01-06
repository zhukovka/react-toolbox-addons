'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GroupListDividerWithClick = exports.GroupListDivider = undefined;

var _reactCssThemr = require('react-css-themr');

var _identifiers = require('../identifiers');

var _theme = require('./theme.scss');

var _theme2 = _interopRequireDefault(_theme);

var _GroupListDivider = require('./GroupListDivider');

var _GroupListDividerWithClick = require('./GroupListDividerWithClick');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GroupListDivider = (0, _GroupListDivider.GroupListDividerFactory)();
var GroupListDividerWithClick = (0, _GroupListDividerWithClick.GroupListDividerWithClickFactory)();

var ThemedGroupListDivider = (0, _reactCssThemr.themr)(_identifiers.GROUPLISTDIVIDER, _theme2.default)(GroupListDivider);
var ThemedGroupListDividerWithClick = (0, _reactCssThemr.themr)(_identifiers.GROUPLISTDIVIDERWITHCLICK, _theme2.default)(GroupListDividerWithClick);
exports.GroupListDivider = ThemedGroupListDivider;
exports.GroupListDividerWithClick = ThemedGroupListDividerWithClick;