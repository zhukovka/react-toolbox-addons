'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _card = require('react-toolbox/lib/card');

var _theme = require('./theme.scss');

var _theme2 = _interopRequireDefault(_theme);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var CardActionsSpaced = function CardActionsSpaced(_ref) {
    var align = _ref.align,
        verticalAlign = _ref.verticalAlign,
        fullheight = _ref.fullheight,
        className = _ref.className,
        other = _objectWithoutProperties(_ref, ['align', 'verticalAlign', 'fullheight', 'className']);

    var classes = (0, _classnames3.default)(_defineProperty({}, _theme2.default.fullheight, fullheight), _theme2.default[align], _theme2.default['align-' + verticalAlign], className);
    return _react2.default.createElement(_card.CardActions, _extends({}, other, { theme: _theme2.default, className: classes }));
};
CardActionsSpaced.propTypes = {
    align: _react.PropTypes.oneOf(['center', 'start', 'end', 'space-around', 'space-between']),
    children: _react.PropTypes.node,
    className: _react.PropTypes.string,
    fullheight: _react.PropTypes.bool,
    verticalAlign: _react.PropTypes.oneOf(['center', 'start', 'end'])
};
exports.default = CardActionsSpaced;