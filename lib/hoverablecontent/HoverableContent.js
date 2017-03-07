'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HoverableContent = exports.HoverableContentFactory = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _reactCssThemr = require('react-css-themr');

var _identifiers = require('../identifiers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var HoverableContent = function HoverableContent(_ref) {
    var children = _ref.children,
        theme = _ref.theme,
        className = _ref.className,
        flex = _ref.flex,
        other = _objectWithoutProperties(_ref, ['children', 'theme', 'className', 'flex']);

    var classes = (0, _classnames3.default)(theme.hoverablecontent, _defineProperty({}, theme.flex, flex), className);

    var renderItems = function renderItems() {
        return _react2.default.Children.map(children, function (item) {

            var clone = _react2.default.cloneElement(item, {
                className: theme.hoverable_item
            });
            return clone;
        });
    };

    return _react2.default.createElement(
        'div',
        _extends({}, other, { className: classes }),
        renderItems()
    );
};
HoverableContent.propTypes = {
    children: _react.PropTypes.any,
    className: _react.PropTypes.string,
    flex: _react.PropTypes.bool,
    theme: _react.PropTypes.object
};
var factory = function factory() {
    return HoverableContent;
};
exports.default = (0, _reactCssThemr.themr)(_identifiers.HOVERABLECONTENT)(HoverableContent);
exports.HoverableContentFactory = factory;
exports.HoverableContent = HoverableContent;