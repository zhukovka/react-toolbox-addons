'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChatContent = undefined;

var _reactCssThemr = require('react-css-themr');

var _identifiers = require('../identifiers.js');

var _ChatContent = require('./ChatContent.js');

var _ChatContent2 = _interopRequireDefault(_ChatContent);

var _theme = require('./theme.scss');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ThemedChatComponent = (0, _reactCssThemr.themr)(_identifiers.CHAT_CONTENT, _theme2.default)(_ChatContent2.default);

exports.default = ThemedChatComponent;
exports.ChatContent = ThemedChatComponent;