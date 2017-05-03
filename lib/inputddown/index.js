'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactCssThemr = require('react-css-themr');

var _identifiers = require('../identifiers');

var _theme = require('./theme.scss');

var _theme2 = _interopRequireDefault(_theme);

var _InputDdown = require('./InputDdown');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InputDdown = (0, _InputDdown.InputDdownFactory)();
var ThemedInputDdown = (0, _reactCssThemr.themr)(_identifiers.INPUTDDOWN, _theme2.default)(InputDdown);
exports.default = ThemedInputDdown;