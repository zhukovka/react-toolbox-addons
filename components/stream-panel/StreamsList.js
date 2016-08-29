import React, {PropTypes} from 'react';
import {FlexList} from '../../components/flexlist/index';
import {ListItem, ListItemContent, ListDivider} from 'react-toolbox/lib/list';
import {StreamItem} from './StreamItem';

const StreamsList = ({streams}) => {

    return (
        <FlexList>
            {streams.map((stream, index)=>(
                <ListItem key={index}>
                    <ListItemContent>
                        <StreamItem stream={stream} key={index} index={index}/>
                    </ListItemContent>
                </ListItem>
            ))}
        </FlexList>
    );
};

export {StreamsList};
