'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FlexCarousel = undefined;

var _reactCssThemr = require('react-css-themr');

var _FlexCarousel = require('./FlexCarousel.js');

var _FlexCarousel2 = _interopRequireDefault(_FlexCarousel);

var _theme = require('./theme.scss');

var _theme2 = _interopRequireDefault(_theme);

var _identifiers = require('../identifiers.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ThemedFlexCarousel = (0, _reactCssThemr.themr)(_identifiers.FLEXCAROUSEL, _theme2.default)(_FlexCarousel2.default);
exports.default = ThemedFlexCarousel;
exports.FlexCarousel = ThemedFlexCarousel;