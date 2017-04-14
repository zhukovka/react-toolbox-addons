import {
    FILE_TYPE_JPEG,
    FILE_TYPE_JPG,
    FILE_TYPE_PNG,
    ERROR_BAD_TYPE,
    ERROR_REQUIREMENTS
} from './constants';


export default class UploaderUtil {
    constructor({onSuccess, onBadTypeError, onProgress, onRequirementsError, showProgress, requirements}) {
        this.successCallback = onSuccess;
        this.badTypeCallback = onBadTypeError;
        this.progressCallback = onProgress;
        this.reqTypeCallback = onRequirementsError;
        this.showProgress = showProgress || false;
        this.requirments = requirements;

    }

    checkType(file) {
        if (file) {
            return [FILE_TYPE_JPG, FILE_TYPE_JPEG, FILE_TYPE_PNG].indexOf(file.type) >= 0;
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
        const {requirements} = this;
        let message;
        switch (msgType) {
            case ERROR_REQUIREMENTS :
                message = 'Image should have width ' + requirements.width + 'and height ' + requirements.height + '.';
                break;
            case ERROR_BAD_TYPE :
                message = 'Image should have extension one of ' + [FILE_TYPE_JPEG, FILE_TYPE_JPG, FILE_TYPE_PNG]
                        .map(str => str.split('/')[1])
                        .join(', ') + '.';
                break;
            default :
                break;
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

    upload(e) {
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
                    if (!!requirements && (w > requirements.width && h > requirements.height)) {
                        reader.abort();
                        this.reqTypeCallback(ERROR_REQUIREMENTS);
                    } else {
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