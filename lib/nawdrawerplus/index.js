'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavDrawerPlus = undefined;

var _reactCssThemr = require('react-css-themr');

var _identifiers = require('../identifiers.js');

var _NavDrawerPlus = require('./NavDrawerPlus.js');

var _theme = require('./theme.scss');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavDrawerPlus = (0, _NavDrawerPlus.navDrawerPlusFactory)();
var ThemedNavDrawerPlus = (0, _reactCssThemr.themr)(_identifiers.NAVDRAWER_PLUS, _theme2.default)(NavDrawerPlus);

exports.default = ThemedNavDrawerPlus;
exports.NavDrawerPlus = ThemedNavDrawerPlus;