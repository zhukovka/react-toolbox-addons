import React, {PropTypes, Component} from 'react';
import ReactDOM from 'react-dom';
import Avatar from 'react-toolbox/lib/avatar';
import FontIcon from 'react-toolbox/lib/font_icon';
import {
    ICON_PHOTO_CAMERA,
    EDITABLE_AVATAR_PHOTO_CAMERA
} from './constants';

class EditableAvatar extends Component {
    handleOnChange (e) {
        this.onUpload(e);
        this.refs.fileInput.value = '';
    }
    onUpload (e) {
        let file;
        e.preventDefault();
        const errorHandler = (evt)=>{
            switch (evt.target.error.code){
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
        const reader = new FileReader();
        reader.onerror = errorHandler;
        reader.onloadend = () => {
            this.props.onUpload(file, reader.result, e);
        };

        if (e.dataTransfer) {
            file = e.dataTransfer.files[0];
        } else {
            file = e.target.files[0];
        }
        reader.readAsDataURL(file);
    }

    renderAvatar () {
        const {editable, theme, image, className} = this.props;
        if (editable) {
            return (
                <Avatar image={image} theme={theme} className={className}>
                    <FontIcon value={ICON_PHOTO_CAMERA}
                              className={theme[EDITABLE_AVATAR_PHOTO_CAMERA]}
                              onClick={()=> {
                                  ReactDOM.findDOMNode(this.refs.fileInput).click();
                              }}
                    />
                    <input ref='fileInput'
                           type='file'
                           onChange={this.handleOnChange.bind(this)}
                           style={{display: 'none'}}/>
                </Avatar>
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
    image: PropTypes.string,
    onUpload: PropTypes.func,
    theme: PropTypes.object
};

export {EditableAvatar};
export default EditableAvatar;

