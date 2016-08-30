'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardExpandable = undefined;

var _reactCssThemr = require('react-css-themr');

var _identifiers = require('../identifiers');

var _CardExpandable = require('./CardExpandable.js');

var _theme = require('./theme.scss');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CardExpandable = (0, _CardExpandable.cardExpandableFactory)();
var ThemedCardExpandable = (0, _reactCssThemr.themr)(_identifiers.CARD_EXPANDABLE, _theme2.default)(CardExpandable);

exports.default = ThemedCardExpandable;
exports.CardExpandable = ThemedCardExpandable;