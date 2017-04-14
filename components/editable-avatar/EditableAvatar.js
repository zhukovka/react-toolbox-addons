import React, {PropTypes, Component} from 'react';
import ReactDOM from 'react-dom';
import Avatar from 'react-toolbox/lib/avatar';
import UploaderUtil from "../upload-zone/UploaderUtil";
import {
    ICON_PHOTO_CAMERA
} from './constants';
import AvatarOverlay from '../avatar-overlay';

class EditableAvatar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            progress: 0,
            error: null
        };

        this._callbacks = {
            onSuccess: (file, result, e) => {
                props.onUpload(file, result, e);
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
                    error: errString,
                });
            },
            showProgress: false,
            requirements: props.requirments
        };

        this._uploader = new UploaderUtil({...this._callbacks});
    }

    static defaultProps = {
        requirements: {}
    };

    handleOnChange (e) {
        this.onUpload(e);
        this.refs.fileInput.value = '';
    }

    onUpload (e) {
        this._uploader.upload(e);
        // let file;
        // e.preventDefault();
        // const errorHandler = (evt)=> {
        //     switch (evt.target.error.code) {
        //         case evt.target.error.NOT_FOUND_ERR:
        //             console.log('File Not Found!');
        //             break;
        //         case evt.target.error.NOT_READABLE_ERR:
        //             console.log('File is not readable');
        //             break;
        //         case evt.target.error.ABORT_ERR:
        //             break; //
        //         default:
        //             console.log('An error occurred reading this file.');
        //     }
        // };
        // const reader = new FileReader();
        // reader.onerror = errorHandler;
        // reader.onloadend = () => {
        //     this.props.onUpload(file, reader.result, e);
        // };
        //
        // if (e.dataTransfer) {
        //     file = e.dataTransfer.files[0];
        // } else {
        //     file = e.target.files[0];
        // }
        // reader.readAsDataURL(file);
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
                    {this.state.error != null ? this._uploader.getUploadErrorMessage(this.state.error) : (
                        <span>{this._uploader.getUploadErrorMessage(this.state.error)}</span>
                    )}
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
        width: PropTypes.number,
        height: PropTypes.number
    })
};

export {EditableAvatar};
export default EditableAvatar;

