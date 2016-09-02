'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Banner = undefined;

var _reactCssThemr = require('react-css-themr');

var _theme = require('./theme.scss');

var _theme2 = _interopRequireDefault(_theme);

var _Banner2 = require('./Banner');

var _identifiers = require('../identifiers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _Banner = (0, _reactCssThemr.themr)(_identifiers.BANNER, _theme2.default)(_Banner2.Banner);

exports.Banner = _Banner;
exports.default = _Banner;