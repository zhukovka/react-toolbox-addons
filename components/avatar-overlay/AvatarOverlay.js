import React, {PropTypes} from 'react';
import Avatar from 'react-toolbox/lib/avatar';
import FontIcon from 'react-toolbox/lib/font_icon';
import {AVATAR_OVERLAY_ICON} from './constants';


const AvatarOverlay = ({theme, image, icon, ...other}) => {
    const {children} = other;
    return (
        <Avatar image={image} theme={theme} {...other}>
            <FontIcon value={icon}
                      className={theme[AVATAR_OVERLAY_ICON]}
            />
            {children}
        </Avatar>
    );
};
AvatarOverlay.propTypes = {
    icon: PropTypes.string,
    image: PropTypes.string,
    onClick: PropTypes.func,
    theme: PropTypes.object
};
export {AvatarOverlay};
