'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonSwitcher = exports.IconSwitcher = undefined;

var _reactCssThemr = require('react-css-themr');

var _identifiers = require('../identifiers');

var _theme = require('./theme.scss');

var _theme2 = _interopRequireDefault(_theme);

var _IconSwitcher = require('./IconSwitcher');

var _ButtonSwitcher = require('./ButtonSwitcher');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IconSwitcher = (0, _IconSwitcher.IconSwitcherFactory)();
var ButtonSwitcher = (0, _ButtonSwitcher.ButtonSwitcherFactory)();
var ThemedIconSwitcher = (0, _reactCssThemr.themr)(_identifiers.ICONSWITCHER, _theme2.default)(IconSwitcher);
var ThemedButtonSwitcher = (0, _reactCssThemr.themr)(_identifiers.BUTTON_SWITCHER, _theme2.default)(ButtonSwitcher);
exports.IconSwitcher = ThemedIconSwitcher;
exports.ButtonSwitcher = ThemedButtonSwitcher;