import {
    ERROR_BAD_TYPE,
    TYPES_BY_UPLOAD,
    UPLOAD_TYPE_DEFAULT,
    ERROR_MAX_REQUIREMENTS,
    ERROR_MIN_REQUIREMENTS
} from './constants';


export default class UploaderUtil {
    constructor ({onSuccess, onBadTypeError, onProgress, onRequirementsError, showProgress, requirements, uploadType}) {
        this.successCallback = onSuccess;
        this.badTypeCallback = onBadTypeError;
        this.progressCallback = onProgress;
        this.reqTypeCallback = onRequirementsError;
        this.showProgress = showProgress || false;
        this.requirements = requirements;
        this.uploadType = uploadType;

    }

    checkType (file) {
        if (file) {
            const {uploadType} = this;
            if (uploadType) {
                return TYPES_BY_UPLOAD[uploadType].indexOf(file.type) >= 0;
            } else {
                return TYPES_BY_UPLOAD[UPLOAD_TYPE_DEFAULT].indexOf(file.type) >= 0;
            }
        }
        return false;
    }

    updateProgress (evt) {
        if (this.showProgress) {
            if (evt.lengthComputable) {
                const percentLoaded = Math.round((evt.loaded / evt.total) * 100);
                if (percentLoaded < 100) {
                    this.progressCallback(percentLoaded);
                }
            }
        }
    }

    getUploadErrorMessage (msgType) {
        const {requirements, uploadType} = this;
        const {min, max} = requirements;
        let types = TYPES_BY_UPLOAD[UPLOAD_TYPE_DEFAULT];
        let message;
        if (uploadType) {
            switch (msgType) {
                case ERROR_MIN_REQUIREMENTS :
                    message = 'Player logo should be not less than ' + min.width + 'x' + min.height + ' pixels.';
                    break;
                case ERROR_MAX_REQUIREMENTS :
                    message = 'Image should be not bigger ' + max.width + 'x' + max.height + ' pixels.';
                    break;
                case ERROR_BAD_TYPE :
                    if (uploadType) {
                        types = TYPES_BY_UPLOAD[uploadType];
                    }
                    message = 'Eligible formats: ' + types
                            .map(str => str.split('/')[1])
                            .join(', ') + '.';
                    break;
                default :
                    break;
            }
        }

        return message;
    }

    errorHandler (evt) {
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

    upload (e) {
        let file;
        e.preventDefault();
        if (e.dataTransfer) {
            file = e.dataTransfer.files[0];
        } else {
            file = e.target.files[0];
        }

        if (this.checkType(file)) {
            const self = this;
            const reader = new FileReader();
            reader.onerror = this.errorHandler;
            if (this.showProgress) {
                reader.onloadstart = ()=> {
                    this.progressCallback(1);
                };
                reader.onload = () => {
                    this.progressCallback(100);
                };
                reader.onprogress = this.updateProgress(e);
            }
            reader.onloadend = () => {
                const img = new Image();
                img.src = window.URL.createObjectURL(file);
                img.onload = () => {
                    window.URL.revokeObjectURL(img.src);
                    const w = img.naturalWidth;
                    const h = img.naturalHeight;
                    const {requirements} = self;
                    let check = true;
                    if (requirements) {
                        const {min, max} = requirements;
                        let errorMessage;
                        if (min) {
                            check = (w > min.width && h > min.height);
                            errorMessage = ERROR_MIN_REQUIREMENTS;
                        }
                        if (max) {
                            check = (w < max.width && h < max.width);
                            errorMessage = ERROR_MAX_REQUIREMENTS;
                        }
                        if (!check) {
                            reader.abort();
                            this.reqTypeCallback(errorMessage);
                        }
                    }
                    if (check) {
                        this.successCallback(file, reader.result, e);
                    }
                };
            };
            reader.readAsDataURL(file);
        } else {
            this.badTypeCallback(ERROR_BAD_TYPE);
        }
    }
}
