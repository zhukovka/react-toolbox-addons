'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledDropdown = exports.StyledInput = undefined;

var _reactCssThemr = require('react-css-themr');

var _theme = require('./theme.scss');

var _theme2 = _interopRequireDefault(_theme);

var _identifiers = require('../identifiers');

var _StyledInput = require('./StyledInput');

var _StyledDropdown = require('./StyledDropdown');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledInput = (0, _StyledInput.styledInputFactory)();
var ThemedStyledInput = (0, _reactCssThemr.themr)(_identifiers.STYLED_INPUT, _theme2.default)(StyledInput);

var ThemedStyledDropdown = (0, _reactCssThemr.themr)(_identifiers.STYLED_DROPDOWN, _theme2.default, { composeTheme: false })(_StyledDropdown.StyledDropdown);

exports.StyledInput = ThemedStyledInput;
exports.StyledDropdown = ThemedStyledDropdown;