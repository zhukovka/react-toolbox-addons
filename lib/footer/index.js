'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Footer = undefined;

var _Footer2 = require('./Footer');

var _reactCssThemr = require('react-css-themr');

var _theme = require('./theme.scss');

var _theme2 = _interopRequireDefault(_theme);

var _identifiers = require('../identifiers.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _Footer = (0, _reactCssThemr.themr)(_identifiers.FOOTER, _theme2.default)(_Footer2.Footer);
exports.Footer = _Footer;
exports.default = _Footer;