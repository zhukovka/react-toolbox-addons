'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StatusComponent = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _constants = require('./constants');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StatusComponent = function StatusComponent(_ref) {
    var status = _ref.status;
    var theme = _ref.theme;
    var className = _ref.className;

    var classes = (0, _classnames2.default)(theme[_constants.CSS_CLASS_STATUS_COMPONENT], theme[_constants.CSS_CLASS_STATUS_COMPONENT + '--' + status], className);
    return _react2.default.createElement('span', { className: classes });
};
StatusComponent.propTypes = {
    className: _react.PropTypes.string,
    status: _react.PropTypes.string.isRequired,
    theme: _react.PropTypes.object
};
exports.StatusComponent = StatusComponent;