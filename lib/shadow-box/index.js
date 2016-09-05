'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShadowBox = undefined;

var _ShadowBox2 = require('./ShadowBox.js');

var _ShadowBox3 = _interopRequireDefault(_ShadowBox2);

var _reactCssThemr = require('react-css-themr');

var _theme = require('./theme.scss');

var _theme2 = _interopRequireDefault(_theme);

var _identifiers = require('../identifiers.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ShadowBox = (0, _reactCssThemr.themr)(_identifiers.SHADOW_BOX, _theme2.default)(_ShadowBox3.default);

exports.ShadowBox = _ShadowBox;
exports.default = _ShadowBox;