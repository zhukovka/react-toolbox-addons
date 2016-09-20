'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactCssThemr = require('react-css-themr');

var _identifiers = require('../identifiers');

var _theme = require('./theme.scss');

var _theme2 = _interopRequireDefault(_theme);

var _MessageItem = require('./MessageItem');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MessageItem = (0, _MessageItem.MessageItemFactory)();
var ThemedMessageItem = (0, _reactCssThemr.themr)(_identifiers.MESSAGEITEM, _theme2.default)(MessageItem);
exports.default = ThemedMessageItem;