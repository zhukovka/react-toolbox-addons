'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledInput = undefined;

var _reactCssThemr = require('react-css-themr');

var _theme = require('./theme.scss');

var _theme2 = _interopRequireDefault(_theme);

var _identifiers = require('../identifiers');

var _StyledInput = require('./StyledInput');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledInput = (0, _StyledInput.styledInputFactory)();
var ThemedStyledInput = (0, _reactCssThemr.themr)(_identifiers.STYLED_INPUT, _theme2.default)(StyledInput);

exports.StyledInput = ThemedStyledInput;