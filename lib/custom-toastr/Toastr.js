'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSAlert = require('react-s-alert');

var _reactSAlert2 = _interopRequireDefault(_reactSAlert);

require('../../node_modules/react-s-alert/dist/s-alert-default.css');

require('../../node_modules/react-s-alert/dist/s-alert-css-effects/slide.css');

require('../../node_modules/react-s-alert/dist/s-alert-css-effects/scale.css');

require('../../node_modules/react-s-alert/dist/s-alert-css-effects/bouncyflip.css');

require('../../node_modules/react-s-alert/dist/s-alert-css-effects/flip.css');

require('../../node_modules/react-s-alert/dist/s-alert-css-effects/genie.css');

require('../../node_modules/react-s-alert/dist/s-alert-css-effects/jelly.css');

require('../../node_modules/react-s-alert/dist/s-alert-css-effects/stackslide.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Toastr = function Toastr(props) {
  return _react2.default.createElement(_reactSAlert2.default, props);
};
exports.default = Toastr;