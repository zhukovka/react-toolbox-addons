import React, {Component, PropTypes} from 'react';
import classnames from 'classnames';
import {UPLOAD} from '../identifiers';
import {UploadButton} from '../upload-button';
import ProgressBar from 'react-toolbox/lib/progress_bar';
import {
    CSS_UPLOAD_ACTIVE,
    TYPES_BY_UPLOAD,
    UPLOAD_TYPE_AVATAR,
    UPLOAD_TYPE_OVERLAY,
    UPLOAD_TYPE_DEFAULT,
    ERROR_BAD_TYPE,
    ERROR_MIN_REQUIREMENTS,
    ERROR_MAX_REQUIREMENTS
} from './constants';

class Upload extends Component {
    static propTypes = {
        activeClass: PropTypes.string,
        children: PropTypes.any,
        className: PropTypes.string,
        defaultClass: PropTypes.string,
        onUpload: PropTypes.func,
        theme: PropTypes.object,
        imageUrl: PropTypes.string,
        requirements: PropTypes.objectOf({
            min: PropTypes.objectOf({
                width: PropTypes.number.isRequired,
                height: PropTypes.number.isRequired
            }),
            max: PropTypes.objectOf({
                width: PropTypes.number.isRequired,
                height: PropTypes.number.isRequired
            })
        }),
        uploadType: PropTypes.oneOf({
            [UPLOAD_TYPE_AVATAR]: PropTypes.string,
            [UPLOAD_TYPE_OVERLAY]: PropTypes.string
        })
    };
    static defaultProps = {
        defaultClass: UPLOAD,
        requirements: {}
    };

    constructor (props) {
        super(props);
        this.state = {
            isDragActive: false,
            imageUrl: props.imageUrl,
            progress: 0,
            error: null
        };
    }

    onDragLeave () {
        this.setState({
            isDragActive: false
        });
    }

    onDragOver (e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'copy';
        this.setState({
            isDragActive: true
        });
    }

    onUpload (e) {
        const checkType = (file) => {
            if (file) {
                const {uploadType} = this.props;
                if (uploadType) {
                    var typesbyupload = TYPES_BY_UPLOAD[uploadType];
                    return typesbyupload.indexOf(file.type) >= 0;
                } else {
                    return TYPES_BY_UPLOAD[UPLOAD_TYPE_DEFAULT].indexOf(file.type) >= 0;
                }
            }
            return false;
        };

        let file;
        e.preventDefault();
        const errorHandler = (evt)=> {
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

        const updateProgress = (evt) => {
            if (evt.lengthComputable) {
                const percentLoaded = Math.round((evt.loaded / evt.total) * 100);
                if (percentLoaded < 100) {
                    this.setState({
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
            const self = this;
            const reader = new FileReader();
            reader.onerror = errorHandler;
            reader.onloadstart = ()=> {
                this.setState({
                    progress: 1
                });
            };
            reader.onload = () => {
                this.setState({
                    progress: 100
                });
            };
            reader.onprogress = updateProgress;
            reader.onloadend = () => {
                const img = new Image();
                img.src = window.URL.createObjectURL(file);
                img.onload = () => {
                    window.URL.revokeObjectURL(img.src);
                    const w = img.naturalWidth;
                    const h = img.naturalHeight;
                    const {requirements} = self.props;
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
                            self.setState({
                                error: errorMessage,
                                progress: 0
                            });
                        }
                    }
                    if (check) {
                        self.setState({
                            progress: 0,
                            imageUrl: reader.result,
                            isDragActive: false,
                            error: null
                        }, ()=> {
                            self.props.onUpload(file, reader.result, e);
                        });
                    }
                };
            };
            reader.readAsDataURL(file);
        } else {
            this.setState({
                error: ERROR_BAD_TYPE
            });
        }
    }

    getUploadErrorMessage (msgType) {
        const {requirements, uploadType} = this.props;
        const {min, max} = requirements;
        let message;
        switch (msgType) {
            case ERROR_MIN_REQUIREMENTS :
                message = 'Player logo should be not less than ' + min.width +"x" + min.height + ' pixels.';
                break;
            case ERROR_MAX_REQUIREMENTS :
                message = 'Image should be not bigger ' + max.width + 'x' + max.height + ' pixels.';
                break;
            case ERROR_BAD_TYPE :
                let types = TYPES_BY_UPLOAD[UPLOAD_TYPE_DEFAULT];
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
        return message;
    }

    renderContent () {
        const {progress, imageUrl, error} = this.state;
        const {theme} = this.props;
        return (
            <div className={theme.uploadWrapper}>
                <UploadButton icon='photo_camera'
                              imageUrl={imageUrl}
                              onUpload={this.onUpload.bind(this)}
                />
                {progress && !error ? (
                    <div style={{padding: '10.8rem'}}>
                        <ProgressBar value={this.state.progress} mode='determinate'/>
                    </div>
                ) : !progress && error ? (
                    <span className={theme.errorMessage}>
                        {this.getUploadErrorMessage(error)}
                    </span>
                ) : null}
            </div>
        );
    }

    render () {
        const {theme, className, activeClass, defaultClass} = this.props;
        const {isDragActive} = this.state;
        let classes = classnames(theme[defaultClass], {
            [theme[CSS_UPLOAD_ACTIVE]]: isDragActive,
            [activeClass]: activeClass && isDragActive
        }, className);

        return (
            <div className={classes}
                 onDragLeave={this.onDragLeave.bind(this)}
                 onDragOver={this.onDragOver.bind(this)}
                 onDrop={this.onUpload.bind(this)}>
                {this.renderContent()}
            </div>
        );
    }
}
export {Upload};
export default Upload;
