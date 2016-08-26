import React, {PropTypes} from 'react';
import Button from 'react-toolbox/lib/button';
import IconButton from 'react-toolbox/lib/button';
import {
    CSS_CARD_TITLE_BUTTONS_WRAPPER,
    CSS_CARD_TITLE_BUTTON
} from './constants';
import theme from './theme.scss';

const CardTitleButtons = ({
    buttons = []
}) => {
    return (
        <div className={theme[CSS_CARD_TITLE_BUTTONS_WRAPPER]}>
            {buttons.map((btn, index)=>(
                <Button floating primary mini key={index} className={theme[CSS_CARD_TITLE_BUTTON]} icon={btn.icon} onClick={(e)=>btn.handlerOnClick(e)}/>
            ))}
        </div>
    );
};

CardTitleButtons.propTypes = {
    buttons: PropTypes.array
    /*buttons: PropTypes.shape({
        actionName: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
        handlerOnClick: PropTypes.func.isRequired
    }),*/
};


export default CardTitleButtons;
