'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DialogwithImage = exports.dialogImageFactory = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _dialog = require('react-toolbox/lib/dialog');

var _dialog2 = _interopRequireDefault(_dialog);

var _button = require('react-toolbox/lib/button');

var _reactCssThemr = require('react-css-themr');

var _identifiers = require('../identifiers');

var _theme = require('./theme.scss');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory() {
    var DialogWithImage = function (_Dialog) {
        _inherits(DialogWithImage, _Dialog);

        function DialogWithImage() {
            var _ref;

            var _temp, _this, _ret;

            _classCallCheck(this, DialogWithImage);

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DialogWithImage.__proto__ || Object.getPrototypeOf(DialogWithImage)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
                active: false
            }, _this.handleToggle = function () {
                _this.setState({ active: !_this.state.active });
            }, _temp), _possibleConstructorReturn(_this, _ret);
        }

        _createClass(DialogWithImage, [{
            key: 'render',
            value: function render() {
                var children = this.props.children;

                return _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(_button.Button, { label: 'Show dialog', onClick: this.handleToggle }),
                    _react2.default.createElement(
                        _dialog2.default,
                        { type: this.props.type,
                            actions: this.actions,
                            active: this.state.active,
                            onEscKeyDown: this.handleToggle,
                            onOverlayClick: this.handleToggle,
                            theme: _theme2.default
                        },
                        children,
                        _react2.default.createElement(
                            'div',
                            { className: _theme2.default.imageCapture, style: { background: this.props.background } },
                            _react2.default.createElement('img', { src: this.props.imageCapture })
                        )
                    )
                );
            }
        }]);

        return DialogWithImage;
    }(_dialog2.default);

    DialogWithImage.propTypes = {
        actions: _react.PropTypes.array,
        active: _react.PropTypes.bool,
        background: _react.PropTypes.string,
        captureImage: _react.PropTypes.string,
        children: _react.PropTypes.node,
        className: _react.PropTypes.string,
        onEscKeyDown: _react.PropTypes.func,
        onOverlayClick: _react.PropTypes.func,
        onOverlayMouseDown: _react.PropTypes.func,
        onOverlayMouseMove: _react.PropTypes.func,
        onOverlayMouseUp: _react.PropTypes.func,
        theme: _react.PropTypes.shape({
            active: _react.PropTypes.string,
            body: _react.PropTypes.string,
            button: _react.PropTypes.string,
            dialog: _react.PropTypes.string,
            navigation: _react.PropTypes.string,
            title: _react.PropTypes.string
        }),
        title: _react.PropTypes.string,
        type: _react.PropTypes.string
    };

    return DialogWithImage;
};

var DialogwithImage = factory();
exports.default = (0, _reactCssThemr.themr)(_identifiers.DIALOGWITHIMAGE)(DialogwithImage);
exports.dialogImageFactory = factory;
exports.DialogwithImage = DialogwithImage;