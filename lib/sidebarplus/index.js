'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SidebarPlus = undefined;

var _reactCssThemr = require('react-css-themr');

var _identifiers = require('../identifiers.js');

var _SidebarPlus = require('./SidebarPlus.js');

var _theme = require('./theme.scss');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SidebarPlus = (0, _SidebarPlus.sidebarPlusFactory)();
var ThemedSidebarPlus = (0, _reactCssThemr.themr)(_identifiers.SIDEBAR_PLUS, _theme2.default)(SidebarPlus);

exports.default = ThemedSidebarPlus;
exports.SidebarPlus = ThemedSidebarPlus;