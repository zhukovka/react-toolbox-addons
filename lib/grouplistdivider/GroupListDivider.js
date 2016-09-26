'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GroupListDivider = exports.GroupListDividerFactory = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactCssThemr = require('react-css-themr');

var _identifiers = require('../identifiers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import classnames from 'classnames';
var GroupListDivider = function GroupListDivider(_ref) {
    var theme = _ref.theme;

    return _react2.default.createElement('hr', { className: theme.divider });
};
GroupListDivider.propTypes = {
    theme: _react.PropTypes.object
};
var factory = function factory() {
    return GroupListDivider;
};
exports.default = (0, _reactCssThemr.themr)(_identifiers.GROUPLISTDIVIDER)(GroupListDivider);
exports.GroupListDividerFactory = factory;
exports.GroupListDivider = GroupListDivider;