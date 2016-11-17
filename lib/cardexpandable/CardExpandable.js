'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CardExpandable = exports.cardExpandableFactory = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactCssThemr = require('react-css-themr');

var _card = require('react-toolbox/lib/card');

var _index = require('../card-addons/index');

var _theme = require('./theme.scss');

var _theme2 = _interopRequireDefault(_theme);

var _rtcomponentsprops = require('../rtcomponentsprops');

var _identifiers = require('../identifiers');

var _classnames3 = require('classnames');

var _classnames4 = _interopRequireDefault(_classnames3);

var _ExpandIcon = require('./ExpandIcon.js');

var _ExpandIcon2 = _interopRequireDefault(_ExpandIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory() {
    var CardExpandable = function (_Component) {
        _inherits(CardExpandable, _Component);

        function CardExpandable(props) {
            _classCallCheck(this, CardExpandable);

            var _this = _possibleConstructorReturn(this, (CardExpandable.__proto__ || Object.getPrototypeOf(CardExpandable)).call(this, props));

            _this.state = { expanded: 1 };
            return _this;
        }

        _createClass(CardExpandable, [{
            key: 'scrollDown',
            value: function scrollDown(content) {
                if (content && this.props.absolute) {
                    content.scrollTop = content.scrollHeight;
                }
            }
        }, {
            key: 'renderCardTitle',
            value: function renderCardTitle() {
                var _this2 = this;

                var titleButtons = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
                var _props = this.props;
                var title = _props.title;
                var primary = _props.primary;

                var expandButton = {
                    icon: _react2.default.createElement(_ExpandIcon2.default, { isOpen: this.state.expanded === 2 }),
                    onClick: function onClick(e) {
                        return _this2.toggleExpanded(_this2);
                    }
                };
                var buttons = _react2.default.createElement(_index.CardTitleButtons, { center: true, buttons: [].concat(_toConsumableArray(titleButtons), [expandButton]) });
                var titleprops = { title: title, theme: _theme2.default, className: _theme2.default.cardexpandable_title };
                if (primary) {
                    return _react2.default.createElement(
                        _index.CardTitlePrimary,
                        _extends({}, titleprops, { theme: _theme2.default }),
                        buttons
                    );
                }
                return _react2.default.createElement(
                    _card.CardTitle,
                    _extends({}, titleprops, { theme: _theme2.default }),
                    buttons
                );
            }
        }, {
            key: 'toggleExpanded',
            value: function toggleExpanded() {
                this.setState({ expanded: (this.state.expanded + 1) % 3 });
            }
        }, {
            key: 'renderContent',
            value: function renderContent() {
                var children = _react.Children.toArray(this.props.children);
                return _react2.default.createElement(
                    'div',
                    { className: (0, _classnames4.default)(_theme2.default.collapsable, _defineProperty({}, _theme2.default.collapse, this.state.expanded === 0)) },
                    _react2.default.createElement(
                        'div',
                        { className: _theme2.default.content, ref: this.scrollDown.bind(this) },
                        children[0]
                    ),
                    children.slice(1)
                );
            }
        }, {
            key: 'render',
            value: function render() {
                var _classnames2;

                var _props2 = this.props;
                var absolute = _props2.absolute;
                var titleButtons = _props2.titleButtons;
                var style = _props2.style;
                var hidden = _props2.hidden;
                var className = _props2.className;

                var classes = (0, _classnames4.default)(_theme2.default.cardExpandable, (_classnames2 = {}, _defineProperty(_classnames2, _theme2.default.absolute, absolute), _defineProperty(_classnames2, _theme2.default.hidden, hidden), _defineProperty(_classnames2, _theme2.default.fullheight, this.state.expanded === 2), _classnames2), className);
                return _react2.default.createElement(
                    _card.Card,
                    { className: classes, style: style },
                    this.renderCardTitle(titleButtons),
                    this.renderContent()
                );
            }
        }]);

        return CardExpandable;
    }(_react.Component);

    CardExpandable.propTypes = {
        absolute: _react.PropTypes.bool,
        className: _react.PropTypes.string,
        children: _react.PropTypes.any,
        hidden: _react.PropTypes.bool,
        primary: _react.PropTypes.bool,
        style: _react.PropTypes.object,
        title: _react.PropTypes.string,
        titleButtons: _react.PropTypes.arrayOf(_rtcomponentsprops.ButtonProps)
    };


    return CardExpandable;
};
var CardExpandable = factory();
exports.default = (0, _reactCssThemr.themr)(_identifiers.CARD_EXPANDABLE)(CardExpandable);
exports.cardExpandableFactory = factory;
exports.CardExpandable = CardExpandable;