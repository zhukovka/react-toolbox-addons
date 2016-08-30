import React from 'react';
import {StreamCard} from '../../components/streams/StreamCard';
import {StreamNewHardware} from '../../components/streams/StreamNewHardware';
import {Row, Col} from '../../components/grid';
import Button from 'react-toolbox/lib/button';
import {ICON_EXPAND} from '../../components/streams/constants';
import {FixedBottomSheet} from '../../components/fixed-bottom-sheet/FixedBottomSheet';
import {Card, CardTitle, CardText} from 'react-toolbox/lib/card';
import Avatar from 'react-toolbox/lib/avatar';

class TestStream extends React.Component {
    state = {
        expanded: false
    }
    renderList (){
        const _cardProps = {
            image: 'http://lorempixel.com/300/150',
            status: 'ready',
            value: 'stream 1',
            onClick: (e)=> {
                console.log('TEST stream ' + e);
            }
        };
        const _containerStyles = {
            display: 'flex',
            flexWrap: 'nowrap',
            overflowX: 'scroll',
            flex: '11'
        };
        if (this.state.expanded){
            return (
                <Row expanded>
                    <Col style={{flex: '1'}}>
                        <StreamCard {..._cardProps}/>
                    </Col>
                    <Col style={_containerStyles}>
                        <StreamCard {..._cardProps}/>
                        <StreamCard {..._cardProps}/>
                        <StreamCard {..._cardProps}/>
                        <StreamCard {..._cardProps}/>
                        <StreamCard {..._cardProps}/>
                        <StreamCard {..._cardProps}/>
                        <StreamCard {..._cardProps}/>
                        <StreamCard {..._cardProps}/>
                        <StreamCard {..._cardProps}/>
                        <StreamNewHardware onClick={(e)=> {
                            console.log('create new hardware!')
                        }}/>
                    </Col>
                </Row>
            );
        }
    }
    render () {
        const AVATAR_TEST = 'https://dl.dropboxusercontent.com/u/2247264/assets/m.jpg';

        const _cardProps = {
            image: 'http://lorempixel.com/300/150',
            status: 'ready',
            value: 'stream 1',
            onClick: (e)=> {
                console.log('TEST stream ' + e);
            }
        };
        const _containerStyles = {
            display: 'flex',
            flexWrap: 'nowrap',
            overflowX: 'scroll',
            flex: '10',
            paddingLeft: '3rem'
        };
        return (
            <FixedBottomSheet>
                <Row expanded align={'middle'}>
                    <Col small={2}>
                        <CardText style={{padding: '0'}}>
                            Active stream #name
                        </CardText>
                        {/*<CardTitle subtitle="Active stream #name" style={{padding: '0',borderRight: '2px solid #ddd'}}/>*/}
                    </Col>
                    <Col style={{flex: '10', paddingLeft: '3.9rem'}}>
                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                            <CardTitle title="UserName" avatar={AVATAR_TEST} style={{padding: '0'}}/>
                            <CardText style={{padding: '0', marginRight: '8rem'}}>
                                Missions Locations Missions Locations Missions Locations Missions Locations
                            </CardText>
                        </div>
                    </Col>
                </Row>
                <Row expanded>
                    <Col small={2}>
                        <StreamCard {..._cardProps} />
                    </Col>
                    <Col style={_containerStyles}>
                        <StreamCard {..._cardProps}/>
                        <StreamCard {..._cardProps}/>
                        <StreamCard {..._cardProps}/>
                        <StreamCard {..._cardProps}/>
                        <StreamCard {..._cardProps}/>
                        <StreamCard {..._cardProps}/>
                        <StreamCard {..._cardProps}/>
                        <StreamCard {..._cardProps}/>
                        <StreamCard {..._cardProps}/>
                        <StreamNewHardware onClick={(e)=> {
                            console.log('create new hardware!')
                        }}/>
                    </Col>
                </Row>
            </FixedBottomSheet>

        );
    }
}
;

export {TestStream};
