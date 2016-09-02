'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TabItem = exports.TabBar = undefined;

var _TabBar2 = require('./TabBar');

var _TabBar3 = _interopRequireDefault(_TabBar2);

var _TabItem2 = require('./TabItem');

var _TabItem3 = _interopRequireDefault(_TabItem2);

var _reactCssThemr = require('react-css-themr');

var _theme = require('./theme.scss');

var _theme2 = _interopRequireDefault(_theme);

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _TabBar = (0, _reactCssThemr.themr)(_constants.TAB_BAR, _theme2.default)(_TabBar3.default);
var _TabItem = (0, _reactCssThemr.themr)(_constants.TAB_ITEM, _theme2.default)(_TabItem3.default);

exports.TabBar = _TabBar;
exports.TabItem = _TabItem;