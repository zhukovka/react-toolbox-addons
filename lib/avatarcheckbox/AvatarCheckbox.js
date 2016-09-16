'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Avatarcheckbox = exports.avatarcheckboxFactory = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _button = require('react-toolbox/lib/button');

var _checkbox = require('react-toolbox/lib/checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _reactCssThemr = require('react-css-themr');

var _identifiers = require('../identifiers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory() {
    var AvatarCheckbox = function (_Checkbox) {
        _inherits(AvatarCheckbox, _Checkbox);

        function AvatarCheckbox() {
            _classCallCheck(this, AvatarCheckbox);

            return _possibleConstructorReturn(this, (AvatarCheckbox.__proto__ || Object.getPrototypeOf(AvatarCheckbox)).apply(this, arguments));
        }

        _createClass(AvatarCheckbox, [{
            key: 'render',
            value: function render() {
                var _this2 = this;

                var btnProps = {
                    floating: true,
                    onClick: function onClick() {
                        return _this2.props.onChange(!_this2.props.checked);
                    }
                };

                if (this.props.checked) {
                    btnProps.accent = true;
                    btnProps.icon = 'check';
                } else {
                    btnProps.style = { backgroundImage: 'url(' + this.props.avatar + ')', backgroundSize: 'cover' };
                }

                return _react2.default.createElement(
                    'div',
                    { style: { width: '56px', height: '56px' } },
                    _react2.default.createElement(_button.Button, btnProps)
                );
            }
        }]);

        return AvatarCheckbox;
    }(_checkbox2.default);

    AvatarCheckbox.propTypes = {
        /**
         * Path to avatar image.
         */
        avatar: _react.PropTypes.string
    };

    return AvatarCheckbox;
};

var Avatarcheckbox = factory();
exports.default = (0, _reactCssThemr.themr)(_identifiers.AVATARCHECKBOX)(Avatarcheckbox);
exports.avatarcheckboxFactory = factory;
exports.Avatarcheckbox = Avatarcheckbox;