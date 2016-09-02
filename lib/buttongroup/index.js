'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactCssThemr = require('react-css-themr');

var _theme = require('./theme.scss');

var _theme2 = _interopRequireDefault(_theme);

var _identifiers = require('../identifiers');

var _ButtonGroup = require('./ButtonGroup');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ButtonGroup = (0, _ButtonGroup.buttonGroupFactory)();
var ThemedButtonGroup = (0, _reactCssThemr.themr)(_identifiers.BUTTON_GROUP, _theme2.default)(ButtonGroup);

exports.default = ThemedButtonGroup;