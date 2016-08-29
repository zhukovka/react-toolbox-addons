import React, {PropTypes} from 'react';
import {ListItemContent, ListItem} from 'react-toolbox/lib/list';
import {CardMediaPlus, CardTitleButtons} from '../../components/card-addons';
import CardActionsHover from '../../components/card-addons/CardActionsHover';
import {CardActionsSpaced} from '../../components/cardactionsspaced';
import {StatusComponent} from '../../components/status-component';
import {ButtonOutline} from '../../components/button-addons/ButtonOutline';
import {ButtonView} from '../../components/button-addons/ButtonView';
import {Card, CardText} from 'react-toolbox/lib/card';


const StreamItem = ({stream, index}) => {
    const ICON_MORE = 'more_horiz';
    return (
        <Card style={{background: 'none', color: '#fff', boxShadow: 'none'}}>
            <CardMediaPlus image={stream.image} aspectRatio={'wide'}>
                <CardActionsSpaced>
                    <ButtonView label="10" onClick={(e)=> {
                    }}/>
                    <StatusComponent status={stream.status}/>
                </CardActionsSpaced>
                <CardActionsHover>
                    <CardTitleButtons buttons={[{
                        icon: ICON_MORE, onClick: ()=> {
                        }
                    }]}/>
                    <ButtonOutline label={'view'} flat onClick={(e)=>stream.onClick(e, stream)}/>
                </CardActionsHover>
            </CardMediaPlus>
            <CardText>
                <span>{stream.streamName || 'stream ' + (index + 1)}</span>
            </CardText>
        </Card>

    );
};

export {StreamItem};
