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
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    defaultClass: PropTypes.string,
    onUpload: PropTypes.func.isRequired,
    icon: PropTypes.string,
    imageUrl: PropTypes.string,
    theme: PropTypes.object
  };
  static defaultProps = {
    defaultClass: CSS_UPLOAD_BUTTON_SECTION
  };
  constructor (props){
    super(props);
    this.state = {
      imageUrl: props.imageUrl || '',
      buttonHover: false
    };
  }
  handleOnClick (){
    ReactDOM.findDOMNode(this.refs.fileInput).click();
  }
  handleOnChange (e){
      this.props.onUpload(e);
      this.refs.fileInput.value = '';
  }

  handleMouseOver (bool){
    this.setState({
      buttonHover: bool
    });
  }
  renderIcon (icon){
    const { theme, imageUrl } = this.props;
    const { buttonHover } = this.state;
    if (icon && !imageUrl && !buttonHover){
      return (
          <FontIcon className={theme[CSS_UPLOAD_BUTTON_ICON]}>{icon}</FontIcon>
      );
    } else if (icon && buttonHover){
      return (
          <FontIcon className={theme[CSS_UPLOAD_BUTTON_ICON_WHITE]}>{icon}</FontIcon>
      );
    }

  }
  render () {
    const { theme, icon, children, defaultClass, className, imageUrl } = this.props;
    const { buttonHover } = this.state;
    let classes = classnames(theme[defaultClass], className);
    let buttonClasses = classnames({
      [theme[CSS_UPLOAD_BUTTON_HOVER]]: buttonHover,
      [theme[CSS_UPLOAD_BUTTON_BUTTON]]: !buttonHover
    });
    return (
    <div className={classes}>
      <Button className={buttonClasses}
              onClick={this.handleOnClick.bind(this)}
              onMouseEnter={this.handleMouseOver.bind(this, true)}
              onMouseLeave={this.handleMouseOver.bind(this, false)}
              style={{
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: 'cover'
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
    );
  }
}

export {RTUploadButton};
