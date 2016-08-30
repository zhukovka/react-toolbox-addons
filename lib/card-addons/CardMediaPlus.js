'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CardMediaPlus = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _card = require('react-toolbox/lib/card');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var CardMediaPlus = function CardMediaPlus(_ref) {
    var children = _ref.children;

    var other = _objectWithoutProperties(_ref, ['children']);

    return _react2.default.createElement(
        _card.CardMedia,
        other,
        _react2.default.createElement(
            'div',
            { className: 'test', style: { height: '100%' } },
            children
        )
    );
};
CardMediaPlus.propTypes = {
    children: _react.PropTypes.any
};

exports.CardMediaPlus = CardMediaPlus;