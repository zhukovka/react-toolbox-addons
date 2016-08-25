import React, {Component, PropTypes} from 'react';
import classnames from 'classnames';
import {DROP_ZONE} from '../identifiers';
import {UploadButton} from '../upload-button';
import {UploadArea} from './UploadArea';
import ProgressBar from 'react-toolbox/lib/progress_bar';
import {
    CSS_DROP_ZONE_ACTIVE
} from './constants';


class RTDropZone extends Component {
    constructor(props) {
        super(props);
        this._progress = 0;
        this.state = {
            isDragActive: false,
            imageUrl: '',
            progress: 0
        };
    }

    static propTypes = {
        children: PropTypes.any,
        className: PropTypes.string,
        theme: PropTypes.object,
        handlerOnChange: PropTypes.func,
        activeClass: PropTypes.string,
        defaultClass: PropTypes.string
    };
    static defaultProps = {
        defaultClass: DROP_ZONE
    };

    onDragLeave(e) {
        this.setState({
            isDragActive: false
        });
    }

    onDragOver(e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'copy';
        this.setState({
            isDragActive: true
        });
    }

    onChangeHandler(e) {
        let reader, file, errorHandler, updateProgress;
        e.preventDefault();
        errorHandler = (evt)=>{
            switch(evt.target.error.code){
                case evt.target.error.NOT_FOUND_ERR:
                    alert('File Not Found!');
                    break;
                case evt.target.error.NOT_READABLE_ERR:
                    alert('File is not readable');
                    break;
                case evt.target.error.ABORT_ERR:
                    break; // noop
                default:
                    alert('An error occurred reading this file.');
            }
        };

        updateProgress = (evt) => {
            if (evt.lengthComputable) {
                let percentLoaded = Math.round((evt.loaded / evt.total) * 100);
                if (percentLoaded < 100) {
                    this.setState({
                        progress : percentLoaded
                    })
                }
            }
        };

        reader = new FileReader();
        reader.onerror = errorHandler;
        reader.onloadstart = ()=>{
            this.setState({
                progress : 1
            })
        };
        reader.onload = () => {
            this.setState({
                progress : 100
            })
        };
        reader.onprogress = updateProgress;
        reader.onloadend = (evt) => {
            this.setState({
                progress : 0,
                imageUrl: reader.result,
                isDragActive: false
            },()=>{
                this.props.handlerOnChange(file, reader.result, e);
            })
        };

        if (e.dataTransfer) {
            file = e.dataTransfer.files[0];
        } else {
            file = e.target.files[0];
        }

        reader.readAsDataURL(file);
    }

    renderContent() {
        let {progress, imageUrl} = this.state;
        if (!progress) {
            return (
               <UploadButton icon="photo_camera"
                           imageUrl={imageUrl}
                           handlerOnChange={this.onChangeHandler.bind(this)}
               />
            )
        } else {
            return (
                <div style={{padding: '10.8rem'}}>
                    <ProgressBar value={this.state.progress} mode='determinate'/>
                </div>
            );
        }
    }

    render() {
        let {theme, className, activeClass, defaultClass} = this.props;
        let {isDragActive} = this.state;
        let classes = classnames(theme[defaultClass], {
            [theme[CSS_DROP_ZONE_ACTIVE]]: isDragActive,
            [activeClass]: activeClass && isDragActive
        }, className);

        return (
            <div className={classes}
                 onDragLeave={this.onDragLeave.bind(this)}
                 onDragOver={this.onDragOver.bind(this)}
                 onDrop={this.onChangeHandler.bind(this)}>
                {this.renderContent()}
            </div>
        )
    }
}
export {RTDropZone};
