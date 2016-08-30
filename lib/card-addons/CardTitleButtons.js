'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CardTitleButtons = exports.cardTitleButtonsFactory = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _button = require('react-toolbox/lib/button');

var _button2 = _interopRequireDefault(_button);

var _identifiers = require('../identifiers');

var _reactCssThemr = require('react-css-themr');

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var factory = function factory() {
    var CardTitleButtons = function CardTitleButtons(_ref) {
        var _ref$buttons = _ref.buttons;
        var buttons = _ref$buttons === undefined ? [] : _ref$buttons;
        var center = _ref.center;
        var theme = _ref.theme;

        var classes = (0, _classnames3.default)(_defineProperty({}, theme.center, center), theme[_constants.CSS_CARD_TITLE_BUTTONS_WRAPPER]);
        return _react2.default.createElement(
            'div',
            { className: classes },
            buttons.map(function (btn, index) {
                return _react2.default.createElement(_button2.default, _extends({ floating: true, mini: true, key: index, theme: theme }, btn));
            })
        );
    };

    CardTitleButtons.propTypes = {
        buttons: _react.PropTypes.array.isRequired,
        center: _react.PropTypes.bool,
        theme: _react.PropTypes.object
    };
    return CardTitleButtons;
};
var CardTitleButtons = factory();
exports.default = (0, _reactCssThemr.themr)(_identifiers.CARDTITLEBUTTONS)(CardTitleButtons);
exports.cardTitleButtonsFactory = factory;
exports.CardTitleButtons = CardTitleButtons;