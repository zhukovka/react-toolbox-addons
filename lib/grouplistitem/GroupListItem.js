'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GroupListItem = exports.GroupListItemFactory = undefined;

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

var GroupListItem = function GroupListItem(_ref) {
    var theme = _ref.theme;
    var className = _ref.className;
    var group = _ref.group;

    var other = _objectWithoutProperties(_ref, ['theme', 'className', 'group']);

    var classes = (0, _classnames2.default)(theme.grouplistitem, theme[group], className);
    return _react2.default.createElement(_list.ListItem, _extends({}, other, { className: classes, theme: theme }));
};
GroupListItem.propTypes = {
    className: _react.PropTypes.string,
    group: _react.PropTypes.string,
    theme: _react.PropTypes.object
};
var factory = function factory() {
    return GroupListItem;
};
exports.default = (0, _reactCssThemr.themr)(_identifiers.GROUPLISTITEM)(GroupListItem);
exports.GroupListItemFactory = factory;
exports.GroupListItem = GroupListItem;