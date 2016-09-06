import React, {PropTypes} from 'react';
import {StreamCardMedia} from './StreamCardMedia';
import {EditableTitle} from '../editable-title';
import {
    CSS_SCROLL_ITEM,
    CSS_SCROLL_ITEM_ACTIVE
} from './constants';
import classnames from 'classnames';

const StreamCard = ({theme, active, streamName, onChange, ...other})=> {
    const activeClass = classnames({
        [theme[CSS_SCROLL_ITEM_ACTIVE]]: active && streamName
    });
    return (
        <div className={theme[CSS_SCROLL_ITEM]}>
            <div className={activeClass}>
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
    active: PropTypes.bool,
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    streamName: PropTypes.string,
    theme: PropTypes.object
};

export {StreamCard};
export default StreamCard;
