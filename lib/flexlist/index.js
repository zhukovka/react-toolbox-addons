'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FlexList = undefined;

var _reactCssThemr = require('react-css-themr');

var _identifiers = require('../identifiers.js');

var _FlexList = require('./FlexList.js');

var _theme = require('./theme.scss');

var _theme2 = _interopRequireDefault(_theme);

var _ListItem = require('react-toolbox/lib/list/ListItem');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var applyTheme = function applyTheme(Component) {
  return (0, _reactCssThemr.themr)(_identifiers.FLEXLIST, _theme2.default)(Component);
};
var ThemedFlexList = applyTheme((0, _FlexList.flexlistFactory)(_ListItem.ListItem));
exports.default = ThemedFlexList;
exports.FlexList = ThemedFlexList;