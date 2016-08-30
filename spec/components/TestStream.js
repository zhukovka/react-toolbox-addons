import React from 'react';
import {StreamCard} from '../../components/streams/StreamCard';
import {StreamNewHardware} from '../../components/streams/StreamNewHardware';
import {Row, Col} from '../../components/grid';
import Button from 'react-toolbox/lib/button';
import {ICON_EXPAND} from '../../components/streams/constants';
import {FixedBottomSheet} from '../../components/fixed-bottom-sheet/FixedBottomSheet';
import {Card, CardTitle, CardText} from 'react-toolbox/lib/card';
import Avatar from 'react-toolbox/lib/avatar';

//
import {StreamPanel} from '../../components/streams';
const TEST_IMAGE = 'http://lorempixel.com/400/200';
const TEST_AVATAR = 'https://dl.dropboxusercontent.com/u/2247264/assets/m.jpg';
class TestStream extends React.Component {

    /* onClick => DOMevent
    *   addHardware => DOMevent
    * */
    addHardware (e){
        console.log(e, 'addNewHardware!');
    }
    viewClick (e){
        console.log(e, 'viewClick!');
    }
    valueOnBlur (e){
        console.log(e, 'valueOnBlur!');
    }
    render () {
        const testProps = {
            user: {
                name: 'test User Name',
                avatar: TEST_AVATAR
            },
            activeStream: 1,
            streams: [
                {
                    image: TEST_IMAGE,
                    status: 'ready',
                    streamName: 'stream 1',
                    onClick: ()=>{}
                },
                {
                    image: TEST_IMAGE,
                    status: 'error',
                    streamName: 'stream 2',
                    onClick: ()=>{}
                },
                {
                    image: TEST_IMAGE,
                    status: 'ready',
                    streamName: 'stream 3',
                    onClick: ()=>{}
                },
                {
                    image: TEST_IMAGE,
                    status: 'warning',
                    streamName: 'stream 4',
                    onClick: ()=>{}
                },
                {
                    image: TEST_IMAGE,
                    status: 'warning',
                    streamName: 'stream 5',
                    onClick: ()=>{}
                }
            ],
            addHardware: this.addHardware.bind(this),
            viewClick: this.viewClick.bind(this),
            valueOnBlur: this.valueOnBlur.bind(this)

        };
        return (
            <StreamPanel {...testProps}/>

        );
    }
}
;

export {TestStream};
