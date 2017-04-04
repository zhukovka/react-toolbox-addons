import React, {Component, PropTypes} from 'react';
import classnames from 'classnames';
import {UPLOAD} from '../identifiers';
import {UploadButton} from '../upload-button';
import ProgressBar from 'react-toolbox/lib/progress_bar';
import {
    CSS_UPLOAD_ACTIVE
} from './constants';


class Upload extends Component {
    static propTypes = {
        activeClass: PropTypes.string,
        children: PropTypes.any,
        className: PropTypes.string,
        defaultClass: PropTypes.string,
        onUpload: PropTypes.func,
        theme: PropTypes.object,
        imageUrl: PropTypes.string
    };
    static defaultProps = {
        defaultClass: UPLOAD
    };
    constructor (props) {
        super(props);
        this.state = {
            isDragActive: false,
            imageUrl: props.imageUrl,
            progress: 0
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
        const types = ["jpg", "jpeg", "png"];
        const checkType = (file) => {
            var split = file.name.split(".");
            const type = split[split.length - 1].toLowerCase();
            return types.indexOf(type) != -1;
        };
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

        const reader = new FileReader();
        reader.onerror = errorHandler;
        reader.onloadstart = ()=>{
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
            this.setState({
                progress: 0,
                imageUrl: reader.result,
                isDragActive: false
            }, ()=>{
                this.props.onUpload(file, reader.result, e);
            });
        };

        if (e.dataTransfer) {
            file = e.dataTransfer.files[0];
        } else {
            file = e.target.files[0];
        }

        reader.readAsDataURL(file);
    }

    renderContent () {
        const {progress, imageUrl} = this.state;
        if (!progress) {
            return (
               <UploadButton icon="photo_camera"
                           imageUrl={imageUrl}
                           onUpload={this.onUpload.bind(this)}
               />
            );
        } else {
            return (
                <div style={{padding: '10.8rem'}}>
                    <ProgressBar value={this.state.progress} mode='determinate'/>
                </div>
            );
        }
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
