import React, {PropTypes} from 'react';
import {FlexList} from '../../components/flexlist/index';
import {StreamItem} from './StreamItem';

const StreamsList = ({streams}) => {

    return (
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
            {streams.map((stream, index)=>(
                <StreamItem stream={stream} key={index} index={index} />
            ))}
        </div>
    );
};

export {StreamsList};
