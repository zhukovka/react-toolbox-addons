import React from 'react';

const StreamNewItem = ({onClick}) => {
    return (
        <div onClick={(e)=>onClick(e)} style={{border: '2px solid #fff', padding: '4rem 0'}}>
            <h5>new stream</h5>
        </div>
    );
};

export {StreamNewItem};


