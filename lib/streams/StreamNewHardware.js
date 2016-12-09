'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StreamNewHardware = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _card = require('react-toolbox/lib/card');

var _font_icon = require('react-toolbox/lib/font_icon');

var _font_icon2 = _interopRequireDefault(_font_icon);

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StreamNewHardware = function StreamNewHardware(props) {
    var theme = props.theme,
        onClick = props.onClick;

    return _react2.default.createElement(
        'div',
        { className: theme[_constants.CSS_SCROLL_ITEM] },
        _react2.default.createElement(
            _card.Card,
            { onClick: onClick, theme: theme, className: theme['card--transparent'] },
            _react2.default.createElement(
                _card.CardMedia,
                { aspectRatio: 'wide', theme: theme },
                _react2.default.createElement(_font_icon2.default, { value: _constants.ICON_ADD })
            )
        ),
        _react2.default.createElement(
            'p',
            { className: theme['streamPanel--newHardware'] },
            _constants.ADD_NEW_HARDWARE
        )
    );
};

StreamNewHardware.propTypes = {
    onClick: _react.PropTypes.func,
    theme: _react.PropTypes.object
};

exports.StreamNewHardware = StreamNewHardware;
exports.default = StreamNewHardware;