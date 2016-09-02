'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Slider = undefined;

var _reactCssThemr = require('react-css-themr');

var _theme = require('./theme.scss');

var _theme2 = _interopRequireDefault(_theme);

var _Slider2 = require('./Slider.js');

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _Slider = (0, _reactCssThemr.themr)(_constants.SLIDER, _theme2.default)(_Slider2.Slider);
exports.Slider = _Slider;
exports.default = _Slider;