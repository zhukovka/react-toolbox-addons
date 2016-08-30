'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CardMediaPrimary = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _card = require('react-toolbox/lib/card');

var _rtcomponentsprops = require('../rtcomponentsprops');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var CardMediaPrimary = function CardMediaPrimary(_ref) {
    var children = _ref.children;
    var theme = _ref.theme;

    var other = _objectWithoutProperties(_ref, ['children', 'theme']);

    return _react2.default.createElement(
        _card.CardMedia,
        _extends({}, other, { theme: theme }),
        children
    );
};
CardMediaPrimary.propTypes = _rtcomponentsprops.CardMediaProps;

exports.CardMediaPrimary = CardMediaPrimary;