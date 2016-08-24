import React, {Component, PropTypes} from 'react';
import classnames from 'classnames';
import {DROP_ZONE} from '../identifiers';
import {UploadButton} from '../upload-button';
import ProgressBar from 'react-toolbox/lib/progress_bar';
import {
    CSS_DROP_ZONE_ACTIVE
} from './constants';


class RTDropZone extends Component {
    constructor(props) {
        super(props);
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
        e.preventDefault();
        let file, reader;
        reader = new FileReader();
        if (e.dataTransfer) {
            file = e.dataTransfer.files[0];
        } else {
            file = e.target.files[0];
        }

        reader.onprogress = (event) => {
            if (event.lengthComputable) {
                let total = event.total;
                let loaded = event.loaded;
                this.setState({
                    progress: (loaded / total) * 100,
                })
            }
        };
        reader.onloadend = () => {
            this.setState({
                progress: 0,
                imageUrl: reader.result,
                isDragActive: false
            })
        };
        reader.readAsDataURL(file);
    }

    renderContent() {
        let {progress, imageUrl} = this.state;
        if (!progress) {
            return (
                <UploadButton icon="photo_camera"
                              imageUrl={imageUrl}
                              handlerOnChange={this.onChangeHandler.bind(this)}/>
            )
        } else {
            return (
                <div style={{padding: '10.8rem'}}>
                    <ProgressBar value={progress} mode='determinate'/>
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
