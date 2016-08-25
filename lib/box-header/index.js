'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BoxHeader = undefined;

var _reactCssThemr = require('react-css-themr');

var _theme = require('./theme.scss');

var _theme2 = _interopRequireDefault(_theme);

var _boxHeader = require('./box-header.js');

var _identifiers = require('../identifiers.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _RTBoxHeader = (0, _reactCssThemr.themr)(_identifiers.BOX_HEADER, _theme2.default)(_boxHeader.RTBoxHeader);
exports.BoxHeader = _RTBoxHeader;