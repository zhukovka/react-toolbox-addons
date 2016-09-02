'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _constants = require('./constants.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var TabItem = function TabItem(_ref) {
    var children = _ref.children;
    var theme = _ref.theme;
    var active = _ref.active;
    var className = _ref.className;

    var other = _objectWithoutProperties(_ref, ['children', 'theme', 'active', 'className']);

    var classes = (0, _classnames3.default)(theme[_constants.TAB_ITEM], _defineProperty({}, theme[_constants.TAB_ITEM_ACTIVE], active), className);
    return _react2.default.createElement(
        'span',
        _extends({ className: classes }, other),
        children
    );
};

TabItem.propTypes = {
    /**
     * add for item to have active class
     * Boolean active
     */
    active: _react.PropTypes.bool,
    children: _react.PropTypes.any,
    className: _react.PropTypes.string,
    theme: _react.PropTypes.object
};

exports.default = TabItem;