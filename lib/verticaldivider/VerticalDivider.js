'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.VerticalDivider = exports.verticalDividerFactory = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactCssThemr = require('react-css-themr');

var _identifiers = require('../identifiers');

var _theme = require('./theme.scss');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var factory = function factory() {
    var VerticalDivider = function VerticalDivider() {
        return _react2.default.createElement('div', { className: _theme2.default.verticalDivider });
    };
    return VerticalDivider;
};

var VerticalDivider = factory();
exports.default = (0, _reactCssThemr.themr)(_identifiers.VERTICALDIVIDER)(VerticalDivider);
exports.verticalDividerFactory = factory;
exports.VerticalDivider = VerticalDivider;