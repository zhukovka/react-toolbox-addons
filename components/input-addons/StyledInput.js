import React, {PropTypes} from 'react';
import {findDOMNode} from 'react-dom';
import Input from 'react-toolbox/lib/input';
import {themr} from 'react-css-themr';
import classnames from 'classnames';
import {STYLED_INPUT} from '../identifiers.js';


class StyledInput extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    if (this.props.autofocus) {
      const ref = this.refs[this.props.label + '_ref'];
      if (ref) {
        const input = ref.getWrappedInstance();
        if (input) {
          findDOMNode(input).querySelector('input').focus();
        }
      }
    }
  }


  render () {
    const {theme, className, large, white, rightIcon, ...other} = this.props;
    const classes = classnames({
        [theme.large]: large,
        [theme.white]: white,
        [theme.rightIcon]: rightIcon
    }, theme.styled_input, className);
    return (
        <Input theme={theme} ref={this.props.label + '_ref'} className={classes} {...other} />
    );
  }
}

StyledInput.propTypes = {
    autofocus: PropTypes.bool,
    children: PropTypes.any,
    className: PropTypes.string,
    /**
     * sets text size to large
     * Boolean large
     */
    label: PropTypes.string,
    large: PropTypes.bool,
    /**
     * sets input icon position to the right
     * Boolean rightIcon
     */
    rightIcon: PropTypes.bool,
    theme: PropTypes.object,
    /**
     * sets text color to white
     * Boolean white
     */
    white: PropTypes.bool
};

const factory = () => StyledInput;
export default themr(STYLED_INPUT)(StyledInput);
export {factory as styledInputFactory};
export {StyledInput};
