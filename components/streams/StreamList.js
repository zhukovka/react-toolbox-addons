import React, {PropTypes} from 'react';
import {StreamCard} from './StreamCard';

const StreamList = (props) => {
    const {streams} = props;
    return streams.map((stream, index)=>(
        <StreamCard key={index} {...stream} />
    ));
};

StreamList.propTypes = {
    streams: PropTypes.array
};

export {StreamList};
