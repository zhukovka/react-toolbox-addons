'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EditableTitle = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _font_icon = require('react-toolbox/lib/font_icon');

var _font_icon2 = _interopRequireDefault(_font_icon);

var _input = require('react-toolbox/lib/input');

var _input2 = _interopRequireDefault(_input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ICON_EDIT = 'edit';
var INPUT_TYPE_TEXT = 'text';

var EditableTitle = function (_Component) {
    _inherits(EditableTitle, _Component);

    function EditableTitle(props) {
        _classCallCheck(this, EditableTitle);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(EditableTitle).call(this, props));

        _this.state = {
            onHover: false,
            editable: _this.props.editable
        };
        return _this;
    }

    _createClass(EditableTitle, [{
        key: 'blur',
        value: function blur(e) {
            this.setState({
                editable: false
            });
            this.props.onBlur(e);
        }
    }, {
        key: 'toggleOnHover',
        value: function toggleOnHover(bool) {
            this.setState({
                onHover: bool
            });
        }
    }, {
        key: 'iconClick',
        value: function iconClick(e) {
            var input = e.currentTarget.parentElement.querySelector('input');
            this.setState({
                editable: true
            }, function () {
                if (input) {
                    input.focus();
                }
            });
        }
    }, {
        key: 'renderIcon',
        value: function renderIcon() {
            var theme = this.props.theme;
            var _state = this.state;
            var onHover = _state.onHover;
            var editable = _state.editable;

            if (onHover && !editable) {
                return _react2.default.createElement(_font_icon2.default, { value: ICON_EDIT, onClick: this.iconClick.bind(this),
                    className: theme['editableTitle--editIcon'] });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props;
            var defaultValue = _props.defaultValue;
            var theme = _props.theme;
            var editable = this.state.editable;

            return _react2.default.createElement(
                'div',
                { onMouseOver: this.toggleOnHover.bind(this, true),
                    onMouseLeave: this.toggleOnHover.bind(this, false),
                    className: theme['editableTitle--titleWrapper'] },
                _react2.default.createElement(_input2.default, { type: INPUT_TYPE_TEXT, defaultValue: defaultValue, disabled: !editable,
                    onBlur: this.blur.bind(this),
                    theme: theme }),
                this.renderIcon()
            );
        }
    }]);

    return EditableTitle;
}(_react.Component);

EditableTitle.propTypes = {
    defaultValue: _react.PropTypes.string.isRequired,
    editable: _react.PropTypes.bool.isRequired,
    onBlur: _react.PropTypes.func.isRequired,
    theme: _react.PropTypes.object
};

exports.EditableTitle = EditableTitle;