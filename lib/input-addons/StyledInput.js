'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledInput = exports.styledInputFactory = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _input = require('react-toolbox/lib/input');

var _input2 = _interopRequireDefault(_input);

var _reactCssThemr = require('react-css-themr');

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _identifiers = require('../identifiers.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StyledInput = function (_React$Component) {
  _inherits(StyledInput, _React$Component);

  function StyledInput(props) {
    _classCallCheck(this, StyledInput);

    return _possibleConstructorReturn(this, (StyledInput.__proto__ || Object.getPrototypeOf(StyledInput)).call(this, props));
  }

  _createClass(StyledInput, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.autofocus) {
        var ref = this.refs[this.props.label + '_ref'];
        if (ref) {
          var input = ref.getWrappedInstance();
          if (input) {
            (0, _reactDom.findDOMNode)(input).querySelector('input').focus();
          }
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          theme = _props.theme,
          className = _props.className,
          large = _props.large,
          white = _props.white,
          rightIcon = _props.rightIcon,
          other = _objectWithoutProperties(_props, ['theme', 'className', 'large', 'white', 'rightIcon']);

      var classes = (0, _classnames3.default)((_classnames = {}, _defineProperty(_classnames, theme.large, large), _defineProperty(_classnames, theme.white, white), _defineProperty(_classnames, theme.rightIcon, rightIcon), _classnames), theme.styled_input, className);
      return _react2.default.createElement(_input2.default, _extends({ theme: theme, ref: this.props.label + '_ref', className: classes }, other));
    }
  }]);

  return StyledInput;
}(_react2.default.Component);

StyledInput.propTypes = {
  autofocus: _react.PropTypes.boolean,
  children: _react.PropTypes.any,
  className: _react.PropTypes.string,
  /**
   * sets text size to large
   * Boolean large
   */
  label: _react.PropTypes.string,
  large: _react.PropTypes.bool,
  /**
   * sets input icon position to the right
   * Boolean rightIcon
   */
  rightIcon: _react.PropTypes.bool,
  theme: _react.PropTypes.object,
  /**
   * sets text color to white
   * Boolean white
   */
  white: _react.PropTypes.bool
};

var factory = function factory() {
  return StyledInput;
};
exports.default = (0, _reactCssThemr.themr)(_identifiers.STYLED_INPUT)(StyledInput);
exports.styledInputFactory = factory;
exports.StyledInput = StyledInput;