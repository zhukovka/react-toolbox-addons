import React, {PropTypes, Component} from 'react';
import ReactDOM from 'react-dom';
import FontIcon from 'react-toolbox/lib/font_icon';


class UploadArea extends Component {
    handleOnClick(e){
        ReactDOM.findDOMNode(this.refs.fileInput).click();
    }
    handleOnChange(e){
        this.props.handlerOnChange(e);
        this.refs.fileInput.value = '';
    }
    renderIcon(){
        let { icon } = this.props;
        if(icon){
            return (<FontIcon value={icon}/>)
        }
    }

    render(){
        let { theme, imageUrl } = this.props;
        let styleForBackgroundImage = {
            backgroundImage : `url(${imageUrl})`,
            backgroundSize : 'cover'
        };

        return (
            <div className={theme['uploadArea']}>
                <div className={theme['uploadArea--content']}
                     ref='imageWrapper'
                     style={styleForBackgroundImage}
                     onClick={this.handleOnClick.bind(this)}>
                    {this.renderIcon()}
                </div>
                <input type='file'
                       ref='fileInput'
                       style={{display: 'none'}}
                       onChange={this.handleOnChange.bind(this)}
                />
            </div>
        )
    }
}

export {UploadArea};