import React from 'react';
import {CardTitle} from 'react-toolbox/lib/card';
import theme from './theme.scss';

const CardTitlePrimary = (props) => {
    return (
        <CardTitle {...props} className={theme.cardTitlePrimary} theme={theme} />
    );
};

export {CardTitlePrimary};
export default CardTitlePrimary;
