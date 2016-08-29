import React, {PropTypes} from 'react';
import {FlexList} from '../../components/flexlist/index';
import {ListItem, ListItemContent, ListDivider} from 'react-toolbox/lib/list';
import {StreamItem} from './StreamItem';
import {Row, Col} from '../grid';
const StreamsList = ({streams}) => {

    return (
        <Row expanded>
            {streams.map((stream, index)=>(
                <Col key={index}>
                        <StreamItem stream={stream} key={index} index={index}/>
                </Col>
            ))}
        </Row>
    );
};

export {StreamsList};
