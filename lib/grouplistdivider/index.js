'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactCssThemr = require('react-css-themr');

var _identifiers = require('../identifiers');

var _theme = require('./theme.scss');

var _theme2 = _interopRequireDefault(_theme);

var _GroupListDivider = require('./GroupListDivider');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GroupListDivider = (0, _GroupListDivider.GroupListDividerFactory)();
var ThemedGroupListDivider = (0, _reactCssThemr.themr)(_identifiers.GROUPLISTDIVIDER, _theme2.default)(GroupListDivider);
exports.default = ThemedGroupListDivider;