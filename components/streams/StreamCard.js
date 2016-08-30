import React, {PropTypes, Component} from 'react';
import {StreamCardMedia} from './StreamCardMedia';
import {EditableTitle} from '../../components/editable-title/EditableTitle';

class StreamCard extends Component {
    constructor (props) {
        super(props);
        this.state = {
            editable: false
        };
    }

    handleOnClick (e) {
        console.log(e);
    }

    handleOnBlur (e) {
        this.setState({
            editable: false
        }, ()=> {
            console.log(e.target.value);
        });
    }

    handleOnEdit (e) {
        this.setState({
            editable: true
        }, ()=>{
            console.log(e);
        });
    }

    render () {
        const _style = {
            flex: '0 0 auto',
            minWidth: '220px',
            height: 'auto',
            boxSizing: 'border-box',
            padding: '0 .9rem'
        };
        return (
            <div style={_style}>
                <div>
                    <StreamCardMedia {...this.props}
                                     onClick={this.handleOnClick.bind(this)}/>
                </div>
                <div style={{textAlign: 'center', padding: '1.7rem 0'}}>
                    <EditableTitle editable={this.state.editable}
                                   value={this.props.value}
                                   onBlur={this.handleOnBlur.bind(this)}
                                   onEdit={this.handleOnEdit.bind(this)}
                    />
                </div>
            </div>
        );
    }
}

StreamCard.propTypes = {
    value: PropTypes.string
};

export {StreamCard};
