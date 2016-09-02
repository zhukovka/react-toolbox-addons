'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TabItem = exports.TabBar = undefined;

var _TabBar2 = require('./TabBar');

var _TabItem2 = require('./TabItem');

var _reactCssThemr = require('react-css-themr');

var _theme = require('./theme.scss');

var _theme2 = _interopRequireDefault(_theme);

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _TabBar = (0, _reactCssThemr.themr)(_constants.TAB_BAR, _theme2.default)(_TabBar2.TabBar);
var _TabItem = (0, _reactCssThemr.themr)(_constants.TAB_ITEM, _theme2.default)(_TabItem2.TabItem);

exports.TabBar = _TabBar;
exports.TabItem = _TabItem;