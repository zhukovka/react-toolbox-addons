'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StyledDropdown = exports.styledDropdownFactory = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _dropdown = require('react-toolbox/lib/dropdown');

var _dropdown2 = _interopRequireDefault(_dropdown);

var _reactCssThemr = require('react-css-themr');

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _identifiers = require('../identifiers.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * StyledDropdown props extend Dropdown props
 */
var StyledDropdown = function (_Dropdown) {
    _inherits(StyledDropdown, _Dropdown);

    function StyledDropdown(props) {
        var _classnames;

        _classCallCheck(this, StyledDropdown);

        var theme = props.theme;
        var className = props.className;
        var primary = props.primary;
        var collapse = props.collapse;
        var align = props.align;

        var classes = (0, _classnames3.default)(theme.dropdown_styled, (_classnames = {}, _defineProperty(_classnames, theme.primary, primary), _defineProperty(_classnames, theme.collapse, collapse), _defineProperty(_classnames, theme[align], align), _classnames), className);
        props.className = classes;
        return _possibleConstructorReturn(this, (StyledDropdown.__proto__ || Object.getPrototypeOf(StyledDropdown)).call(this, props));
    }

    _createClass(StyledDropdown, [{
        key: 'renderValue',
        value: function renderValue(item, idx) {
            var theme = this.props.theme;

            var className = item.value === this.props.value ? theme.selected : null;
            return _react2.default.createElement(
                'li',
                { key: idx, className: className, onMouseDown: this.handleSelect.bind(this, item.value) },
                this.props.template ? this.props.template(item) : item.label
            );
        }
    }]);

    return StyledDropdown;
}(_dropdown2.default);
//


StyledDropdown.propTypes = {
    /**
     * set to align text of selected item
     * one of ['right', 'center']
     * String align
     */
    align: _react.PropTypes.oneOf(['right', 'center']),
    className: _react.PropTypes.string,
    /**
     * set to remove top and bottom padding
     * Boolean collapse
     */
    collapse: _react.PropTypes.bool,
    /**
     * set color of selected item text to primary
     * Boolean primary
     */
    primary: _react.PropTypes.bool,
    theme: _react.PropTypes.shape({
        active: _react.PropTypes.string,
        disabled: _react.PropTypes.string,
        dropdown: _react.PropTypes.string,
        error: _react.PropTypes.string,
        errored: _react.PropTypes.string,
        field: _react.PropTypes.string,
        label: _react.PropTypes.string,
        selected: _react.PropTypes.string,
        templateValue: _react.PropTypes.string,
        up: _react.PropTypes.string,
        value: _react.PropTypes.string,
        values: _react.PropTypes.string
    })
};

var factory = function factory() {
    return StyledDropdown;
};
exports.default = (0, _reactCssThemr.themr)(_identifiers.STYLED_DROPDOWN)(StyledDropdown);
exports.styledDropdownFactory = factory;
exports.StyledDropdown = StyledDropdown;