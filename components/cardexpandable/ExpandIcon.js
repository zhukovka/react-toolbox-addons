import React, {PropTypes} from 'react';
import FontIcon from 'react-toolbox/lib/font_icon';
import theme from './theme.scss';

const ARROW_UP = 'keyboard_arrow_up';
const ARROW_DOWN = 'keyboard_arrow_down';

const ExpandIcon = ({isOpen}) => {
    return (
        <FontIcon className={theme.iconWrapper}>
            <span className='material-icons'>{isOpen ? ARROW_DOWN : ARROW_UP}</span>
            <span className='material-icons'>{isOpen ? ARROW_UP : ARROW_DOWN}</span>
        </FontIcon>
    );
};

ExpandIcon.propTypes = {
  isOpen: PropTypes.bool
};

export default ExpandIcon;
