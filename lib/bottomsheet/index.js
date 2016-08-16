'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BottomSheet = undefined;

var _reactCssThemr = require('react-css-themr');

var _identifiers = require('../identifiers.js');

var _BottomSheet = require('./BottomSheet');

var _overlay = require('react-toolbox/lib/overlay');

var _button = require('react-toolbox/lib/button');

var _theme = require('./theme.scss');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ThemedBottomSheet = (0, _reactCssThemr.themr)(_identifiers.BOTTOMSHEET, _theme2.default)((0, _BottomSheet.bottomsheetFactory)(_overlay.Overlay, _button.IconButton));

exports.default = ThemedBottomSheet;
exports.BottomSheet = ThemedBottomSheet;