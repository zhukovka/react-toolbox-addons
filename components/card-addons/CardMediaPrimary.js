import React from 'react';
import {CardMedia} from 'react-toolbox/lib/card';
import {CardMediaProps} from '../rtcomponentsprops';

const CardMediaPrimary = ({children, theme, ...other}) => {
    return (
        <CardMedia {...other} theme={theme}>
            {children}
        </CardMedia>
    );
};
CardMediaPrimary.propTypes = CardMediaProps;

export {CardMediaPrimary};
export default CardMediaPrimary;
