'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavigationChips = undefined;

var _NavigationChips = require('./NavigationChips.js');

var _identifiers = require('../identifiers.js');

var _reactCssThemr = require('react-css-themr');

var _theme = require('./theme.scss');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _RTNavigationChips = (0, _reactCssThemr.themr)(_identifiers.NAVIGATIONS_CHIPS, _theme2.default)(_NavigationChips.RTNavigationChips);
exports.NavigationChips = _RTNavigationChips;