'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Row = exports.Col = undefined;

var _reactCssThemr = require('react-css-themr');

var _theme2 = require('./theme.scss');

var _theme3 = _interopRequireDefault(_theme2);

var _Row2 = require('./Row');

var _Column = require('./Column');

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _Col = (0, _reactCssThemr.themr)(_constants.COLUMN, _theme3.default)(_Column.Column);
var _Row = (0, _reactCssThemr.themr)(_constants.ROW, _theme3.default)(_Row2.Row);

exports.Col = _Col;
exports.Row = _Row;