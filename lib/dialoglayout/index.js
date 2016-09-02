'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactCssThemr = require('react-css-themr');

var _theme = require('./theme.scss');

var _theme2 = _interopRequireDefault(_theme);

var _identifiers = require('../identifiers');

var _DialogLayout = require('./DialogLayout');

var _DialogLayout2 = _interopRequireDefault(_DialogLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ThemedDialogLayout = (0, _reactCssThemr.themr)(_identifiers.DIALOG_LAYOUT, _theme2.default)(_DialogLayout2.default);

exports.default = ThemedDialogLayout;