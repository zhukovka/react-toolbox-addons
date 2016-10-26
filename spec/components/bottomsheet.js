import React from 'react';
import {Button, IconButton} from 'react-toolbox/lib/button';
import BottomSheetPlus from '../../components/bottomsheetplus';
import {CardTitle} from 'react-toolbox/lib/card';
import {Row, Col} from '../../components/grid';
import ButtonGroup from '../../components/buttongroup';
import FlexCarousel from '../../components/flex-carousel';
import CardMediaPlusTest from './cardMediaTest.js';
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
                    <FlexCarousel>
                        <CardMediaPlusTest/>
                        <CardMediaPlusTest/>
                        <CardMediaPlusTest/>
                        <CardMediaPlusTest/>
                        <CardMediaPlusTest/>
                        <CardMediaPlusTest/>
                        <CardMediaPlusTest/>
                        <CardMediaPlusTest/>
                        <CardMediaPlusTest/>
                        <CardMediaPlusTest/>
                        <CardMediaPlusTest/>
                    </FlexCarousel>

                </BottomSheetPlus>
            </section>
        );
    }
}

export default BottomSheetTest;
