'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSAlert = require('react-s-alert');

var _reactSAlert2 = _interopRequireDefault(_reactSAlert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Toastr = function Toastr(props) {
  return _react2.default.createElement(_reactSAlert2.default, props);
};
exports.default = Toastr;