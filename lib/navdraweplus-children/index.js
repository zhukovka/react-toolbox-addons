'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavDrawerPlusChildren = undefined;

var _reactCssThemr = require('react-css-themr');

var _identifiers = require('../identifiers.js');

var _NavDrawerPlusChildren = require('./NavDrawerPlusChildren.js');

var _NavDrawerPlusChildren2 = _interopRequireDefault(_NavDrawerPlusChildren);

var _theme = require('./theme.scss');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ThemedNavDrawerPlusChildren = (0, _reactCssThemr.themr)(_identifiers.NAVDRAWER_PLUS_CHILDREN, _theme2.default)(_NavDrawerPlusChildren2.default);

exports.default = ThemedNavDrawerPlusChildren;
exports.NavDrawerPlusChildren = ThemedNavDrawerPlusChildren;