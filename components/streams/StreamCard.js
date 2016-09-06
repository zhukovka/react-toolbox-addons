import React, {PropTypes} from 'react';
import {StreamCardMedia} from './StreamCardMedia';
import {EditableTitle} from '../editable-title';
import {CSS_SCROLL_ITEM} from './constants';


const StreamCard = ({theme, streamName, onChange, ...other})=> {
    return (
        <div style={{maxWidth: '140px', minWidth: '100px', margin: '0 auto'}}>
            <div>
                <StreamCardMedia {...other}/>
            </div>
            <div>
                <EditableTitle editable={false}
                               defaultValue={streamName}
                               onBlur={(e)=>onChange(e)}
                />
            </div>
        </div>
    );
};

StreamCard.propTypes = {
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    streamName: PropTypes.string,
    theme: PropTypes.object
};

export {StreamCard};
export default StreamCard;
