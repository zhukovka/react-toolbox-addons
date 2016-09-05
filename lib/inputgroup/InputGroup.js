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
    var children = _ref.children;
    var className = _ref.className;
    var shadow = _ref.shadow;
    var theme = _ref.theme;

    var other = _objectWithoutProperties(_ref, ['children', 'className', 'shadow', 'theme']);

    var classes = (0, _classnames3.default)(theme.inputgroup, _defineProperty({}, theme.shadow, shadow), className);
    return _react2.default.createElement(
        'div',
        _extends({ className: classes }, other),
        children
    );
};
InputGroup.propTypes = {
    children: _react.PropTypes.any,
    className: _react.PropTypes.string,
    /**
     * set to add bottom shadow to the input group
     * Boolean shadow
     */
    shadow: _react.PropTypes.bool,
    theme: _react.PropTypes.shape({
        inputgroup: _react.PropTypes.string,
        shadow: _react.PropTypes.string
    })
};
var factory = function factory() {
    return InputGroup;
};
exports.default = (0, _reactCssThemr.themr)(_identifiers.INPUTGROUP)(InputGroup);
exports.InputGroupFactory = factory;
exports.InputGroup = InputGroup;