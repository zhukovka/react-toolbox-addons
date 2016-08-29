import React from 'react';
import {StreamCard} from '../../components/streams/StreamCard';
import {StreamNewHardware} from '../../components/streams/StreamNewHardware';
import {Row, Col} from '../../components/grid';
import Button from 'react-toolbox/lib/button';
import {ICON_EXPAND} from '../../components/streams/constants';
const TestStream = () => {

    const _cardProps = {
        image: 'http://lorempixel.com/300/150',
        status: 'ready',
        onClick: (e)=>{console.log('TEST stream ' + e);}
    };
    const _containerStyles = {
        display: 'flex',
        flexWrap: 'nowrap',
        overflowX: 'scroll',
        flex: '11'
    };
    return (
        <div>
            <Row expanded align={'middle'}>
                <Col style={{flex: '2'}}>
                    <h5>Active</h5>
                </Col>
                <Col style={{flex: '10'}}>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <h5>UserName</h5>
                        <h5>
                            Missions Locations
                            <Button icon={ICON_EXPAND} floating />
                        </h5>
                    </div>
                </Col>
            </Row>
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
                            <StreamNewHardware onClick={(e)=>{console.log('create new hardware!')}}/>
                        </Col>
            </Row>
        </div>
    );
};

export {TestStream};
