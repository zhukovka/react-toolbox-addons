import React from 'react';
import {StreamPanel} from '../../components/streams';
const TEST_IMAGE = 'http://lorempixel.com/400/200';
const TEST_AVATAR = 'https://dl.dropboxusercontent.com/u/2247264/assets/m.jpg';


class TestStream extends React.Component {

    addHardware (e) {
        console.log(e, 'addNewHardware!');
    }

    viewClick (e) {
        console.log(e, 'viewClick!');
    }

    valueOnBlur (e) {
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
                    onClick: ()=> {
                        console.log('stream 1');
                    },
                    onChange: (e)=> {
                        console.log(e.target.value);
                    }
                },
                {
                    image: TEST_IMAGE,
                    status: 'error',
                    streamName: 'stream 2',
                    onClick: ()=> {
                        console.log('stream 2');
                    },
                    onChange: (e)=> {
                        console.log(e.target.value);
                    }
                },
                {
                    image: TEST_IMAGE,
                    status: 'ready',
                    streamName: 'stream 3',
                    onClick: ()=> {
                        console.log('stream 3');
                    },
                    onChange: (e)=> {
                        console.log(e.target.value);
                    }
                },
                {
                    image: TEST_IMAGE,
                    status: 'warning',
                    streamName: 'stream 4',
                    onClick: ()=> {
                        console.log('stream 4');
                    },
                    onChange: (e)=> {
                        console.log(e.target.value);
                    }
                },
                {
                    image: TEST_IMAGE,
                    status: 'warning',
                    streamName: 'stream 5',
                    onClick: ()=> {
                        console.log('stream 5');
                    },
                    onChange: (e)=> {
                        console.log(e.target.value);
                    }
                }
            ],
            onAdd: this.addHardware.bind(this),
            viewClick: this.viewClick.bind(this),
            valueOnBlur: this.valueOnBlur.bind(this)

        };
        return (
            <StreamPanel {...testProps}/>

        );
    }
}

export {TestStream};
