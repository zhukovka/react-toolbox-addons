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

// test with carousel
import SliderComponent from '../slider-component';

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
                <Col small={4} medium={3} large={2}>
                    <CardText theme={theme}>
                        <span className="material-icons">cast_connected</span>
                        <span>Active stream #name</span>

                    </CardText>
                </Col>
                <Col small={8} medium={9} large={10} className={theme['streamPanel--borderLeft']}>
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
        const _streams = () => {
            const _test = streams.map((stream, index)=>(
            <StreamCard key={index} {...stream}
                        theme={theme}/>
        )).concat(<StreamNewHardware theme={theme} onClick={onAdd}/>);
            return _test;
        };
        return (
            <Row expanded>
                <Col small={4} medium={3} large={2}>
                    <StreamCard {...streams[activeStream]}
                        theme={theme}
                        active
                        />
                </Col>
                <Col small={8} medium={9} large={10} style={{padding: '0'}}>
                    <SliderComponent>
                        {_streams()}
                    </SliderComponent>

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
    activeStream: PropTypes.number,
    onAdd: PropTypes.func,
    streams: PropTypes.array,
    theme: PropTypes.object,
    user: PropTypes.object,
    valueOnBlur: PropTypes.func,
    viewClick: PropTypes.func
};
export {StreamPanel};

export default StreamPanel;
