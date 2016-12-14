import React, {PropTypes} from 'react';
import classnames from 'classnames';
import Avatar from 'react-toolbox/lib/avatar';
import FontIcon from 'react-toolbox/lib/font_icon';
import {AVATAR_OVERLAY_ICON} from './constants';


const AvatarOverlay = ({theme, image, icon, className, ...other}) => {
    const {children} = other;
    return (
        <Avatar image={image} theme={theme} className={classnames({[theme.overlay]: icon}, className)} {...other} >
            <FontIcon className={theme[AVATAR_OVERLAY_ICON]} value={icon} />
            {children}
        </Avatar>
    );
};
AvatarOverlay.propTypes = {
    className: PropTypes.string,
    icon: PropTypes.any,
    image: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),
    onClick: PropTypes.func,
    theme: PropTypes.object
};
export default AvatarOverlay;
