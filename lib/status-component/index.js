'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StatusComponent = undefined;

var _reactCssThemr = require('react-css-themr');

var _theme = require('./theme.scss');

var _theme2 = _interopRequireDefault(_theme);

var _StatusComponent2 = require('./StatusComponent');

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _StatusComponent = (0, _reactCssThemr.themr)(_constants.CSS_CLASS_STATUS_COMPONENT, _theme2.default)(_StatusComponent2.StatusComponent);
exports.StatusComponent = _StatusComponent;
exports.default = _StatusComponent;