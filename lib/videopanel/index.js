'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VideoPanel = undefined;

var _identifiers = require('../identifiers');

var _reactCssThemr = require('react-css-themr');

var _VideoPanel = require('./VideoPanel.js');

var _theme = require('./theme.scss');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VideoPanel = (0, _VideoPanel.videoPanelFactory)();
var ThemedVideoPanel = (0, _reactCssThemr.themr)(_identifiers.VIDEOPANEL, _theme2.default)(VideoPanel);

exports.default = ThemedVideoPanel;
exports.VideoPanel = ThemedVideoPanel;