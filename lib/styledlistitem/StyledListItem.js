'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StyledListItem = exports.StyledListItemFactory = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactCssThemr = require('react-css-themr');

var _identifiers = require('../identifiers');

var _list = require('react-toolbox/lib/list');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var StyledListItem = function StyledListItem(_ref) {
    var theme = _ref.theme,
        className = _ref.className,
        other = _objectWithoutProperties(_ref, ['theme', 'className']);

    var classes = (0, _classnames2.default)(theme.styledlistitem, className);
    return _react2.default.createElement(_list.ListItem, _extends({}, other, { className: classes, theme: theme }));
};
StyledListItem.propTypes = {
    className: _react.PropTypes.string,
    theme: _react.PropTypes.object
};
var factory = function factory() {
    return StyledListItem;
};
exports.default = (0, _reactCssThemr.themr)(_identifiers.STYLEDLISTITEM)(StyledListItem);
exports.StyledListItemFactory = factory;
exports.StyledListItem = StyledListItem;