'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DialogwithImage = undefined;

var _reactCssThemr = require('react-css-themr');

var _identifiers = require('../identifiers.js');

var _DialogWithImage = require('./DialogWithImage.js');

var _theme = require('./theme.scss');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DialogwithImage = (0, _DialogWithImage.dialogImageFactory)();
var ThemedDialogwithImage = (0, _reactCssThemr.themr)(_identifiers.DIALOGWITHIMAGE, _theme2.default)(DialogwithImage);

exports.default = ThemedDialogwithImage;
exports.DialogwithImage = ThemedDialogwithImage;