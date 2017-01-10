'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ButtonSwitcher = exports.ButtonSwitcherFactory = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _reactCssThemr = require('react-css-themr');

var _identifiers = require('../identifiers');

var _button = require('react-toolbox/lib/button');

var _IconSwitcher = require('./IconSwitcher.js');

var _font_icon = require('react-toolbox/lib/font_icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ButtonSwitcher = function ButtonSwitcher(_ref) {
    var active = _ref.active,
        icons = _ref.icons,
        labels = _ref.labels,
        className = _ref.className,
        theme = _ref.theme,
        onSwitch = _ref.onSwitch,
        other = _objectWithoutProperties(_ref, ['active', 'icons', 'labels', 'className', 'theme', 'onSwitch']);

    var renderIcons = function renderIcons() {
        return icons.map(function (icon, i) {
            var classname = (0, _classnames3.default)(theme.button, _defineProperty({}, theme.active, icon === active));
            return _react2.default.createElement(
                _button.Button,
                { theme: theme, key: icon + '-' + i, onClick: function onClick() {
                        return onSwitch(icon);
                    }, className: classname },
                labels[i],
                _react2.default.createElement(_font_icon.FontIcon, { value: icon })
            );
        });
    };
    var classname = (0, _classnames3.default)(theme.buttonSwitcher, className);
    return _react2.default.createElement(
        'span',
        _extends({ className: classname }, other),
        renderIcons()
    );
};
ButtonSwitcher.propTypes = {
    active: _react.PropTypes.string,
    children: _react.PropTypes.any,
    className: _react.PropTypes.string,
    icons: _react.PropTypes.arrayOf(_react.PropTypes.string),
    labels: _react.PropTypes.arrayOf(_react.PropTypes.string),
    onSwitch: _react.PropTypes.func,
    theme: _react.PropTypes.object
};
ButtonSwitcher.propTypes = _IconSwitcher.IconSwitcher.propTypes;
ButtonSwitcher.propTypes.labels = _react.PropTypes.arrayOf(_react.PropTypes.string);
var factory = function factory() {
    return ButtonSwitcher;
};
exports.default = (0, _reactCssThemr.themr)(_identifiers.BUTTON_SWITCHER)(ButtonSwitcher);
exports.ButtonSwitcherFactory = factory;
exports.ButtonSwitcher = ButtonSwitcher;