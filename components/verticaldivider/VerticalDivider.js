import React from 'react';
import {themr} from 'react-css-themr';
import {VERTICALDIVIDER} from '../identifiers';
import theme from './theme.scss';

const factory = () => {
    const VerticalPalochka = () => {
        return (
            <div className={theme.verticalDivider}></div>
        );
    };
    return VerticalPalochka;
}

const VerticalDivider = factory();
export default themr(VERTICALDIVIDER)(VerticalDivider);
export {factory as verticalDividerFactory};
export {VerticalDivider};
