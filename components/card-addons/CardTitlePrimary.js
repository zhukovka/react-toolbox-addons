import React, {PropTypes} from 'react';
import {CardTitle} from 'react-toolbox/lib/card';
import classnames from 'classnames';
import {themr} from 'react-css-themr';

const CardTitlePrimary = ({theme, className, ...other}) => {
    const classes = classnames(theme.cardTitlePrimary, className);
    return (
        <CardTitle {...other} className={classes} theme={theme}/>
    );
};
CardTitlePrimary.propTypes = {
    className: PropTypes.string,
    theme: PropTypes.object
};
export {CardTitlePrimary};
export default themr('CardTitlePrimary')(CardTitlePrimary);
