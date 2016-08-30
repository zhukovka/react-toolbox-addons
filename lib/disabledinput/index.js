'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DisabledInput = undefined;

var _identifiers = require('../identifiers');

var _reactCssThemr = require('react-css-themr');

var _DisabledInput = require('./DisabledInput');

var _theme = require('./theme.scss');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DisabledInput = (0, _DisabledInput.disabledInputFactory)();
var ThemedDisabledInput = (0, _reactCssThemr.themr)(_identifiers.DISABLED_INPUT, _theme2.default)(DisabledInput);

exports.default = ThemedDisabledInput;
exports.DisabledInput = ThemedDisabledInput;