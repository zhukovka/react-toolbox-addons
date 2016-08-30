import React, {PropTypes, Component} from 'react';
import {Row, Col} from '../../components/grid';
import {Card, CardText, CardTitle} from 'react-toolbox/lib/card';
import {StreamCard} from '../../components/streams/StreamCard';
import {FixedBottomSheet} from '../../components/fixed-bottom-sheet/FixedBottomSheet';
import {StreamNewHardware} from '../../components/streams/StreamNewHardware';

import {
    CSS_SCROLL_CONTAINER,
    CSS_NO_PADDING,
    CSS_OFFSET_RIGHT,
    DEFAULT_AVATAR
} from './constants';
import {CardActionsSpaced} from '../../components/cardactionsspaced';

class StreamPanel extends Component {
    constructor (props){
        super(props);
        this.state = {
            streams: props.streams,
            editable: false
        };
    }
    updateStreamName (stream, newName){
        const {valueOnBlur} = this.props;
        const findIndex = this.state.streams.indexOf(stream);
        this.setState({
            streams: Object.assign([], this.state.streams, {
                [findIndex]: Object.assign({}, this.state.streams[findIndex], {streamName: newName})
            })
        }, ()=>{
            valueOnBlur(newName);
        });
    }
    renderTopPanel () {
        const {user, theme} = this.props;
        const {name, avatar} = user;
        return (
            <Row expanded align={'middle'}>
                <Col small={2}>
                    <CardText theme={theme}>
                        Active stream #name
                    </CardText>
                </Col>
                <Col small={10}>
                    <CardActionsSpaced className={theme[CSS_NO_PADDING]}>
                        <CardTitle title={name}
                                   avatar={avatar || DEFAULT_AVATAR}
                                   theme={theme}
                        />
                        <CardText theme={theme} className={theme[CSS_OFFSET_RIGHT]}>
                            Missions Locations Missions Locations Missions Locations Missions Locations
                        </CardText>
                    </CardActionsSpaced>
                </Col>
            </Row>
        );
    }

    renderBottomPanel (){
        const {theme, activeStream, addHardware, viewClick, valueOnBlur} = this.props;
        const {streams} = this.state;
        return (
            <Row expanded>
                <Col small={2}>
                    <StreamCard {...streams[activeStream]}
                                theme={theme}
                                onClick={viewClick}
                    />
                </Col>
                <Col small={10} className={theme[CSS_SCROLL_CONTAINER]}>
                    {streams.map((stream, index)=>(
                        <StreamCard key={index} {...stream}
                                    theme={theme}
                                    onClick={viewClick}
                                    onBlur={valueOnBlur}/>
                    ))}
                    <StreamNewHardware theme={theme} onClick={addHardware}/>
                </Col>
            </Row>
        );
    }
    render (){

        return (
            <FixedBottomSheet>
                {this.renderTopPanel()}
                {this.renderBottomPanel()}
            </FixedBottomSheet>
        );
    }
}

StreamPanel.propTypes = {
    activeStream: PropTypes.number,
    addHardware: PropTypes.func,
    streams: PropTypes.array,
    theme: PropTypes.object,
    user: PropTypes.object,
    valueOnBlur: PropTypes.func,
    viewClick: PropTypes.func
};
export {StreamPanel};
