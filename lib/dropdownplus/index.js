'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropdownPlus = undefined;

var _reactCssThemr = require('react-css-themr');

var _identifiers = require('../identifiers.js');

var _DropdownPlus = require('./DropdownPlus.js');

var _input = require('react-toolbox/lib/input');

var _theme = require('./theme.scss');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DropdownPlus = (0, _DropdownPlus.dropdownFactory)(_input.Input);
var ThemedDropdownPlus = (0, _reactCssThemr.themr)(_identifiers.DROPDOWNPLUS, _theme2.default)(DropdownPlus);

exports.default = ThemedDropdownPlus;
exports.DropdownPlus = ThemedDropdownPlus;