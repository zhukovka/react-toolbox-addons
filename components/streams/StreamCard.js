import React, {PropTypes, Component} from 'react';
import {StreamCardMedia} from './StreamCardMedia';
import {EditableTitle} from '../../components/editable-title';
import {CSS_SCROLL_ITEM} from './constants';

class StreamCard extends Component {
    constructor (props) {
        super(props);
        this.state = {
            editable: false
        };
    }
    handleOnBlur (e) {
        const {onBlur, streamName} = this.props;
        const _newValue = e.target.value;
        const check = _newValue !== streamName;
        this.setState({
            editable: false
        }, ()=> {
            if (check){
                onBlur(e);
            }
        });
    }

    handleOnEdit (e) {
        this.setState({
            editable: true
        });
    }

    render () {
        const { theme, streamName } = this.props;
        const { editable } = this.state;
        return (
            <div className={theme[CSS_SCROLL_ITEM]}>
                <div>
                    <StreamCardMedia {...this.props}/>
                </div>
                <div>
                    <EditableTitle editable={editable}
                                   defaultValue={streamName}
                                   onBlur={this.handleOnBlur.bind(this)}
                                   onEdit={this.handleOnEdit.bind(this)}
                    />
                </div>
            </div>
        );
    }
}

StreamCard.propTypes = {
    onBlur: PropTypes.func,
    onClick: PropTypes.func,
    streamName: PropTypes.string,
    theme: PropTypes.object
};

export {StreamCard};
