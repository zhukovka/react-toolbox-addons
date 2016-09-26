'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactCssThemr = require('react-css-themr');

var _identifiers = require('../identifiers');

var _theme = require('./theme.scss');

var _theme2 = _interopRequireDefault(_theme);

var _GroupListItem = require('./GroupListItem');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GroupListItem = (0, _GroupListItem.GroupListItemFactory)();
var ThemedGroupListItem = (0, _reactCssThemr.themr)(_identifiers.GROUPLISTITEM, _theme2.default)(GroupListItem);
exports.default = ThemedGroupListItem;