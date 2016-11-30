'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _tooltip = require('react-toolbox/lib/tooltip');

var _tooltip2 = _interopRequireDefault(_tooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CustomTooltip = (0, _tooltip2.default)(function (props) {
  return _react2.default.createElement('div', props);
});

exports.default = CustomTooltip;