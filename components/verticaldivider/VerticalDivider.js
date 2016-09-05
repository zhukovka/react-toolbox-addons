import React from 'react';
import {themr} from 'react-css-themr';
import {VERTICALDIVIDER} from '../identifiers';
import theme from './theme.scss';

const factory = () => {
    const VerticalDivider = () => {
        return (
            <div className={theme.verticalDivider}></div>
        );
    };
    return VerticalDivider;
};

const VerticalDivider = factory();
export default themr(VERTICALDIVIDER)(VerticalDivider);
export {factory as verticalDividerFactory};
export {VerticalDivider};
