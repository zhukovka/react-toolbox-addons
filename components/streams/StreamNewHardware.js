import React, {PropTypes} from 'react';
import {Card, CardMedia} from 'react-toolbox/lib/card';
import FontIcon from 'react-toolbox/lib/font_icon';
import {ICON_ADD, ADD_NEW_HARDWARE, CSS_SCROLL_ITEM} from './constants';


const StreamNewHardware = (props) => {
    const {theme, onClick} = props;
    return (
        <div className={theme[CSS_SCROLL_ITEM]}>
            <Card onClick={onClick} theme={theme} className={theme['card--transparent']}>
                <CardMedia aspectRatio={'wide'} theme={theme}>
                    <FontIcon value={ICON_ADD}/>
                </CardMedia>
            </Card>
            <p className={theme['streamPanel--newHardware']}>{ADD_NEW_HARDWARE}</p>
        </div>
    );
};

StreamNewHardware.propTypes = {
    onClick: PropTypes.func,
    theme: PropTypes.object
};

export default StreamNewHardware;
