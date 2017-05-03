'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.InputDdown = exports.InputDdownFactory = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _input = require('react-toolbox/lib/input');

var _input2 = _interopRequireDefault(_input);

var _list = require('react-toolbox/lib/list');

var _reactCssThemr = require('react-css-themr');

var _identifiers = require('../identifiers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var InputDdown = function InputDdown(_ref) {
    var _classnames;

    var children = _ref.children,
        className = _ref.className,
        theme = _ref.theme,
        accent = _ref.accent,
        primary = _ref.primary,
        array = _ref.array,
        hint = _ref.hint,
        other = _objectWithoutProperties(_ref, ['children', 'className', 'theme', 'accent', 'primary', 'array', 'hint']);

    var classes = (0, _classnames3.default)(theme.inputddown, (_classnames = {}, _defineProperty(_classnames, theme.accent, accent), _defineProperty(_classnames, theme.primary, primary), _classnames), className);
    var items = array.map(function (str, i, a) {
        return _react2.default.createElement(_list.ListItem, { legend: str, key: i });
    });
    return _react2.default.createElement(
        _input2.default,
        _extends({ className: classes, hint: hint, theme: theme }, other),
        _react2.default.createElement(
            _list.List,
            { selectable: true },
            items
        )
    );
};
InputDdown.propTypes = {
    /**
     * set accent text color to all children
     * Boolean accent
     */
    accent: _react.PropTypes.bool,
    children: _react.PropTypes.any,
    className: _react.PropTypes.string,
    array: _react.PropTypes.arrayOf(_react.PropTypes.string),
    /**
     * set primary text color to all children
     * Boolean primary
     */
    primary: _react.PropTypes.bool,
    hint: _react.PropTypes.string,

    theme: _react.PropTypes.shape({
        inputddown: _react.PropTypes.string,
        rightIcon: _react.PropTypes.string
    })
};
var factory = function factory() {
    return InputDdown;
};
exports.default = (0, _reactCssThemr.themr)(_identifiers.INPUTDDOWN)(InputDdown);
exports.InputDdownFactory = factory;
exports.InputDdown = InputDdown;