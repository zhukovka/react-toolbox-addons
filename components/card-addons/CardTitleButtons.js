import React, {PropTypes} from 'react';
import Button from 'react-toolbox/lib/button';
import {CARDTITLEBUTTONS} from '../identifiers';
import {themr} from 'react-css-themr';
import classnames from 'classnames';

import {
    CSS_CARD_TITLE_BUTTONS_WRAPPER
} from './constants';
import theme from './theme.scss';

const factory = () => {
    const CardTitleButtons = ({buttons = [], center}) => {
        const classes = classnames({[theme.center]: center}, theme[CSS_CARD_TITLE_BUTTONS_WRAPPER]);
        return (
            <div className={classes}>
                {buttons.map((btn, index)=>{
                    return <Button floating mini key={index} theme={theme} {...btn}/>;
                })}
            </div>
        );
    };

    CardTitleButtons.propTypes = {
        buttons: PropTypes.array.isRequired,
        center: PropTypes.bool
    };
    return CardTitleButtons;
};
const CardTitleButtons = factory();
export default themr(CARDTITLEBUTTONS)(CardTitleButtons);
export {factory as cardTitleButtonsFactory};
export {CardTitleButtons};
