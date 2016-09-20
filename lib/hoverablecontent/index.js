'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactCssThemr = require('react-css-themr');

var _identifiers = require('../identifiers');

var _theme = require('./theme.scss');

var _theme2 = _interopRequireDefault(_theme);

var _HoverableContent = require('./HoverableContent');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HoverableContent = (0, _HoverableContent.HoverableContentFactory)();
var ThemedHoverableContent = (0, _reactCssThemr.themr)(_identifiers.HOVERABLECONTENT, _theme2.default)(HoverableContent);
exports.default = ThemedHoverableContent;