'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Upload = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _identifiers = require('../identifiers');

var _uploadButton = require('../upload-button');

var _progress_bar = require('react-toolbox/lib/progress_bar');

var _progress_bar2 = _interopRequireDefault(_progress_bar);

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Upload = function (_Component) {
    _inherits(Upload, _Component);

    function Upload(props) {
        _classCallCheck(this, Upload);

        var _this = _possibleConstructorReturn(this, (Upload.__proto__ || Object.getPrototypeOf(Upload)).call(this, props));

        _this.state = {
            isDragActive: false,
            imageUrl: props.imageUrl,
            progress: 0,
            error: null
        };
        return _this;
    }

    _createClass(Upload, [{
        key: 'onDragLeave',
        value: function onDragLeave() {
            this.setState({
                isDragActive: false
            });
        }
    }, {
        key: 'onDragOver',
        value: function onDragOver(e) {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'copy';
            this.setState({
                isDragActive: true
            });
        }
    }, {
        key: 'onUpload',
        value: function onUpload(e) {
            var _this2 = this;

            var checkType = function checkType(file) {
                if (file) {
                    return [_constants.FILE_TYPE_JPG, _constants.FILE_TYPE_JPEG, _constants.FILE_TYPE_PNG].indexOf(file.type) >= 0;
                }
                return false;
            };

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

            var updateProgress = function updateProgress(evt) {
                if (evt.lengthComputable) {
                    var percentLoaded = Math.round(evt.loaded / evt.total * 100);
                    if (percentLoaded < 100) {
                        _this2.setState({
                            progress: percentLoaded
                        });
                    }
                }
            };

            if (e.dataTransfer) {
                file = e.dataTransfer.files[0];
            } else {
                file = e.target.files[0];
            }

            if (checkType(file)) {
                (function () {
                    var self = _this2;
                    var reader = new FileReader();
                    reader.onerror = errorHandler;
                    reader.onloadstart = function () {
                        _this2.setState({
                            progress: 1
                        });
                    };
                    reader.onload = function () {
                        _this2.setState({
                            progress: 100
                        });
                    };
                    reader.onprogress = updateProgress;
                    reader.onloadend = function () {
                        var img = new Image();
                        img.src = window.URL.createObjectURL(file);
                        img.onload = function () {
                            window.URL.revokeObjectURL(img.src);
                            var w = img.naturalWidth;
                            var h = img.naturalHeight;
                            var requirements = self.props.requirements;

                            if (!!requirements && w > requirements.width && h > requirements.height) {
                                reader.abort();
                                self.setState({
                                    error: _constants.ERROR_REQUIREMENTS,
                                    progress: 0
                                });
                            } else {
                                self.setState({
                                    progress: 0,
                                    imageUrl: reader.result,
                                    isDragActive: false,
                                    error: null
                                }, function () {
                                    self.props.onUpload(file, reader.result, e);
                                });
                            }
                        };
                    };
                    reader.readAsDataURL(file);
                })();
            } else {
                this.setState({
                    error: _constants.ERROR_BAD_TYPE
                });
            }
        }
    }, {
        key: 'getUploadErrorMessage',
        value: function getUploadErrorMessage(msgType) {
            var requirements = this.props.requirements;

            var message = void 0;
            switch (msgType) {
                case _constants.ERROR_REQUIREMENTS:
                    message = 'Image should have width ' + requirements.width + 'and height ' + requirements.height + '.';
                    break;
                case _constants.ERROR_BAD_TYPE:
                    message = 'Image should have extension one of ' + [_constants.FILE_TYPE_JPEG, _constants.FILE_TYPE_JPG, _constants.FILE_TYPE_PNG].map(function (str) {
                        return str.split('/')[1];
                    }).join(', ') + '.';
                    break;
                default:
                    break;
            }
            return message;
        }
    }, {
        key: 'renderContent',
        value: function renderContent() {
            var _state = this.state,
                progress = _state.progress,
                imageUrl = _state.imageUrl,
                error = _state.error;
            var theme = this.props.theme;

            return _react2.default.createElement(
                'div',
                { className: theme.uploadWrapper },
                _react2.default.createElement(_uploadButton.UploadButton, { icon: 'photo_camera',
                    imageUrl: imageUrl,
                    onUpload: this.onUpload.bind(this)
                }),
                progress && !error ? _react2.default.createElement(
                    'div',
                    { style: { padding: '10.8rem' } },
                    _react2.default.createElement(_progress_bar2.default, { value: this.state.progress, mode: 'determinate' })
                ) : !progress && error ? _react2.default.createElement(
                    'span',
                    { className: theme.errorMessage },
                    this.getUploadErrorMessage(error)
                ) : null
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _classnames;

            var _props = this.props,
                theme = _props.theme,
                className = _props.className,
                activeClass = _props.activeClass,
                defaultClass = _props.defaultClass;
            var isDragActive = this.state.isDragActive;

            var classes = (0, _classnames3.default)(theme[defaultClass], (_classnames = {}, _defineProperty(_classnames, theme[_constants.CSS_UPLOAD_ACTIVE], isDragActive), _defineProperty(_classnames, activeClass, activeClass && isDragActive), _classnames), className);

            return _react2.default.createElement(
                'div',
                { className: classes,
                    onDragLeave: this.onDragLeave.bind(this),
                    onDragOver: this.onDragOver.bind(this),
                    onDrop: this.onUpload.bind(this) },
                this.renderContent()
            );
        }
    }]);

    return Upload;
}(_react.Component);

Upload.propTypes = {
    activeClass: _react.PropTypes.string,
    children: _react.PropTypes.any,
    className: _react.PropTypes.string,
    defaultClass: _react.PropTypes.string,
    onUpload: _react.PropTypes.func,
    theme: _react.PropTypes.object,
    imageUrl: _react.PropTypes.string,
    requirements: _react.PropTypes.objectOf({
        width: _react.PropTypes.number,
        height: _react.PropTypes.number
    })
};
Upload.defaultProps = {
    defaultClass: _identifiers.UPLOAD
};
exports.Upload = Upload;
exports.default = Upload;