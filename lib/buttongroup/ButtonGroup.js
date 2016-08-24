'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ButtonGroup = function ButtonGroup(_ref) {
    var children = _ref.children;

    return _react2.default.createElement(
        'div',
        null,
        children
    );
};
ButtonGroup.propTypes = {
    children: _react.PropTypes.node
};

exports.default = ButtonGroup;