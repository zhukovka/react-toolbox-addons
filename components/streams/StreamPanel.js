import React, {PropTypes, Component} from 'react';
import {Row, Col} from '../../components/grid';
import {CardText, CardTitle} from 'react-toolbox/lib/card';
import {StreamCard} from '../../components/streams/StreamCard';
import {StreamNewHardware} from '../../components/streams/StreamNewHardware';
import {CSS_SCROLL_CONTAINER, CSS_NO_PADDING, CSS_OFFSET_RIGHT, DEFAULT_AVATAR} from './constants';
import {CardActionsSpaced} from '../../components/cardactionsspaced';
import {CardTitleButtons} from '../../components/card-addons';
import {BottomSheetPlus} from '../../components/bottomsheetplus';
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
                        <CardText the me={theme} className={theme[CSS_OFFSET_RIGHT]}>
                            Missions Locations Missions Locations Missions Locations Missions Locations
                        </CardText>
                        <CardTitleButtons
                            buttons={[{icon: (this.state.active ? ICON_EXPAND : ICON_LESS), onClick: ()=>this.setState({active: !this.state.active})}]}/>
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
            <div>
                <BottomSheetPlus active={this.state.active}
                                 iconClick={()=>this.setState({active: !this.state.active})}>
                    <div>
                        {this.renderTopPanel()}
                    </div>
                    <div>
                        {this.renderBottomPanel()}
                    </div>
                </BottomSheetPlus>
            </div>
        );
    }
}
/*
 * {this.renderBottomPanel()}
 * */
StreamPanel.propTypes = {
    activeStream: PropTypes.number,
    onAdd: PropTypes.func,
    streams: PropTypes.array,
    theme: PropTypes.object,
    user: PropTypes.object,
    valueOnBlur: PropTypes.func,
    viewClick: PropTypes.func
};
export {StreamPanel};
