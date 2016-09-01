'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BottomSheetPlus = undefined;

var _reactCssThemr = require('react-css-themr');

var _identifiers = require('../identifiers.js');

var _BottomSheetPlus = require('./BottomSheetPlus');

var _overlay = require('react-toolbox/lib/overlay');

var _button = require('react-toolbox/lib/button');

var _theme = require('./theme.scss');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ThemedBottomSheetPlus = (0, _reactCssThemr.themr)(_identifiers.BOTTOMSHEET_PLUS, _theme2.default)((0, _BottomSheetPlus.bottomsheetFactory)(_overlay.Overlay, _button.IconButton));

exports.default = ThemedBottomSheetPlus;
exports.BottomSheetPlus = ThemedBottomSheetPlus;