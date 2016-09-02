'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _dialog = require('react-toolbox/lib/dialog');

var _dialog2 = _interopRequireDefault(_dialog);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var DialogLayout = function DialogLayout(_ref) {
    var children = _ref.children;
    var className = _ref.className;
    var theme = _ref.theme;

    var other = _objectWithoutProperties(_ref, ['children', 'className', 'theme']);

    var classes = (0, _classnames2.default)(className);
    return _react2.default.createElement(
        _dialog2.default,
        _extends({}, other, { theme: theme, className: classes }),
        children
    );
};
DialogLayout.propTypes = {
    actions: _react.PropTypes.array,
    active: _react.PropTypes.bool,
    children: _react.PropTypes.node,
    className: _react.PropTypes.string,
    onEscKeyDown: _react.PropTypes.func,
    onOverlayClick: _react.PropTypes.func,
    onOverlayMouseDown: _react.PropTypes.func,
    onOverlayMouseMove: _react.PropTypes.func,
    onOverlayMouseUp: _react.PropTypes.func,
    theme: _react.PropTypes.shape({
        active: _react.PropTypes.string,
        body: _react.PropTypes.string,
        button: _react.PropTypes.string,
        dialog: _react.PropTypes.string,
        navigation: _react.PropTypes.string,
        title: _react.PropTypes.string
    }),
    title: _react.PropTypes.string,
    type: _react.PropTypes.string
};

exports.default = DialogLayout;