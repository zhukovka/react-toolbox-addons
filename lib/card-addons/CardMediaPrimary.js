'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CardMediaPrimary = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _card = require('react-toolbox/lib/card');

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var CardMediaPrimary = function CardMediaPrimary(_ref) {
    var children = _ref.children;
    var className = _ref.className;
    var theme = _ref.theme;
    var overflow = _ref.overflow;

    var other = _objectWithoutProperties(_ref, ['children', 'className', 'theme', 'overflow']);

    var classes = (0, _classnames3.default)(_defineProperty({}, theme.overflow, overflow), className);
    return _react2.default.createElement(
        _card.CardMedia,
        _extends({}, other, { theme: theme, className: classes }),
        children
    );
};
CardMediaPrimary.propTypes = {
    aspectRatio: _react.PropTypes.oneOf(['wide', 'square']),
    children: _react.PropTypes.any,
    className: _react.PropTypes.string,
    color: _react.PropTypes.string,
    contentOverlay: _react.PropTypes.bool,
    image: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]),
    overflow: _react.PropTypes.bool,
    theme: _react.PropTypes.shape({
        cardMedia: _react.PropTypes.string,
        content: _react.PropTypes.string,
        contentOverlay: _react.PropTypes.string,
        square: _react.PropTypes.string,
        wide: _react.PropTypes.string
    })
};

exports.CardMediaPrimary = CardMediaPrimary;
exports.default = CardMediaPrimary;