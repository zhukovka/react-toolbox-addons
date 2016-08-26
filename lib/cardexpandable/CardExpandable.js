'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CardExpandable = exports.cardExpandableFactory = undefined;

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory() {
    var CardExpandable = function (_Component) {
        _inherits(CardExpandable, _Component);

        function CardExpandable(props) {
            _classCallCheck(this, CardExpandable);

            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CardExpandable).call(this, props));

            _this.state = { expanded: true };
            _this.expandBtn = {
                icon: 'close',
                onClick: function onClick() {
                    return _this.toggleExpanded();
                }
            };
            return _this;
        }

        _createClass(CardExpandable, [{
            key: 'renderCardTitle',
            value: function renderCardTitle() {
                var titleButtons = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
                var _props = this.props;
                var title = _props.title;
                var primary = _props.primary;

                var buttons = _react2.default.createElement(_index.CardTitleButtons, { center: true, buttons: [].concat(_toConsumableArray(titleButtons), [this.expandBtn]) });
                var titleprops = { title: title, theme: _theme2.default };
                if (primary) {
                    return _react2.default.createElement(
                        _index.CardTitlePrimary,
                        titleprops,
                        buttons
                    );
                }
                return _react2.default.createElement(
                    _card.CardTitle,
                    titleprops,
                    buttons
                );
            }
        }, {
            key: 'toggleExpanded',
            value: function toggleExpanded() {
                this.setState({ expanded: !this.state.expanded });
            }
        }, {
            key: 'renderContent',
            value: function renderContent() {
                var children = this.props.children;

                if (this.state.expanded) {
                    return children;
                }
            }
        }, {
            key: 'render',
            value: function render() {
                return _react2.default.createElement(
                    _card.Card,
                    null,
                    this.renderCardTitle(this.props.titleButtons),
                    this.renderContent()
                );
            }
        }]);

        return CardExpandable;
    }(_react.Component);

    CardExpandable.propTypes = {
        children: _react.PropTypes.any,
        primary: _react.PropTypes.bool,
        title: _react.PropTypes.string,
        titleButtons: _react.PropTypes.arrayOf(_rtcomponentsprops.ButtonProps)
    };


    return CardExpandable;
};
var CardExpandable = factory();
exports.default = (0, _reactCssThemr.themr)(_identifiers.CARD_EXPANDABLE)(CardExpandable);
exports.cardExpandableFactory = factory;
exports.CardExpandable = CardExpandable;