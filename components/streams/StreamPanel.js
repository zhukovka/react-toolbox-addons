import React, {PropTypes, Component} from 'react';
import {StreamList} from './StreamList';

class StreamPanel extends Component {

    render (){

        return (
            <div></div>
        );
    }
}

StreamPanel.propTypes = {
    streams: PropTypes.array,
    user: PropTypes.object
};
export {StreamPanel};
