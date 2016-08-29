import React from 'react';
import {StreamsPanel} from '../../components/stream-panel/StreamsPanel.js';
import {Button, IconButton} from 'react-toolbox/lib/button';
import BottomSheet from '../../components/bottomsheet';
import {Card, CardMedia, CardTitle, CardActions} from 'react-toolbox/lib/card';
import {ListItem, ListItemContent, ListDivider} from 'react-toolbox/lib/list';
import {FlexList} from '../../components/flexlist/index';

class StreamListTest extends React.Component {
    state = {
        open: false
    }

    handleStreamClick (e, stream) {
        console.log(e,stream);
    }

    render () {
        const TEST_IMG_URL = 'http://cdn.playbuzz.com/cdn/402d3240-a1df-4b70-ab11-0204c82b2b06/7917e75a-5724-4cb6-8e2d-1e42014c3eb9.jpg';

        const testProps = {
            user: {
                title: 'name',
                avatar: TEST_IMG_URL
            },
            activeStream : 2,
            streams: [
                {
                    image: TEST_IMG_URL,
                    status: 'ready',
                    onClick: this.handleStreamClick.bind(this)
                },
                {
                    image: TEST_IMG_URL,
                    status: 'idle',
                    onClick: this.handleStreamClick.bind(this)
                },
                {
                    image: TEST_IMG_URL,
                    status: 'ready',
                    onClick: this.handleStreamClick.bind(this)
                },
                {
                    image: TEST_IMG_URL,
                    status: 'warning',
                    onClick: this.handleStreamClick.bind(this)
                },
                {
                    image: TEST_IMG_URL,
                    status: 'ready',
                    onClick: this.handleStreamClick.bind(this)
                },
                {
                    image: TEST_IMG_URL,
                    status: 'ready',
                    onClick: this.handleStreamClick.bind(this)
                }
            ]
        }
        return (
            <section>
                <StreamsPanel {...testProps}/>
            </section>
        );
    }
}
export {StreamListTest};
