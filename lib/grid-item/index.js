'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GridItem = undefined;

var _theme = require('./theme.scss');

var _theme2 = _interopRequireDefault(_theme);

var _reactCssThemr = require('react-css-themr');

var _GridItem = require('./GridItem.js');

var _GridItem2 = _interopRequireDefault(_GridItem);

var _identifiers = require('../identifiers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ThemedGridItem = (0, _reactCssThemr.themr)(_identifiers.GRID_ITEM, _theme2.default)(_GridItem2.default);
exports.default = ThemedGridItem;
exports.GridItem = ThemedGridItem;