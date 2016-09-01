'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StyledInput = exports.styledInputFactory = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _input = require('react-toolbox/lib/input');

var _input2 = _interopRequireDefault(_input);

var _reactCssThemr = require('react-css-themr');

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _identifiers = require('../identifiers.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var StyledInput = function StyledInput(_ref) {
    var _classnames;

    var theme = _ref.theme;
    var className = _ref.className;
    var large = _ref.large;
    var white = _ref.white;

    var other = _objectWithoutProperties(_ref, ['theme', 'className', 'large', 'white']);

    var classes = (0, _classnames3.default)((_classnames = {}, _defineProperty(_classnames, theme.large, large), _defineProperty(_classnames, theme.white, white), _classnames), className);
    return _react2.default.createElement(_input2.default, _extends({ theme: theme, className: classes }, other));
};

StyledInput.propTypes = {
    children: _react.PropTypes.any,
    className: _react.PropTypes.string,
    disabled: _react.PropTypes.bool,
    error: _react.PropTypes.string,
    floating: _react.PropTypes.bool,
    hint: _react.PropTypes.string,
    icon: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]),
    label: _react.PropTypes.string,
    large: _react.PropTypes.bool,
    maxLength: _react.PropTypes.number,
    multiline: _react.PropTypes.bool,
    name: _react.PropTypes.string,
    onBlur: _react.PropTypes.func,
    onChange: _react.PropTypes.func,
    onFocus: _react.PropTypes.func,
    onKeyPress: _react.PropTypes.func,
    required: _react.PropTypes.bool,
    theme: _react.PropTypes.shape({
        bar: _react.PropTypes.string,
        counter: _react.PropTypes.string,
        disabled: _react.PropTypes.string,
        error: _react.PropTypes.string,
        errored: _react.PropTypes.string,
        hidden: _react.PropTypes.string,
        hint: _react.PropTypes.string,
        icon: _react.PropTypes.string,
        input: _react.PropTypes.string,
        inputElement: _react.PropTypes.string,
        large: _react.PropTypes.string,
        required: _react.PropTypes.string,
        withIcon: _react.PropTypes.string
    }),
    type: _react.PropTypes.string,
    value: _react.PropTypes.any,
    white: _react.PropTypes.bool
};

var factory = function factory() {
    return StyledInput;
};
exports.default = (0, _reactCssThemr.themr)(_identifiers.STYLED_INPUT)(StyledInput);
exports.styledInputFactory = factory;
exports.StyledInput = StyledInput;