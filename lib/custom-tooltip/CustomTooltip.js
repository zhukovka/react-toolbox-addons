'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _tooltip = require('react-toolbox/lib/tooltip');

var _tooltip2 = _interopRequireDefault(_tooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var CustomTooltip = (0, _tooltip2.default)(function (_ref) {
  var theme = _ref.theme;

  var props = _objectWithoutProperties(_ref, ['theme']);

  return _react2.default.createElement('div', props);
});

exports.default = CustomTooltip;