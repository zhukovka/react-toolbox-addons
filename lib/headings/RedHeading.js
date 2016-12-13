'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RedHeading = exports.redHeadingFactory = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactCssThemr = require('react-css-themr');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _identifiers = require('../identifiers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var factory = function factory() {
    var RedHeading = function RedHeading(_ref) {
        var children = _ref.children;
        var className = _ref.className;
        var theme = _ref.theme;

        var classes = (0, _classnames2.default)(theme.redHeading, className);
        return _react2.default.createElement(
            'h5',
            { className: classes },
            children
        );
    };

    RedHeading.propTypes = {
        children: _react.PropTypes.any,
        className: _react.PropTypes.string,
        theme: _react.PropTypes.shape({
            redHeading: _react.PropTypes.string
        })
    };

    return RedHeading;
};
var RedHeading = factory();
exports.default = (0, _reactCssThemr.themr)(_identifiers.SIDEBAR_PLUS)(RedHeading);
exports.redHeadingFactory = factory;
exports.RedHeading = RedHeading;