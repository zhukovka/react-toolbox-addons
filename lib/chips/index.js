'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChipTransparent = undefined;

var _identifiers = require('../identifiers.js');

var _reactCssThemr = require('react-css-themr');

var _ChipTransparent2 = require('./ChipTransparent.js');

var _theme = require('./theme.scss');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ChipTransparent = (0, _ChipTransparent2.chipTransparentFactory)();
var ThemedChipTransparent = (0, _reactCssThemr.themr)(_identifiers.TRANSPARENT_CHIP, _theme2.default)(_ChipTransparent);

exports.default = ThemedChipTransparent;
exports.ChipTransparent = ThemedChipTransparent;