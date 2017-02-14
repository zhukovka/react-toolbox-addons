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


  render () {
    const {theme, className, large, white, rightIcon, ...other} = this.props;
    const classes = classnames({
        [theme.large]: large,
        [theme.white]: white,
        [theme.rightIcon]: rightIcon
    }, theme.styled_input, className);
    return (
        <Input theme={theme} ref={(themed) => {
            if (this.props.autofocus) {
              const inputRef = themed.getWrappedInstance();
              findDOMNode(inputRef).querySelector('input').focus();
            }

          }} className={classes} {...other} />
    );
  }
}

StyledInput.propTypes = {
    autofocus: PropTypes.boolean,
    children: PropTypes.any,
    className: PropTypes.string,
    /**
     * sets text size to large
     * Boolean large
     */
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
