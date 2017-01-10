'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GroupListDividerWithClickFactory = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _font_icon = require('react-toolbox/lib/font_icon');

var _font_icon2 = _interopRequireDefault(_font_icon);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _identifiers = require('../identifiers.js');

var _reactCssThemr = require('react-css-themr');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var GroupListDividerWithClick = function GroupListDividerWithClick(_ref) {
    var onClick = _ref.onClick,
        theme = _ref.theme,
        collapsed = _ref.collapsed;

    var ARROW_DROP_DOWN = 'arrow_drop_down';
    var ARROW_DROP_UP = 'arrow_drop_up';
    var cls = (0, _classnames3.default)(theme.clickIcon, _defineProperty({}, theme.collapsed, collapsed));
    return _react2.default.createElement(
        'div',
        { className: theme.clickDivider },
        _react2.default.createElement(_font_icon2.default, { value: !collapsed ? ARROW_DROP_UP : ARROW_DROP_DOWN, onClick: onClick, className: cls })
    );
};

GroupListDividerWithClick.propTypes = {
    collapsed: _react.PropTypes.bool,
    onClick: _react.PropTypes.func,
    theme: _react.PropTypes.object
};

var factory = function factory() {
    return GroupListDividerWithClick;
};
exports.default = (0, _reactCssThemr.themr)(_identifiers.GROUPLISTDIVIDERWITHCLICK)(GroupListDividerWithClick);
exports.GroupListDividerWithClickFactory = factory;