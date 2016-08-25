'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Upload = undefined;

var _Upload = require('./Upload');

var _reactCssThemr = require('react-css-themr');

var _theme = require('./theme.scss');

var _theme2 = _interopRequireDefault(_theme);

var _identifiers = require('../identifiers.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _RTUpload = (0, _reactCssThemr.themr)(_identifiers.UPLOAD, _theme2.default)(_Upload.RTUpload);
exports.Upload = _RTUpload;