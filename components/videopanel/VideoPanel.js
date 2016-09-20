import React, {PropTypes} from 'react';
import {CardMedia} from 'react-toolbox/lib/card';
import {themr} from 'react-css-themr';
import {VIDEOPANEL} from '../identifiers';
import {CardTitleButtons} from '../card-addons';
import {ButtonProps} from '../rtcomponentsprops';

const factory = () => {
    const VideoPanel = ({buttons, children, theme, ...other})=> {
        return (
            <CardMedia theme={theme} {...other}>
                <CardTitleButtons buttons={buttons} className={theme.video_btns} theme={theme}/>
                {children}
            </CardMedia>
        );
    };

    VideoPanel.propTypes = {
        buttons: PropTypes.arrayOf(ButtonProps),
        children: PropTypes.any,
        theme: PropTypes.object
    };

    return VideoPanel;
};
const VideoPanel = factory();
export default themr(VIDEOPANEL)(VideoPanel);
export {factory as videoPanelFactory};
export {VideoPanel};
