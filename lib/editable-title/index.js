'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EditableTitle = undefined;

var _EditableTitle2 = require('./EditableTitle');

var _reactCssThemr = require('react-css-themr');

var _theme = require('./theme.scss');

var _theme2 = _interopRequireDefault(_theme);

var _contants = require('./contants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _EditableTitle = (0, _reactCssThemr.themr)(_contants.CSS_EDITABLE_TITLE, _theme2.default)(_EditableTitle2.EditableTitle);
exports.EditableTitle = _EditableTitle;
exports.default = _EditableTitle;