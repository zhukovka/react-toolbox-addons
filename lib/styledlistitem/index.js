'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactCssThemr = require('react-css-themr');

var _identifiers = require('../identifiers');

var _theme = require('./theme.scss');

var _theme2 = _interopRequireDefault(_theme);

var _StyledListItem = require('./StyledListItem');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledListItem = (0, _StyledListItem.StyledListItemFactory)();
var ThemedStyledListItem = (0, _reactCssThemr.themr)(_identifiers.STYLEDLISTITEM, _theme2.default)(StyledListItem);
exports.default = ThemedStyledListItem;