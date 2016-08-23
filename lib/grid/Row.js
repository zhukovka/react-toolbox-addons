'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _constants = require('./constants');

var _Column = require('./Column.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var RTRow = function RTRow(_ref) {
    var _classnames;

    var className = _ref.className;
    var children = _ref.children;
    var theme = _ref.theme;
    var align = _ref.align;
    var expanded = _ref.expanded;
    var collapse = _ref.collapse;


    var classes = (0, _classnames3.default)((_classnames = {}, _defineProperty(_classnames, theme[_constants.CSS_ROW_CLASS], true), _defineProperty(_classnames, theme[(0, _Column.joinWithHyphen)(_constants.CSS_ROW_ALIGN, align)], align), _defineProperty(_classnames, theme[_constants.CSS_ROW_EXPANDED], expanded), _defineProperty(_classnames, theme[_constants.CSS_ROW_COLLAPSE], collapse), _classnames), className);

    return _react2.default.createElement(
        'div',
        { className: classes },
        children
    );
};
RTRow.propTypes = {
    align: _react.PropTypes.string,
    children: _react.PropTypes.array,
    className: _react.PropTypes.string,
    collapse: _react.PropTypes.bool,
    expanded: _react.PropTypes.bool,
    theme: _react.PropTypes.object
};
exports.default = RTRow;