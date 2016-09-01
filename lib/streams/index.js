'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StreamPanel = undefined;

var _StreamPanel2 = require('./StreamPanel');

var _StreamPanel3 = _interopRequireDefault(_StreamPanel2);

var _reactCssThemr = require('react-css-themr');

var _theme = require('./theme.scss');

var _theme2 = _interopRequireDefault(_theme);

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _StreamPanel = (0, _reactCssThemr.themr)(_constants.CSS_STREAM_PANEL, _theme2.default)(_StreamPanel3.default);
exports.StreamPanel = _StreamPanel;
exports.default = _StreamPanel;