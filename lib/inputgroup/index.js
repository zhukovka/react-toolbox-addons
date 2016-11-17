'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactCssThemr = require('react-css-themr');

var _identifiers = require('../identifiers');

var _theme = require('./theme.scss');

var _theme2 = _interopRequireDefault(_theme);

var _InputGroup = require('./InputGroup');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InputGroup = (0, _InputGroup.InputGroupFactory)();
var ThemedInputGroup = (0, _reactCssThemr.themr)(_identifiers.INPUTGROUP, _theme2.default)(InputGroup);
exports.default = ThemedInputGroup;