'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _font_icon = require('react-toolbox/lib/font_icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IconWithContent = function IconWithContent(_ref) {
    var icon = _ref.icon,
        text = _ref.text,
        iconColor = _ref.iconColor,
        size = _ref.size,
        theme = _ref.theme,
        active = _ref.active,
        onClick = _ref.onClick,
        style = _ref.style;

    var fontSize = parseInt(size / 10);
    var PX = 'px';
    return _react2.default.createElement(
        'div',
        { className: theme.wrapper, style: style },
        active ? _react2.default.createElement(_font_icon.FontIcon, { value: icon, className: theme.activeIcon, style: {
                fontSize: size + 4 + PX,
                color: 'rgba(255,0,0,.3)',
                marginLeft: -2 + PX,
                marginTop: -2 + PX
            } }) : null,
        _react2.default.createElement(_font_icon.FontIcon, { value: icon, className: theme.icon, style: { fontSize: size + PX, color: iconColor }, onClick: onClick }),
        _react2.default.createElement(
            'span',
            { className: theme.content, style: {
                    top: size / 2 + PX,
                    left: size / 4 + PX,
                    fontSize: fontSize + PX,
                    marginLeft: -fontSize + PX,
                    marginTop: -(fontSize / 2) + PX
                } },
            text
        )
    );
};

IconWithContent.propTypes = {
    active: _react.PropTypes.bool,
    icon: _react.PropTypes.string,
    iconColor: _react.PropTypes.string,
    size: _react.PropTypes.number,
    text: _react.PropTypes.string,
    theme: _react.PropTypes.object,
    onClick: _react.PropTypes.func,
    style: _react.PropTypes.object
};

exports.default = IconWithContent;