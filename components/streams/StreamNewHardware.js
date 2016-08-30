import React, {PropTypes} from 'react';
import {Card, CardMedia} from 'react-toolbox/lib/card';
import FontIcon from 'react-toolbox/lib/font_icon';
import {ICON_ADD, ADD_NEW_HARDWARE} from './constants';

const StreamNewHardware = (props) => {
    const _style = {
        flex: '0 0 auto',
        minWidth: '220px',
        height: 'auto',
        boxSizing: 'border-box',
        padding: '0 .9rem',
        background: 'transparent'
    };
    return (
        <div style={_style}>
            <Card onClick={props.onClick} style={{background: 'transparent', border: '1px solid #ddd'}}>
                <CardMedia aspectRatio={'wide'}>
                    <FontIcon value={ICON_ADD}/>
                </CardMedia>
            </Card>
            <p style={{padding: '1.7rem 0', textAlign: 'center'}}>{ADD_NEW_HARDWARE}</p>
        </div>
    );
};

StreamNewHardware.propTypes = {
    onClick: PropTypes.func
};

export {StreamNewHardware};
