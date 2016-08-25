'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _theme2 = require('./theme.scss');

var _theme3 = _interopRequireDefault(_theme2);

var _chip = require('react-toolbox/lib/chip');

var _chip2 = _interopRequireDefault(_chip);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ChipTransparent = function ChipTransparent(props) {
    var active = props.active;
    var className = props.className;

    var other = _objectWithoutProperties(props, ['active', 'className']);

    var classes = (0, _classnames3.default)(_defineProperty({}, _theme3.default.active, active), className);

    return _react2.default.createElement(_chip2.default, _extends({}, other, { className: classes, theme: _theme3.default }));
};
ChipTransparent.propTypes = {
    active: _react.PropTypes.bool,
    className: _react.PropTypes.string,
    theme: _react.PropTypes.shape({
        avatar: _react.PropTypes.string,
        chip: _react.PropTypes.string,
        deletable: _react.PropTypes.string,
        delete: _react.PropTypes.string,
        deleteIcon: _react.PropTypes.string,
        deleteX: _react.PropTypes.string
    })
};
exports.default = ChipTransparent;