'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _button = require('react-toolbox/lib/button');

var _button2 = _interopRequireDefault(_button);

var _constants = require('./constants');

var _theme = require('./theme.scss');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CardTitleButtons = function CardTitleButtons(_ref) {
    var _ref$buttons = _ref.buttons;
    var buttons = _ref$buttons === undefined ? [] : _ref$buttons;

    return _react2.default.createElement(
        'div',
        { className: _theme2.default[_constants.CSS_CARD_TITLE_BUTTONS_WRAPPER] },
        buttons.map(function (btn, index) {
            return _react2.default.createElement(_button2.default, { floating: true, primary: true, mini: true, key: index, className: _theme2.default[_constants.CSS_CARD_TITLE_BUTTON], icon: btn.icon, onClick: function onClick(e) {
                    return btn.handlerOnClick(e);
                } });
        })
    );
};

CardTitleButtons.propTypes = {
    buttons: _react.PropTypes.arrayOf(_react.PropTypes.shape({
        icon: _react.PropTypes.string.isRequired,
        handlerOnClick: _react.PropTypes.func.isRequired
    }))
};

exports.default = CardTitleButtons;