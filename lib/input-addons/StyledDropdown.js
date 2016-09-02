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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _identifiers = require('../identifiers.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * StyledDropdown
 */

var StyledDropdown = function StyledDropdown(_ref) {
    var theme = _ref.theme;
    var className = _ref.className;

    var other = _objectWithoutProperties(_ref, ['theme', 'className']);

    var classes = (0, _classnames2.default)(theme.dropdown_styled, className);
    return _react2.default.createElement(_dropdown2.default, _extends({ className: classes }, other, { theme: theme }));
};

StyledDropdown.propTypes = {
    allowBlank: _react.PropTypes.bool,
    auto: _react.PropTypes.bool,
    className: _react.PropTypes.string,
    disabled: _react.PropTypes.bool,
    error: _react.PropTypes.string,
    label: _react.PropTypes.string,
    name: _react.PropTypes.string,
    onBlur: _react.PropTypes.func,
    onChange: _react.PropTypes.func,
    onFocus: _react.PropTypes.func,
    source: _react.PropTypes.array.isRequired,
    template: _react.PropTypes.func,
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
    }),
    value: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number])
};

var factory = function factory() {
    return StyledDropdown;
};
exports.default = (0, _reactCssThemr.themr)(_identifiers.STYLED_DROPDOWN)(StyledDropdown);
exports.styledDropdownFactory = factory;
exports.StyledDropdown = StyledDropdown;