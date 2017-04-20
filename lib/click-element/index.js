'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ElementClick = undefined;

var _ElementClick = require('./ElementClick.js');

var _ElementClick2 = _interopRequireDefault(_ElementClick);

var _reactCssThemr = require('react-css-themr');

var _theme = require('./theme.scss');

var _theme2 = _interopRequireDefault(_theme);

var _identifiers = require('../identifiers.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ThemedElementClick = (0, _reactCssThemr.themr)(_identifiers.ELEMENT_CLICK, _theme2.default)(_ElementClick2.default);
exports.ElementClick = ThemedElementClick;
exports.default = ThemedElementClick;