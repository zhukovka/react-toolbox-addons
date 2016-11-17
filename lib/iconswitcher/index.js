'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactCssThemr = require('react-css-themr');

var _identifiers = require('../identifiers');

var _theme = require('./theme.scss');

var _theme2 = _interopRequireDefault(_theme);

var _IconSwitcher = require('./IconSwitcher');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IconSwitcher = (0, _IconSwitcher.IconSwitcherFactory)();
var ThemedIconSwitcher = (0, _reactCssThemr.themr)(_identifiers.ICONSWITCHER, _theme2.default)(IconSwitcher);
exports.default = ThemedIconSwitcher;