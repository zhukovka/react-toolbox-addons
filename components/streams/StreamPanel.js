import React, {PropTypes, Component} from 'react';
import {Row, Col} from '../grid';
import {CardText, CardTitle} from 'react-toolbox/lib/card';
import {StreamCard} from '../streams/StreamCard';
import {StreamNewHardware} from '../streams/StreamNewHardware';
import {CSS_SCROLL_CONTAINER, CSS_NO_PADDING, CSS_OFFSET_RIGHT, DEFAULT_AVATAR} from './constants';
import {CardActionsSpaced} from '../cardactionsspaced';
import {CardTitleButtons} from '../card-addons';
import {BottomSheetPlus} from '../bottomsheetplus';
import classnames from 'classnames';

class StreamPanel extends Component {
    constructor (props) {
        super(props);
        this.state = {
            streams: props.streams,
            editable: false,
            active: true
        };
    }

    renderTopPanel () {
        const {user, theme} = this.props;
        const {name, avatar} = user;
        const ICON_EXPAND = 'arrow_drop_down';
        const ICON_LESS = 'arrow_drop_up';
        return (
            <Row expanded align={'middle'}>
                <Col small={2}>
                    <CardText theme={theme}>
                        <span className="material-icons">cast_connected</span>
                        <span>Active stream #name</span>

                    </CardText>
                </Col>
                <Col small={10} className={theme['streamPanel--borderLeft']}>
                    <CardActionsSpaced className={theme[CSS_NO_PADDING]}>
                        <CardTitle title={name}
                                   avatar={avatar || DEFAULT_AVATAR}
                                   theme={theme}
                        />
                        <CardText theme={theme} className={theme[CSS_OFFSET_RIGHT]}>
                            Missions Locations Missions Locations Missions Locations Missions Locations
                        </CardText>
                        <CardTitleButtons
                            buttons={[{
                                icon: (this.state.active ? ICON_EXPAND : ICON_LESS),
                                onClick: ()=>this.setState({active: !this.state.active})
                            }]}/>
                    </CardActionsSpaced>
                </Col>
            </Row>
        );
    }

    renderBottomPanel () {
        const {theme, activeStream, onAdd} = this.props;
        const {streams} = this.state;
        const containerClass = classnames(theme[CSS_SCROLL_CONTAINER], theme['streamPanel--borderLeft']);
        return (
            <Row expanded>
                <Col small={2}>
                    <StreamCard {...streams[activeStream]}
                        theme={theme}
                    />
                </Col>
                <Col small={10} className={containerClass}>
                    {streams.map((stream, index)=>(
                        <StreamCard key={index} {...stream}
                                    theme={theme}/>
                    ))}
                    <StreamNewHardware theme={theme} onClick={onAdd}/>
                </Col>
            </Row>
        );
    }

    render () {

        return (
            <BottomSheetPlus active={this.state.active}
                             iconClick={()=>this.setState({active: !this.state.active})}>
                <div>
                    {this.renderTopPanel()}
                </div>
                <div>
                    {this.renderBottomPanel()}
                </div>
            </BottomSheetPlus>
        );
    }
}
StreamPanel.propTypes = {
    /**
     * set index of the active stream
     * int activeStream
     */
    activeStream: PropTypes.number,
    /**
     * on add stream event listener
     * Callback1<DOMEvent> onAdd
     */
    onAdd: PropTypes.func,
    /**
     * array of streams
     * Array streams
     */
    streams: PropTypes.arrayOf(PropTypes.shape({
        /**
         * String image
         */
        image: PropTypes.string,
        /**
         * String status
         */
        status: PropTypes.string,
        /**
         * String streamName
         */
        streamName: PropTypes.string,
        /**
         * on view button click callback
         * Callback1<DOMEvent> onClick
         */
        onClick: PropTypes.func,
        /**
         * on stream name change callback
         * Callback1<DOMEvent> onChange
         */
        onChange: PropTypes.func
    })),
    theme: PropTypes.object,
    user: PropTypes.shape({
        /**
         * String name
         */
        name: PropTypes.string,
        /**
         * url of user avatar
         * String avatar
         */
        avatar: PropTypes.string
    })
};

export default StreamPanel;
