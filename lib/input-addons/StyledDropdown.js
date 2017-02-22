'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StyledDropdown = exports.styledDropdownFactory = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _dropdown = require('react-toolbox/lib/dropdown');

var _dropdown2 = _interopRequireDefault(_dropdown);

var _reactCssThemr = require('react-css-themr');

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _identifiers = require('../identifiers.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * StyledDropdown props extend Dropdown props
 */
var StyledDropdown = function StyledDropdown(_ref) {
    var _classnames;

    var theme = _ref.theme;
    var className = _ref.className;
    var primary = _ref.primary;
    var collapse = _ref.collapse;
    var black = _ref.black;
    var align = _ref.align;

    var other = _objectWithoutProperties(_ref, ['theme', 'className', 'primary', 'collapse', 'black', 'align']);

    var classes = (0, _classnames3.default)(theme.dropdown_styled, (_classnames = {}, _defineProperty(_classnames, theme.primary, primary), _defineProperty(_classnames, theme.collapse, collapse), _defineProperty(_classnames, theme.black, black), _defineProperty(_classnames, theme[align], align), _classnames), className);
    return _react2.default.createElement(_dropdown2.default, _extends({ className: classes }, other, { theme: theme }));
};

StyledDropdown.propTypes = {
    /**
     * set to align text of selected item
     * one of ['right', 'center']
     * String align
     */
    align: _react.PropTypes.oneOf(['right', 'center']),
    black: _react.PropTypes.bool,
    className: _react.PropTypes.string,
    /**
     * set to remove top and bottom padding
     * Boolean collapse
     */
    collapse: _react.PropTypes.bool,
    /**
     * set color of selected item text to primary
     * Boolean primary
     */
    primary: _react.PropTypes.bool,
    theme: _react.PropTypes.shape({
        active: _react.PropTypes.string,
        disabled: _react.PropTypes.string,
        dropdown: _react.PropTypes.string,
        error: _react.PropTypes.string,
        errored: _react.PropTypes.string,
        field: _react.PropTypes.string,
        label: _react.PropTypes.string,
        selected: _react.PropTypes.string,
        templateValue: _react.PropTypes.string,
        up: _react.PropTypes.string,
        value: _react.PropTypes.string,
        values: _react.PropTypes.string
    })
};

var factory = function factory() {
    return StyledDropdown;
};
exports.default = (0, _reactCssThemr.themr)(_identifiers.STYLED_DROPDOWN)(StyledDropdown);
exports.styledDropdownFactory = factory;
exports.StyledDropdown = StyledDropdown;