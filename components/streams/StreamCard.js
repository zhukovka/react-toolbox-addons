import React, {PropTypes, Component} from 'react';
import {StreamCardMedia} from './StreamCardMedia';
import {StreamCardTitle} from './StreamCardTitle';

class StreamCard extends Component {
    constructor (props){
        super(props);
        this.state = {
            editable: false
        };
    }
    handleOnClick (e){
        console.log(e);
    }
    handleOnChange (e){
        console.log(e);
    }
    render (){
        const _style = {
            flex: '0 0 auto',
            minWidth: '150px',
            height: 'auto',
            boxSizing: 'border-box',
            padding: '0 .9rem'
        };
        return (
            <div style={_style}>
                <StreamCardMedia {...this.props}
                                 onClick={this.handleOnClick.bind(this)}/>
                <StreamCardTitle editable={this.state.editable}
                                 onChange={this.handleOnChange.bind(this)}/>
            </div>
        );
    }
}

export {StreamCard};
