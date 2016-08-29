import React, {PropTypes, Component} from 'react';
import {Row, Col} from '../../components/grid';
import Button from 'react-toolbox/lib/button';
import {CardActionsSpaced} from '../../components/cardactionsspaced';
import {CardTitle} from 'react-toolbox/lib/card';
import {StreamsList} from './StreamsList';
import {StreamItem} from './StreamItem';
import {StreamNewItem} from './StreamNewItem';
import {BottomSheet} from '../../components/bottomsheet';


class StreamsPanel extends Component {
    constructor (props){
        super(props);
        this.state = {
            open: false
        };
    }
    renderHeader (user){
        const {activeStream, streams} = this.props;
        return (
            <Row expanded align={'middle'}>
                <Col small={2}>
                    {streams[activeStream].streamName || 'Active stream'}
                </Col>
                <Col>
                    <CardActionsSpaced>
                        <CardTitle {...user}/>
                        <div>
                            <span>locatins </span>
                            <Button label="toggle" onClick={()=>{this.setState({open: !this.state.open});}}/>
                        </div>
                    </CardActionsSpaced>
                </Col>
            </Row>
        );
    }

    renderBody (streams){
        const {activeStream} = this.props;
        return (
            <Row expanded>
                <Col small={2}>
                    <StreamItem stream={streams[activeStream]} index={activeStream} />
                </Col>
                <Col>
                    <StreamsList streams={streams}/>
                </Col>
                <Col shrink>
                    <StreamNewItem onClick={(e)=>{console.log('create new stream');}}/>
                </Col>
            </Row>
        );
    }
    render () {
        const {user, streams} = this.props;
        return (
            <div style={{background: '#888', color: '#000'}}>
                {this.renderHeader(user)}
                <BottomSheet active={this.state.open}>
                    {this.renderBody(streams)}
                </BottomSheet>
            </div>
        );
    }
}

export {StreamsPanel};
