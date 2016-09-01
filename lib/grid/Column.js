'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Column = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.joinWithHyphen = joinWithHyphen;
exports.classMaps = classMaps;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function joinWithHyphen() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    return args.join('-');
}

function classMaps(names, theme) {
    return (names || '').split(' ').map(function (str) {
        return theme[str];
    });
}
var Column = function Column(props) {
    var _classnames;

    var className = props.className;
    var theme = props.theme;
    var children = props.children;
    var offset = props.offset;
    var align = props.align;
    var small = props.small;
    var medium = props.medium;
    var large = props.large;
    var order = props.order;
    var shrink = props.shrink;

    var other = _objectWithoutProperties(props, ['className', 'theme', 'children', 'offset', 'align', 'small', 'medium', 'large', 'order', 'shrink']);

    var classes = (0, _classnames3.default)(theme.card, (_classnames = {}, _defineProperty(_classnames, theme[_constants.CSS_COLUMN_CLASS], true), _defineProperty(_classnames, theme[joinWithHyphen(_constants.CSS_SMALL, small)], small), _defineProperty(_classnames, theme[joinWithHyphen(_constants.CSS_MEDIUM, medium)], medium), _defineProperty(_classnames, theme[joinWithHyphen(_constants.CSS_LARGE, large)], large), _defineProperty(_classnames, theme[joinWithHyphen(_constants.CSS_ALIGN, align)], align), _defineProperty(_classnames, theme[_constants.CSS_SHRINK], shrink), _classnames), classMaps(offset, theme), classMaps(order, theme), className);

    return _react2.default.createElement(
        'div',
        _extends({ 'data-react-toolbox': 'col', className: classes }, other),
        children
    );
};
Column.propTypes = {
    align: _react.PropTypes.string,
    children: _react.PropTypes.any,
    className: _react.PropTypes.string,
    large: _react.PropTypes.number,
    medium: _react.PropTypes.number,
    offset: _react.PropTypes.string,
    order: _react.PropTypes.string,
    shrink: _react.PropTypes.bool,
    small: _react.PropTypes.number,
    theme: _react.PropTypes.object
};
exports.Column = Column;