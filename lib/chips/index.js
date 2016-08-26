'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChipTransparent = undefined;

var _identifiers = require('../identifiers.js');

var _reactCssThemr = require('react-css-themr');

var _ChipTransparent = require('./ChipTransparent.js');

var _theme = require('./theme.scss');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChipTransparent = (0, _ChipTransparent.chipTransparentFactory)();
var ThemedChipTransparent = (0, _reactCssThemr.themr)(_identifiers.TRANSPARENT_CHIP, _theme2.default)(ChipTransparent);

exports.default = ThemedChipTransparent;
exports.ChipTransparent = ThemedChipTransparent;