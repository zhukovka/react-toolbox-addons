import React, {PropTypes, Component} from 'react';
import {Card, CardTitle, CardMedia} from 'react-toolbox/lib/card';
import classnames from 'classnames';
import {CSS_CARD_PRIMARY_CLASS} from './constants';

const CardPrimary = ({
    theme,
    className,
    children
}) => {
    const classes = classnames(theme[CSS_CARD_PRIMARY_CLASS], className);
    return (
        <Card >
            <CardTitle title='test' className={classes}/>
            {children}
        </Card>
    );
};

export {CardPrimary};

