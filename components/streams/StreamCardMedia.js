import React, {PropTypes} from 'react';
import {CardMediaPlus} from '../../components/card-addons';
import CardActionsHover from '../../components/card-addons/CardActionsHover';
import {CardActionsSpaced} from '../../components/cardactionsspaced';
import {StatusComponent} from '../../components/status-component';
import {ButtonOutline} from '../../components/button-addons/ButtonOutline';
import {ButtonView} from '../../components/button-addons/ButtonView';

const StreamCardMedia = (props) => {
    return (
        <CardMediaPlus image={props.image} aspectRatio={'wide'}>
            <CardActionsSpaced>
                <ButtonView label="10" onClick={(e)=>{}}/>
                <StatusComponent status={props.status}/>
            </CardActionsSpaced>
            <CardActionsHover >
                <ButtonOutline label={'view'} flat onClick={props.onClick}/>
            </CardActionsHover>
        </CardMediaPlus>
    );
};
StreamCardMedia.propTypes = {
    image: PropTypes.string,
    onClick: PropTypes.func,
    status: PropTypes.string
};

export {StreamCardMedia};
