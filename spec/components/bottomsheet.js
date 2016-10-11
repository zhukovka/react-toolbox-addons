import React from 'react';
import {Button, IconButton} from 'react-toolbox/lib/button';
import BottomSheetPlus from '../../components/bottomsheetplus';
import {Card, CardMedia, CardTitle} from 'react-toolbox/lib/card';
import {FlexList} from '../../components/flexlist/index';
import {Row, Col} from '../../components/grid';
import ButtonGroup from '../../components/buttongroup';
import CardActionsSpaced from '../../components/cardactionsspaced/CardActionsSpaced';
class BottomSheetTest extends React.Component {
    state = {
        cards: false,
        list: false,
        streams: false
    };

    handleClick = () => {
        this.setState({cards: true});
    };

    render () {
        return (
            <section>
                <h5>BottomSheets</h5>
                <p>lorem ipsum...</p>
                <Button label='Show bottomsheet with cards' primary raised
                        onClick={()=>this.setState({list: false, cards: true})}/>

                <Button label='Show bottomsheet with list' primary raised
                        onClick={()=>this.setState({list: true, cards: false})}/>

                <BottomSheetPlus active>
                    <div>
                        <Row expanded>
                            <Col small={2}>
                                <ButtonGroup align="center">
                                    <span>Ololo</span>
                                    <IconButton inverse icon="fast_rewind"/>
                                </ButtonGroup>
                            </Col>
                            <Col small={10}>
                                <CardTitle
                                    avatar="https://placeimg.com/80/80/animals"
                                    title="Avatar style title"/>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <FlexList align="space-around" width="120">
                            <li className="pia" style={{color: 'red'}}>
                                <FlexList align="space-around" small>
                                    <li>
                                        <ButtonGroup align="center">
                                            <span>Ololo</span>
                                            <IconButton inverse icon="favorite"/>
                                        </ButtonGroup>
                                        <Card>
                                            <CardMedia
                                                aspectRatio="square"
                                                image="https://placeimg.com/200/200/nature">
                                                <CardTitle>Kukuruku</CardTitle>
                                            </CardMedia>
                                            <CardActionsSpaced align="center" fullheight>
                                                <IconButton icon="thumb_down"/>
                                                <IconButton icon="thumb_up"/>
                                                <IconButton icon="turned_in_not"/>
                                            </CardActionsSpaced>
                                        </Card>
                                    </li>
                                </FlexList>
                            </li>
                        </FlexList>
                    </div>
                </BottomSheetPlus>
            </section>
        );
    }
}

export default BottomSheetTest;
