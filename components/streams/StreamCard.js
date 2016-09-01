import React, {PropTypes} from 'react';
import {StreamCardMedia} from './StreamCardMedia';
import {EditableTitle} from '../editable-title';
import {CSS_SCROLL_ITEM} from './constants';


const StreamCard = ({theme, streamName, onChange, ...other})=> {
    return (
        <div className={theme[CSS_SCROLL_ITEM]}>
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
