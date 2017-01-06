import React, {PropTypes} from 'react';
import {FontIcon} from 'react-toolbox/lib/font_icon';

const IconWithContent = ({icon, text, iconColor, size, theme}) => {
    const fontSize = parseInt(size / 10);
    const PX = 'px';
    return (
        <div className={theme.wrapper}>
            <FontIcon value={icon} className={theme.icon} style={{fontSize: size + PX, color: iconColor}}/>
            <span className={theme.content} style={{
                top: size / 2 + PX,
                left: size / 4 + PX,
                fontSize: fontSize + PX,
                marginLeft: -fontSize + PX,
                marginTop: -(fontSize / 2) + PX
            }}>{text}</span>
        </div>
    );

};

IconWithContent.propTypes = {
    icon: PropTypes.string,
    iconColor: PropTypes.string,
    size: PropTypes.number,
    text: PropTypes.string,
    theme: PropTypes.object
};

export default IconWithContent;
