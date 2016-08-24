import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import Button from 'react-toolbox/lib/button';
import FontIcon from 'react-toolbox/lib/font_icon';

import {
  CSS_UPLOAD_BUTTON_BUTTON,
  CSS_UPLOAD_BUTTON_ICON,
  CSS_UPLOAD_BUTTON_SECTION,
  CSS_UPLOAD_BUTTON_HOVER,
  CSS_UPLOAD_BUTTON_ICON_WHITE
} from './constants';

class RTUploadButton extends Component {
  constructor(props){
    super(props);
    this.state = {
      imageUrl : props.imageUrl || '',
      buttonHover : false
    }
  }
  static propTypes = {
    children : PropTypes.any,
    handlerOnChange : PropTypes.func.isRequired,
    className : PropTypes.string,
    defaultClass : PropTypes.string
  };
  static defaultProps = {
    defaultClass : CSS_UPLOAD_BUTTON_SECTION
  };
  handleOnClick(e){
    ReactDOM.findDOMNode(this.refs.fileInput).click();
  }

  handleOnChange(e){
    let { preview } = this.props;
    if( preview ){
      this.showPreview(e);
    }
    else {
      this.props.handlerOnChange(e);
      this.refs.fileInput.value = "";
    }
  }

  handleMouseOver(bool){
    this.setState({
      buttonHover : bool
    })
  }

  showPreview(e){
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.onloadend = () => {
      this.setState({
        imageUrl : reader.result
      },()=>{
        this.props.handlerOnChange(e);
        this.refs.fileInput.value = "";
      })
    };
    reader.readAsDataURL(file);
  }
  renderIcon(icon){
    let { theme } = this.props;
    let { imageUrl, buttonHover } = this.state;
    if(icon && !imageUrl && !buttonHover){
      return (
          <FontIcon className={theme[CSS_UPLOAD_BUTTON_ICON]}>{icon}</FontIcon>
      )
    }
    else if (icon && buttonHover){
      return (
          <FontIcon className={theme[CSS_UPLOAD_BUTTON_ICON_WHITE]}>{icon}</FontIcon>
      )
    }
  }
  render() {
    let { theme, icon, children, defaultClass, className } = this.props;
    let { buttonHover, imageUrl } = this.state;
    let classes = classnames(theme[defaultClass], className);
    let buttonClasses = classnames({
      [theme[CSS_UPLOAD_BUTTON_HOVER]] : buttonHover,
      [theme[CSS_UPLOAD_BUTTON_BUTTON]] : !buttonHover
    });
    return (
    <div className={classes}>
      <Button className={buttonClasses}
              onClick={this.handleOnClick.bind(this)}
              onMouseEnter={this.handleMouseOver.bind(this, true)}
              onMouseLeave={this.handleMouseOver.bind(this, false)}
              style={{
                backgroundImage : `url(${imageUrl})`,
                backgroundSize : 'cover'
              }}
             >
        {this.renderIcon(icon)}
        {children}
      </Button>
      <input ref='fileInput'
             type='file'
             onChange={this.handleOnChange.bind(this)}
             style={{display: 'none'}}/>
    </div>
    )
  }
}

export {RTUploadButton};
