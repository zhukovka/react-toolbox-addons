import React, {PropTypes} from 'react';
import Button from 'react-toolbox/lib/button';
import {
    CSS_CARD_TITLE_BUTTONS_WRAPPER
} from './constants';
import theme from './theme.scss';

const CardTitleButtons = ({
    buttons = [],
    ...props
}) => {
    return (
        <div className={theme[CSS_CARD_TITLE_BUTTONS_WRAPPER]}>
            {buttons.map((btn, index)=>(
                <Button {...props} floating mini key={index} theme={theme} {...btn}/>
            ))}
        </div>
    );
};

CardTitleButtons.propTypes = {
    buttons: PropTypes.array.isRequired,
    props: PropTypes.any
};


export {CardTitleButtons};
