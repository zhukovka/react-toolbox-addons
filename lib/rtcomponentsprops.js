'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ButtonProps = undefined;

var _react = require('react');

var ButtonProps = exports.ButtonProps = _react.PropTypes.shape({
    accent: _react.PropTypes.bool,
    children: _react.PropTypes.node,
    className: _react.PropTypes.string,
    disabled: _react.PropTypes.bool,
    flat: _react.PropTypes.bool,
    floating: _react.PropTypes.bool,
    href: _react.PropTypes.string,
    icon: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]),
    inverse: _react.PropTypes.bool,
    label: _react.PropTypes.string,
    mini: _react.PropTypes.bool,
    neutral: _react.PropTypes.bool,
    onMouseLeave: _react.PropTypes.func,
    onMouseUp: _react.PropTypes.func,
    primary: _react.PropTypes.bool,
    raised: _react.PropTypes.bool,
    theme: _react.PropTypes.shape({
        accent: _react.PropTypes.string,
        button: _react.PropTypes.string,
        flat: _react.PropTypes.string,
        floating: _react.PropTypes.string,
        icon: _react.PropTypes.string,
        inverse: _react.PropTypes.string,
        mini: _react.PropTypes.string,
        neutral: _react.PropTypes.string,
        primary: _react.PropTypes.string,
        raised: _react.PropTypes.string,
        rippleWrapper: _react.PropTypes.string,
        toggle: _react.PropTypes.string
    }),
    type: _react.PropTypes.string
});