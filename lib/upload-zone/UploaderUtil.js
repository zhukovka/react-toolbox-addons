'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = require('./constants');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UploaderUtil = function () {
    function UploaderUtil(_ref) {
        var onSuccess = _ref.onSuccess,
            onBadTypeError = _ref.onBadTypeError,
            onProgress = _ref.onProgress,
            onRequirementsError = _ref.onRequirementsError,
            showProgress = _ref.showProgress,
            requirements = _ref.requirements,
            uploadType = _ref.uploadType;

        _classCallCheck(this, UploaderUtil);

        this.successCallback = onSuccess;
        this.badTypeCallback = onBadTypeError;
        this.progressCallback = onProgress;
        this.reqTypeCallback = onRequirementsError;
        this.showProgress = showProgress || false;
        this.requirements = requirements;
        this.uploadType = uploadType;
    }

    _createClass(UploaderUtil, [{
        key: 'checkType',
        value: function checkType(file) {
            if (file) {
                var uploadType = this.uploadType;

                if (uploadType) {
                    return _constants.TYPES_BY_UPLOAD[uploadType].indexOf(file.type) >= 0;
                } else {
                    return _constants.TYPES_BY_UPLOAD[_constants.UPLOAD_TYPE_DEFAULT].indexOf(file.type) >= 0;
                }
            }
            return false;
        }
    }, {
        key: 'updateProgress',
        value: function updateProgress(evt) {
            if (this.showProgress) {
                if (evt.lengthComputable) {
                    var percentLoaded = Math.round(evt.loaded / evt.total * 100);
                    if (percentLoaded < 100) {
                        this.progressCallback(percentLoaded);
                    }
                }
            }
        }
    }, {
        key: 'getUploadErrorMessage',
        value: function getUploadErrorMessage(msgType) {
            var requirements = this.requirements,
                uploadType = this.uploadType;
            var min = requirements.min,
                max = requirements.max;

            var types = _constants.TYPES_BY_UPLOAD[_constants.UPLOAD_TYPE_DEFAULT];
            var message = void 0;
            switch (msgType) {
                case _constants.ERROR_MIN_REQUIREMENTS:
                    message = 'Player logo should be not less than ' + min.width + 'x' + min.height + ' pixels.';
                    break;
                case _constants.ERROR_MAX_REQUIREMENTS:
                    message = 'Image should be not bigger ' + max.width + 'x' + max.height + ' pixels.';
                    break;
                case _constants.ERROR_BAD_TYPE:
                    if (uploadType) {
                        types = _constants.TYPES_BY_UPLOAD[uploadType];
                    }
                    message = 'Eligible formats: ' + types.map(function (str) {
                        return str.split('/')[1];
                    }).join(', ') + '.';
                    break;
                default:
                    break;
            }
            return message;
        }
    }, {
        key: 'errorHandler',
        value: function errorHandler(evt) {
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
        }
    }, {
        key: 'upload',
        value: function upload(e) {
            var _this = this;

            var file = void 0;
            e.preventDefault();
            if (e.dataTransfer) {
                file = e.dataTransfer.files[0];
            } else {
                file = e.target.files[0];
            }

            if (this.checkType(file)) {
                var self = this;
                var reader = new FileReader();
                reader.onerror = this.errorHandler;
                if (this.showProgress) {
                    reader.onloadstart = function () {
                        _this.progressCallback(1);
                    };
                    reader.onload = function () {
                        _this.progressCallback(100);
                    };
                    reader.onprogress = this.updateProgress(e);
                }
                reader.onloadend = function () {
                    var img = new Image();
                    img.src = window.URL.createObjectURL(file);
                    img.onload = function () {
                        window.URL.revokeObjectURL(img.src);
                        var w = img.naturalWidth;
                        var h = img.naturalHeight;
                        var requirements = self.requirements;

                        var check = true;
                        if (requirements) {
                            var min = requirements.min,
                                max = requirements.max;

                            var errorMessage = void 0;
                            if (min) {
                                check = w > min.width && h > min.height;
                                errorMessage = _constants.ERROR_MIN_REQUIREMENTS;
                            }
                            if (max) {
                                check = w < max.width && h < max.width;
                                errorMessage = _constants.ERROR_MAX_REQUIREMENTS;
                            }
                            if (!check) {
                                reader.abort();
                                _this.reqTypeCallback(errorMessage);
                            }
                        }
                        if (check) {
                            _this.successCallback(file, reader.result, e);
                        }
                    };
                };
                reader.readAsDataURL(file);
            } else {
                this.badTypeCallback(_constants.ERROR_BAD_TYPE);
            }
        }
    }]);

    return UploaderUtil;
}();

exports.default = UploaderUtil;