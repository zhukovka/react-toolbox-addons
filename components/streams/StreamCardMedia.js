import React, {PropTypes} from 'react';
import {CardMediaPlus} from '../card-addons';
import CardActionsHover from '../card-addons/CardActionsHover';
import {CardActionsSpaced} from '../cardactionsspaced';
import {StatusComponent} from '../status-component';
import {ButtonOutline} from '../button-addons/ButtonOutline';
import {ButtonView} from '../button-addons/ButtonView';

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
