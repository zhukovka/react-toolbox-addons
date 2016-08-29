import React from 'react';
import {CardMediaPlus, CardTitleButtons} from '../../components/card-addons';
import CardActionsHover from '../../components/card-addons/CardActionsHover';
import {CardActionsSpaced} from '../../components/cardactionsspaced';
import {StatusComponent} from '../../components/status-component';
import {ButtonOutline} from '../../components/button-addons/ButtonOutline';
import {ButtonView} from '../../components/button-addons/ButtonView';

const CardMediaPlusTest = () => {

    const TEST_IMG_URL = 'http://cdn.playbuzz.com/cdn/402d3240-a1df-4b70-ab11-0204c82b2b06/7917e75a-5724-4cb6-8e2d-1e42014c3eb9.jpg';
    const TEST_STATUS = 'ready';
    const ICON_MORE = 'more_horiz';
    return (
        <CardMediaPlus image={TEST_IMG_URL} aspectRatio={'wide'}>
            <CardActionsSpaced>
                <ButtonView label="10" onClick={(e)=>{}}/>
                <StatusComponent status={TEST_STATUS}/>
            </CardActionsSpaced>
            <CardActionsHover >
                <CardTitleButtons buttons={[{
                    icon: ICON_MORE, onClick: ()=> {
                    }
                }]}/>
                <ButtonOutline label={'view'} flat onClick={(e)=>{}}/>
            </CardActionsHover>
        </CardMediaPlus>
    );
};

export default CardMediaPlusTest;
