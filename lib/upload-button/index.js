'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UploadButton = undefined;

var _reactCssThemr = require('react-css-themr');

var _theme = require('./theme.scss');

var _theme2 = _interopRequireDefault(_theme);

var _UploadButton = require('./UploadButton.js');

var _identifiers = require('../identifiers.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _RTUploadButton = (0, _reactCssThemr.themr)(_identifiers.UPLOAD_BUTTON, _theme2.default)(_UploadButton.RTUploadButton);
exports.UploadButton = _RTUploadButton;
exports.default = _RTUploadButton;