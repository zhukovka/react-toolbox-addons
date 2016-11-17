'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ChipTransparent = exports.chipTransparentFactory = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _identifiers = require('../identifiers.js');

var _reactCssThemr = require('react-css-themr');

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _chip = require('react-toolbox/lib/chip');

var _chip2 = _interopRequireDefault(_chip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var factory = function factory() {
    var ChipTransparent = function ChipTransparent(_ref) {
        var active = _ref.active,
            className = _ref.className,
            theme = _ref.theme,
            other = _objectWithoutProperties(_ref, ['active', 'className', 'theme']);

        var classes = (0, _classnames3.default)(_defineProperty({}, theme.active, active), className);

        return _react2.default.createElement(_chip2.default, _extends({}, other, { className: classes, theme: theme }));
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

    return ChipTransparent;
};

var ChipTransparent = factory();
exports.default = (0, _reactCssThemr.themr)(_identifiers.TRANSPARENT_CHIP)(ChipTransparent);
exports.chipTransparentFactory = factory;
exports.ChipTransparent = ChipTransparent;