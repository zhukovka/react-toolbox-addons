'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TabItem = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _button = require('react-toolbox/lib/button');

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TabItem = function TabItem(_ref) {
    var children = _ref.children;

    return _react2.default.createElement(
        _button2.default,
        { flat: true },
        children
    );
};

TabItem.propTypes = {
    children: _react.PropTypes.any,
    theme: _react.PropTypes.object
};

exports.TabItem = TabItem;
exports.default = TabItem;