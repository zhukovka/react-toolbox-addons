import React, {PropTypes, Component} from 'react';
import {Row, Col} from '../../components/grid';
import Button from 'react-toolbox/lib/button';
import {CardActionsSpaced} from '../../components/cardactionsspaced';
import {CardTitle} from 'react-toolbox/lib/card';
import {StreamsList} from './StreamsList';
import {StreamItem} from './StreamItem';
import {StreamNewItem} from './StreamNewItem';
import {BottomSheet} from '../../components/bottomsheet';

import {FlexList} from '../../components/flexlist/index';
import {ListItem, ListItemContent, ListDivider} from 'react-toolbox/lib/list';
import {ReactBox} from './StreamBox';

class StreamsPanel extends Component {
    constructor (props) {
        super(props);
        this.state = {
            open: false
        };
    }

    renderHeader (user) {
        const {activeStream, streams} = this.props;
        return (
            <Row expanded align={'middle'}>
                <Col small={2}>
                    {streams[activeStream].streamName || 'Active stream'}
                </Col>
                <Col>
                    <CardActionsSpaced>
                        <CardTitle {...user} style={{padding: '0'}}/>
                        <div>
                            <span>Missions location</span>
                            <Button label="toggle" onClick={()=> {
                                this.setState({open: !this.state.open});
                            }}/>
                        </div>
                    </CardActionsSpaced>
                </Col>
            </Row>
        );
    }

    renderBody (streams) {
        const {activeStream} = this.props;
        const _streams = streams.filter((st, index)=>index !== activeStream);
        const _newStreams = [streams[activeStream]].concat(_streams);
        return (
            <Row expanded>
                {(_newStreams || streams).map((stream, index)=>(
                    <Col key={index} offset={!activeStream && 2}>
                        <StreamItem stream={stream} key={index} index={index}/>
                    </Col>
                ))}
                <Col>
                    <StreamNewItem onClick={(e)=> {
                        console.log('create new stream');
                    }}/>
                </Col>
            </Row>
        );
    }

    render () {
        const {user, streams} = this.props;
        return (
            <div style={{background: '#888', color: '#000'}}>
                <BottomSheet active={this.props.open}>
                    <Row expanded>
                        {this.renderHeader(user)}
                        {this.renderBody(streams)}
                    </Row>
                </BottomSheet>
            </div>
        );
    }
}

export {StreamsPanel};
