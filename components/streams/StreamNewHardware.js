import React, {PropTypes} from 'react';
import {StreamCardTitle} from './StreamCardTitle';
import {Card, CardMedia} from 'react-toolbox/lib/card';
import FontIcon from 'react-toolbox/lib/font_icon';

const StreamNewHardware = (props) => {
    const _style = {
        flex: '0 0 auto',
        minWidth: '150px',
        height: 'auto',
        boxSizing: 'border-box',
        padding: '0 .9rem'
    };
    return (
        <div style={_style}>
            <Card onClick={props.onClick}>
                <CardMedia color="transparent" aspectRatio={'wide'}>
                    <FontIcon value={'add'}/>
                </CardMedia>
            </Card>
            <StreamCardTitle value={'Add Hardware'}/>
        </div>
    );
};

StreamNewHardware.propTypes = {
    onClick: PropTypes.func
};

export {StreamNewHardware};
