'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HoverElement = undefined;

var _HoverElement = require('./HoverElement.js');

var _HoverElement2 = _interopRequireDefault(_HoverElement);

var _reactCssThemr = require('react-css-themr');

var _theme = require('./theme.scss');

var _theme2 = _interopRequireDefault(_theme);

var _identifiers = require('../identifiers.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ThemedHoverElement = (0, _reactCssThemr.themr)(_identifiers.HOVER_ELEMENT, _theme2.default)(_HoverElement2.default);
exports.HoverElement = ThemedHoverElement;
exports.default = ThemedHoverElement;