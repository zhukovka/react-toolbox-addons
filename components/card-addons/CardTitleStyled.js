import React, {PropTypes} from 'react';
import {CardTitle} from 'react-toolbox/lib/card';
import classnames from 'classnames';
const CardTitleStyled = ({theme, primary, className, ...other}) => {
    const classes = classnames(theme.cardTitleStyled, {
        [theme.primary]: primary
    }, className);
    return (
        <CardTitle {...other} className={classes} theme={theme}/>
    );
};
CardTitleStyled.propTypes = {
    className: PropTypes.string,
    primary: PropTypes.bool,
    theme: PropTypes.object
};
export {CardTitleStyled};
export default CardTitleStyled;
