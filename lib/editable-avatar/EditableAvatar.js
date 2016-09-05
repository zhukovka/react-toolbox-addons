'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EditableAvatar = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _avatar = require('react-toolbox/lib/avatar');

var _avatar2 = _interopRequireDefault(_avatar);

var _constants = require('./constants');

var _avatarOverlay = require('../avatar-overlay');

var _avatarOverlay2 = _interopRequireDefault(_avatarOverlay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EditableAvatar = function (_Component) {
    _inherits(EditableAvatar, _Component);

    function EditableAvatar() {
        _classCallCheck(this, EditableAvatar);

        return _possibleConstructorReturn(this, (EditableAvatar.__proto__ || Object.getPrototypeOf(EditableAvatar)).apply(this, arguments));
    }

    _createClass(EditableAvatar, [{
        key: 'handleOnChange',
        value: function handleOnChange(e) {
            this.onUpload(e);
            this.refs.fileInput.value = '';
        }
    }, {
        key: 'onUpload',
        value: function onUpload(e) {
            var _this2 = this;

            var file = void 0;
            e.preventDefault();
            var errorHandler = function errorHandler(evt) {
                switch (evt.target.error.code) {
                    case evt.target.error.NOT_FOUND_ERR:
                        console.log('File Not Found!');
                        break;
                    case evt.target.error.NOT_READABLE_ERR:
                        console.log('File is not readable');
                        break;
                    case evt.target.error.ABORT_ERR:
                        break; //
                    default:
                        console.log('An error occurred reading this file.');
                }
            };
            var reader = new FileReader();
            reader.onerror = errorHandler;
            reader.onloadend = function () {
                _this2.props.onUpload(file, reader.result, e);
            };

            if (e.dataTransfer) {
                file = e.dataTransfer.files[0];
            } else {
                file = e.target.files[0];
            }
            reader.readAsDataURL(file);
        }
    }, {
        key: 'renderAvatar',
        value: function renderAvatar() {
            var _this3 = this;

            var _props = this.props;
            var editable = _props.editable;
            var theme = _props.theme;
            var image = _props.image;
            var className = _props.className;

            if (editable) {
                return _react2.default.createElement(
                    _avatarOverlay2.default,
                    { image: image, icon: _constants.ICON_PHOTO_CAMERA, onClick: function onClick() {
                            _reactDom2.default.findDOMNode(_this3.refs.fileInput).click();
                        } },
                    _react2.default.createElement('input', { ref: 'fileInput',
                        type: 'file',
                        onChange: this.handleOnChange.bind(this),
                        style: { display: 'none' } })
                );
            } else {
                return _react2.default.createElement(_avatar2.default, { image: image, theme: theme, className: className });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return this.renderAvatar();
        }
    }]);

    return EditableAvatar;
}(_react.Component);

EditableAvatar.propTypes = {
    className: _react.PropTypes.string,
    editable: _react.PropTypes.bool,
    image: _react.PropTypes.string,
    onUpload: _react.PropTypes.func,
    theme: _react.PropTypes.object
};

exports.EditableAvatar = EditableAvatar;
exports.default = EditableAvatar;