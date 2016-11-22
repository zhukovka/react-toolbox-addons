'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DialogwithImage = exports.dialogImageFactory = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _dialog = require('react-toolbox/lib/dialog');

var _dialog2 = _interopRequireDefault(_dialog);

var _reactCssThemr = require('react-css-themr');

var _identifiers = require('../identifiers');

var _theme = require('./theme.scss');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory() {
    var DialogWithImage = function (_Dialog) {
        _inherits(DialogWithImage, _Dialog);

        function DialogWithImage() {
            _classCallCheck(this, DialogWithImage);

            return _possibleConstructorReturn(this, (DialogWithImage.__proto__ || Object.getPrototypeOf(DialogWithImage)).apply(this, arguments));
        }

        _createClass(DialogWithImage, [{
            key: 'render',
            value: function render() {
                var _props = this.props,
                    children = _props.children,
                    background = _props.background,
                    imageCapture = _props.imageCapture,
                    other = _objectWithoutProperties(_props, ['children', 'background', 'imageCapture']);

                return _react2.default.createElement(
                    _dialog2.default,
                    _extends({}, other, {
                        theme: _theme2.default }),
                    children,
                    _react2.default.createElement(
                        'div',
                        { className: _theme2.default.imageCapture, style: { background: background } },
                        _react2.default.createElement('img', { src: imageCapture })
                    )
                );
            }
        }]);

        return DialogWithImage;
    }(_dialog2.default);

    DialogWithImage.propTypes = {
        /**
         * Sets color for background rectangle.
         */
        background: _react.PropTypes.string,
        /**
         * Path to image capture.
         */
        imageCapture: _react.PropTypes.string
    };

    return DialogWithImage;
};

var DialogwithImage = factory();
exports.default = (0, _reactCssThemr.themr)(_identifiers.DIALOGWITHIMAGE)(DialogwithImage);
exports.dialogImageFactory = factory;
exports.DialogwithImage = DialogwithImage;