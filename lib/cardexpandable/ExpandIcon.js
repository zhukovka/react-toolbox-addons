'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _font_icon = require('react-toolbox/lib/font_icon');

var _font_icon2 = _interopRequireDefault(_font_icon);

var _theme = require('./theme.scss');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ARROW_UP = 'keyboard_arrow_up';
var ARROW_DOWN = 'keyboard_arrow_down';

var ExpandIcon = function ExpandIcon(_ref) {
    var isOpen = _ref.isOpen;

    return _react2.default.createElement(
        _font_icon2.default,
        { className: _theme2.default.iconWrapper },
        _react2.default.createElement(
            'span',
            { className: 'material-icons', style: { lineHeight: '.7' } },
            isOpen ? ARROW_DOWN : ARROW_UP
        ),
        _react2.default.createElement(
            'span',
            { className: 'material-icons', style: { lineHeight: '.7' } },
            isOpen ? ARROW_UP : ARROW_DOWN
        )
    );
};

ExpandIcon.propTypes = {
    isOpen: _react.PropTypes.bool
};

exports.default = ExpandIcon;