'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Col = exports.Row = undefined;

var _reactCssThemr = require('react-css-themr');

var _theme2 = require('./theme.scss');

var _theme3 = _interopRequireDefault(_theme2);

var _Row = require('./Row');

var _Row2 = _interopRequireDefault(_Row);

var _Column = require('./Column');

var _Column2 = _interopRequireDefault(_Column);

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var applyTheme = function applyTheme(Component, id) {
  return (0, _reactCssThemr.themr)(id, _theme3.default)(Component);
};

var Col = applyTheme(_Column2.default, _constants.RT_COLUMN);
var Row = applyTheme(_Row2.default, _constants.RT_ROW);

exports.Row = Row;
exports.Col = Col;