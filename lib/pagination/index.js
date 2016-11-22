'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableWithPagination = undefined;

var _reactCssThemr = require('react-css-themr');

var _TableWithPagination = require('./TableWithPagination.js');

var _TableWithPagination2 = _interopRequireDefault(_TableWithPagination);

var _identifiers = require('../identifiers.js');

var _theme = require('./theme.scss');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ThemedTableWithPagination = (0, _reactCssThemr.themr)(_identifiers.TABLE_WITH_PAGINATION, _theme2.default)(_TableWithPagination2.default);
exports.default = ThemedTableWithPagination;
exports.TableWithPagination = ThemedTableWithPagination;