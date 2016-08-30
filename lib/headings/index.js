'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RedHeading = undefined;

var _RedHeading = require('./RedHeading');

var _reactCssThemr = require('react-css-themr');

var _theme = require('./theme.scss');

var _theme2 = _interopRequireDefault(_theme);

var _identifiers = require('../identifiers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RedHeading = (0, _RedHeading.redHeadingFactory)();
var ThemedRedHeading = (0, _reactCssThemr.themr)(_identifiers.RED_HEADING, _theme2.default)(RedHeading);

exports.RedHeading = ThemedRedHeading;