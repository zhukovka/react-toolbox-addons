'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputGroup = exports.InputGroupFactory = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _reactCssThemr = require('react-css-themr');

var _identifiers = require('../identifiers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var InputGroup = function InputGroup(_ref) {
  var _classnames;

  var children = _ref.children;
  var className = _ref.className;
  var shadow = _ref.shadow;
  var rightIcon = _ref.rightIcon;
  var theme = _ref.theme;
  var accent = _ref.accent;
  var primary = _ref.primary;
  var white = _ref.white;

  var other = _objectWithoutProperties(_ref, ['children', 'className', 'shadow', 'rightIcon', 'theme', 'accent', 'primary', 'white']);

  var classes = (0, _classnames3.default)(theme.inputgroup, (_classnames = {}, _defineProperty(_classnames, theme.accent, accent), _defineProperty(_classnames, theme.primary, primary), _defineProperty(_classnames, theme.rightIcon, rightIcon), _defineProperty(_classnames, theme.shadow, shadow), _defineProperty(_classnames, theme.white, white), _classnames), className);
  return _react2.default.createElement(
    'div',
    _extends({ className: classes }, other, { 'data-react-toolbox': 'inputgroup' }),
    children
  );
};
InputGroup.propTypes = {
  /**
   * set accent text color to all children
   * Boolean accent
   */
  accent: _react.PropTypes.bool,
  children: _react.PropTypes.any,
  className: _react.PropTypes.string,
  /**
   * set primary text color to all children
   * Boolean primary
   */
  primary: _react.PropTypes.bool,
  /**
   * set to place any font icon to the right inside the preceding input
   * Boolean rightIcon
   */
  rightIcon: _react.PropTypes.bool,
  /**
   * set to add bottom shadow to the input group
   * Boolean shadow
   */
  shadow: _react.PropTypes.bool,
  theme: _react.PropTypes.shape({
    inputgroup: _react.PropTypes.string,
    rightIcon: _react.PropTypes.string,
    shadow: _react.PropTypes.string
  }),
  /**
   * set white text color to all children
   * Boolean white
   */
  white: _react.PropTypes.bool
};
var factory = function factory() {
  return InputGroup;
};
exports.default = (0, _reactCssThemr.themr)(_identifiers.INPUTGROUP)(InputGroup);
exports.InputGroupFactory = factory;
exports.InputGroup = InputGroup;