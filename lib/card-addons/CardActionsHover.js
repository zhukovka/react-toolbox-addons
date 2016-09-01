'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CardActionsHover = function CardActionsHover(_ref) {
    var children = _ref.children;

    var style = { color: '#fff', height: '100%', display: 'flex', 'alignItems': 'center', backgroundColor: 'none' };
    return _react2.default.createElement(
        'div',
        { style: { height: '100%', backgroundColor: 'rgba(0,0,0,.5)' } },
        _react2.default.createElement(
            'div',
            { style: style },
            children
        )
    );
};
CardActionsHover.propTypes = {
    children: _react.PropTypes.any
};

exports.default = CardActionsHover;