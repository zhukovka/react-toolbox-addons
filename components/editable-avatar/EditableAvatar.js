import React, {PropTypes, Component} from 'react';
import ReactDOM from 'react-dom';
import Avatar from 'react-toolbox/lib/avatar';
import UploaderUtil from '../upload-zone/UploaderUtil';
import {
    UPLOAD_TYPE_AVATAR,
    UPLOAD_TYPE_OVERLAY
} from '../upload-zone/constants';
import {
    ICON_PHOTO_CAMERA
} from './constants';
import AvatarOverlay from '../avatar-overlay';

class EditableAvatar extends Component {
    constructor (props) {
        super(props);
        this.state = {
            progress: 0,
            error: null
        };

        this._callbacks = {
            onSuccess: (file, result, e) => {
                this.setState({
                    error: null
                }, () => {
                    props.onUpload(file, result, e);
                });
            },
            onProgress: (progress) => {

            },
            onBadTypeError: (errString) => {
                this.setState({
                    error: errString
                });
            },
            onRequirementsError: (errString) => {
                this.setState({
                    error: errString
                });
            },
            showProgress: false,
            requirements: props.requirements,
            uploadType: props.uploadType
        };

        this._uploader = new UploaderUtil({...this._callbacks});
    }

    static defaultProps = {
        requirements: {
        },
        uploadType: UPLOAD_TYPE_AVATAR
    };

    handleOnChange (e) {
        this.onUpload(e);
        this.refs.fileInput.value = '';
    }

    onUpload (e) {
        this._uploader.upload(e);
    }

    renderAvatar () {
        const {editable, theme, image, className} = this.props;
        if (editable) {
            return (
                <span>
                <AvatarOverlay image={image} icon={ICON_PHOTO_CAMERA} onClick={()=> {
                    ReactDOM.findDOMNode(this.refs.fileInput).click();
                }}>
                    <input ref='fileInput'
                           type='file'
                           onChange={this.handleOnChange.bind(this)}
                           style={{display: 'none'}}/>
                </AvatarOverlay>
                    {this.state.error ? (
                        <span className={theme.errorMessage}>{this._uploader.getUploadErrorMessage(this.state.error)}</span>
                    ) : null}
                    </span>
            );
        } else {
            return (
                <Avatar image={image} theme={theme} className={className}/>
            );
        }
    }

    render () {
        return this.renderAvatar();
    }
}

EditableAvatar.propTypes = {
    className: PropTypes.string,
    editable: PropTypes.bool,
    image: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),
    onUpload: PropTypes.func,
    theme: PropTypes.object,
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

export {EditableAvatar};
export default EditableAvatar;

