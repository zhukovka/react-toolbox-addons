import React, {Component, PropTypes} from 'react';
import classnames from 'classnames';
import {UPLOAD} from '../identifiers';
import {UploadButton} from '../upload-button';
import ProgressBar from 'react-toolbox/lib/progress_bar';
import UploaderUtil from './UploaderUtil';
import {
    CSS_UPLOAD_ACTIVE,
    UPLOAD_TYPE_AVATAR,
    UPLOAD_TYPE_OVERLAY
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

        this._callbacks = {
          onSuccess: (file, result, e) => {
              this.setState({
                  progress: 0,
                  imageUrl: result,
                  isDragActive: false,
                  error: null
              }, ()=> {
                  this.props.onUpload(file, result, e);
              });
          },
          onProgress: (progress) => {
              this.setState({progress});
          },
          onBadTypeError: (errString) => {
              this.setState({
                  error: errString
              });
          },
          onRequirementsError: (errString) => {
              this.setState({
                  error: errString,
                  progress: 0
              });
          },
          showProgress: true,
          requirements: props.requirements,
          uploadType: props.uploadType
        };

        this._uploader = new UploaderUtil({...this._callbacks});
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
        this._uploader.upload(e);
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
                        {this._uploader.getUploadErrorMessage(error)}
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
