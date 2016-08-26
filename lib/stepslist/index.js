'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StepsList = undefined;

var _identifiers = require('../identifiers');

var _reactCssThemr = require('react-css-themr');

var _StepsList = require('./StepsList.js');

var _chips = require('../chips');

var _chips2 = _interopRequireDefault(_chips);

var _theme = require('./theme.scss');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StepsList = (0, _StepsList.stepsListFactory)(_chips2.default);
var ThemedStepsList = (0, _reactCssThemr.themr)(_identifiers.STEPSLIST, _theme2.default)(StepsList);

exports.default = ThemedStepsList;
exports.StepsList = ThemedStepsList;