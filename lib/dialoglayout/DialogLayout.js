'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _dialog = require('react-toolbox/lib/dialog');

var _dialog2 = _interopRequireDefault(_dialog);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _grid = require('../grid');

var _verticaldivider = require('../verticaldivider');

var _verticaldivider2 = _interopRequireDefault(_verticaldivider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * DialogLayout props extend Dialog props
 * example https://github.com/zhukovka/react-toolbox-addons/blob/master/components/dialoglayout/example.md
 */
var DialogLayout = function DialogLayout(_ref) {
    var children = _ref.children,
        className = _ref.className,
        theme = _ref.theme,
        primary = _ref.primary,
        id = _ref.id,
        other = _objectWithoutProperties(_ref, ['children', 'className', 'theme', 'primary', 'id']);

    var classes = (0, _classnames3.default)(theme.dialogLayout, _defineProperty({}, theme.primary, primary), className);

    var renderPanels = function renderPanels() {
        var colSize = 12 / children.length | 0;
        var panels = [];
        _react.Children.forEach(children, function (child, index) {
            panels.push(_react2.default.createElement(
                _grid.Col,
                { key: 'col-' + index, small: colSize, medium: colSize, large: colSize },
                child
            ));
            panels.push(_react2.default.createElement(_verticaldivider2.default, { key: 'div-' + index }));
        });
        return panels;
    };

    return _react2.default.createElement(
        _dialog2.default,
        _extends({}, other, { type: 'medium', theme: theme, className: classes }),
        _react2.default.createElement(
            'div',
            { id: id },
            _react2.default.createElement(
                _grid.Row,
                { expanded: true, collapse: true },
                renderPanels()
            )
        )
    );
};
DialogLayout.propTypes = {
    children: _react.PropTypes.node,
    className: _react.PropTypes.string,
    id: _react.PropTypes.string,
    /**
     * Add to make dialog header background color primary
     * Boolean primary
     */
    primary: _react.PropTypes.bool,
    theme: _react.PropTypes.shape({
        active: _react.PropTypes.string,
        body: _react.PropTypes.string,
        button: _react.PropTypes.string,
        dialog: _react.PropTypes.string,
        navigation: _react.PropTypes.string,
        title: _react.PropTypes.string
    })
};

exports.default = DialogLayout;