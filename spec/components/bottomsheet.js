import React from 'react';
import {Button, IconButton} from 'react-toolbox/lib/button';
import BottomSheetPlus from '../../components/bottomsheetplus';
import {CardTitle} from 'react-toolbox/lib/card';
import {Row, Col} from '../../components/grid';
import ButtonGroup from '../../components/buttongroup';
import FlexCarousel from '../../components/flex-carousel';
import {CardMediaPlus, CardTitleButtons} from '../../components/card-addons';
import {ButtonView} from '../../components/button-addons/ButtonView';
import {CardActionsSpaced} from '../../components/cardactionsspaced';
import {StatusComponent} from '../../components/status-component';
import {ButtonOutline} from '../../components/button-addons/ButtonOutline';
import CardActionsHover from '../../components/card-addons/CardActionsHover';


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
        const TEST_IMG_URL = 'http://cdn.playbuzz.com/cdn/402d3240-a1df-4b70-ab11-0204c82b2b06/7917e75a-5724-4cb6-8e2d-1e42014c3eb9.jpg';
        const READY_STATUS = 'ready';
        const IDLE_STATUS = 'idle';
        const ERROR_STATUS = 'error';
        const ICON_MORE = 'more_horiz';
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
                        <CardMediaPlus image={TEST_IMG_URL} aspectRatio={'wide'}>
                            <CardActionsSpaced>
                                <ButtonView label="1" onClick={(e)=>{}}/>
                                <StatusComponent status={IDLE_STATUS}/>
                            </CardActionsSpaced>
                            <CardActionsHover >
                                <CardTitleButtons buttons={[{
                    icon: ICON_MORE, onClick: ()=> {
                    }
                }]}/>
                                <ButtonOutline label={'view'} flat onClick={(e)=>{}}/>
                            </CardActionsHover>
                        </CardMediaPlus>

                        <CardMediaPlus image={TEST_IMG_URL} aspectRatio={'wide'}>
                            <CardActionsSpaced>
                                <ButtonView label="2" onClick={(e)=>{}}/>
                                <StatusComponent status={ERROR_STATUS}/>
                            </CardActionsSpaced>
                            <CardActionsHover >
                                <CardTitleButtons buttons={[{
                    icon: ICON_MORE, onClick: ()=> {
                    }
                }]}/>
                                <ButtonOutline label={'view'} flat onClick={(e)=>{}}/>
                            </CardActionsHover>
                        </CardMediaPlus>

                        <CardMediaPlus image={TEST_IMG_URL} aspectRatio={'wide'}>
                            <CardActionsSpaced>
                                <ButtonView label="3" onClick={(e)=>{}}/>
                                <StatusComponent status={READY_STATUS}/>
                            </CardActionsSpaced>
                            <CardActionsHover >
                                <CardTitleButtons buttons={[{
                    icon: ICON_MORE, onClick: ()=> {
                    }
                }]}/>
                                <ButtonOutline label={'view'} flat onClick={(e)=>{}}/>
                            </CardActionsHover>
                        </CardMediaPlus>

                        <CardMediaPlus image={TEST_IMG_URL} aspectRatio={'wide'}>
                            <CardActionsSpaced>
                                <ButtonView label="4" onClick={(e)=>{}}/>
                                <StatusComponent status={IDLE_STATUS}/>
                            </CardActionsSpaced>
                            <CardActionsHover >
                                <CardTitleButtons buttons={[{
                    icon: ICON_MORE, onClick: ()=> {
                    }
                }]}/>
                                <ButtonOutline label={'view'} flat onClick={(e)=>{}}/>
                            </CardActionsHover>
                        </CardMediaPlus>

                        <CardMediaPlus image={TEST_IMG_URL} aspectRatio={'wide'}>
                            <CardActionsSpaced>
                                <ButtonView label="5" onClick={(e)=>{}}/>
                                <StatusComponent status={READY_STATUS}/>
                            </CardActionsSpaced>
                            <CardActionsHover >
                                <CardTitleButtons buttons={[{
                    icon: ICON_MORE, onClick: ()=> {
                    }
                }]}/>
                                <ButtonOutline label={'view'} flat onClick={(e)=>{}}/>
                            </CardActionsHover>
                        </CardMediaPlus>

                        <CardMediaPlus image={TEST_IMG_URL} aspectRatio={'wide'}>
                            <CardActionsSpaced>
                                <ButtonView label="6" onClick={(e)=>{}}/>
                                <StatusComponent status={READY_STATUS}/>
                            </CardActionsSpaced>
                            <CardActionsHover >
                                <CardTitleButtons buttons={[{
                    icon: ICON_MORE, onClick: ()=> {
                    }
                }]}/>
                                <ButtonOutline label={'view'} flat onClick={(e)=>{}}/>
                            </CardActionsHover>
                        </CardMediaPlus>

                        <CardMediaPlus image={TEST_IMG_URL} aspectRatio={'wide'}>
                            <CardActionsSpaced>
                                <ButtonView label="7" onClick={(e)=>{}}/>
                                <StatusComponent status={ERROR_STATUS}/>
                            </CardActionsSpaced>
                            <CardActionsHover >
                                <CardTitleButtons buttons={[{
                    icon: ICON_MORE, onClick: ()=> {
                    }
                }]}/>
                                <ButtonOutline label={'view'} flat onClick={(e)=>{}}/>
                            </CardActionsHover>
                        </CardMediaPlus>

                        <CardMediaPlus image={TEST_IMG_URL} aspectRatio={'wide'}>
                            <CardActionsSpaced>
                                <ButtonView label="8" onClick={(e)=>{}}/>
                                <StatusComponent status={IDLE_STATUS}/>
                            </CardActionsSpaced>
                            <CardActionsHover >
                                <CardTitleButtons buttons={[{
                    icon: ICON_MORE, onClick: ()=> {
                    }
                }]}/>
                                <ButtonOutline label={'view'} flat onClick={(e)=>{}}/>
                            </CardActionsHover>
                        </CardMediaPlus>

                        <CardMediaPlus image={TEST_IMG_URL} aspectRatio={'wide'}>
                            <CardActionsSpaced>
                                <ButtonView label="9" onClick={(e)=>{}}/>
                                <StatusComponent status={IDLE_STATUS}/>
                            </CardActionsSpaced>
                            <CardActionsHover >
                                <CardTitleButtons buttons={[{
                    icon: ICON_MORE, onClick: ()=> {
                    }
                }]}/>
                                <ButtonOutline label={'view'} flat onClick={(e)=>{}}/>
                            </CardActionsHover>
                        </CardMediaPlus>
                    </FlexCarousel>

                </BottomSheetPlus>
            </section>
        );
    }
}

export default BottomSheetTest;
