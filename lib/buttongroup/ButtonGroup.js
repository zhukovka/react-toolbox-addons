'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ButtonGroup = exports.buttonGroupFactory = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactCssThemr = require('react-css-themr');

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _identifiers = require('../identifiers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * ButtonGroup - wrapper for buttons or inputs with buttons
 */
var ButtonGroup = function ButtonGroup(_ref) {
    var children = _ref.children,
        className = _ref.className,
        white = _ref.white,
        theme = _ref.theme,
        align = _ref.align;

    var classes = (0, _classnames3.default)(theme.buttonGroup, _defineProperty({}, theme.white, white), theme[align], className);
    return _react2.default.createElement(
        'div',
        { className: classes },
        children
    );
};
ButtonGroup.propTypes = {
    align: _react.PropTypes.oneOf(['center', 'start', 'end']),
    children: _react.PropTypes.node,
    className: _react.PropTypes.string,
    theme: _react.PropTypes.shape({
        buttonGroup: _react.PropTypes.string,
        white: _react.PropTypes.string
    }),
    /**
     * sets color of containing buttons to white
     * Boolean white
     */
    white: _react.PropTypes.bool
};

var factory = function factory() {
    return ButtonGroup;
};
exports.default = (0, _reactCssThemr.themr)(_identifiers.BUTTON_GROUP)(ButtonGroup);
exports.buttonGroupFactory = factory;
exports.ButtonGroup = ButtonGroup;