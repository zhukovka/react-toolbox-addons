'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ListItemDropDownContent = exports.ListItemDropDownContentFactory = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactCssThemr = require('react-css-themr');

var _dropdown = require('react-toolbox/lib/dropdown');

var _dropdown2 = _interopRequireDefault(_dropdown);

var _identifiers = require('../identifiers.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ListItemDropDownContent = function ListItemDropDownContent(_ref) {
    var title = _ref.title,
        theme = _ref.theme,
        source = _ref.source,
        selected = _ref.selected,
        other = _objectWithoutProperties(_ref, ['title', 'theme', 'source', 'selected']);

    return _react2.default.createElement(
        'div',
        { className: theme.listItemContent },
        _react2.default.createElement(
            'span',
            { className: theme.listItemContent_title },
            title
        ),
        _react2.default.createElement(_dropdown2.default, _extends({ className: theme.listItemContent_dropDown, value: selected, source: source }, other))
    );
};

ListItemDropDownContent.propTypes = {
    onChange: _react.PropTypes.func,
    source: _react.PropTypes.array,
    theme: _react.PropTypes.object,
    title: _react.PropTypes.string,
    selected: _react.PropTypes.string
};
var factory = function factory() {
    return ListItemDropDownContent;
};
exports.default = (0, _reactCssThemr.themr)(_identifiers.LIST_ITEM_DROP_DOWN_CONTENT)(ListItemDropDownContent);
exports.ListItemDropDownContentFactory = factory;
exports.ListItemDropDownContent = ListItemDropDownContent;