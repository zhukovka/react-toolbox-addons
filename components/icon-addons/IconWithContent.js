import React, {PropTypes} from 'react';
import {FontIcon} from 'react-toolbox/lib/font_icon';

const IconWithContent = ({icon, text, iconColor, size, theme, active, onClick, style}) => {
    const fontSize = parseInt(size / 10);
    const PX = 'px';
    return (
        <div className={theme.wrapper} style={style}>
            {active ? (
                <FontIcon value={icon} className={theme.activeIcon} style={{
                fontSize: size + 4 + PX,
                color: 'rgba(255,0,0,.3)',
                marginLeft: -2 + PX,
                marginTop: -2 + PX
                }}/>
            ) : null}
            <FontIcon value={icon} className={theme.icon} style={{fontSize: size + PX, color: iconColor}} onClick={onClick}/>
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
    active: PropTypes.bool,
    icon: PropTypes.string,
    iconColor: PropTypes.string,
    size: PropTypes.number,
    text: PropTypes.string,
    theme: PropTypes.object,
    onClick: PropTypes.func,
    style: PropTypes.object
};

export default IconWithContent;
