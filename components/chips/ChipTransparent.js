import React, {PropTypes} from 'react';
import {TRANSPARENT_CHIP} from '../identifiers.js';
import {themr} from 'react-css-themr';
import classnames from 'classnames';
import Chip from 'react-toolbox/lib/chip';

const factory = () => {
    const ChipTransparent = ({active, className, theme, ...other}) => {
        const classes = classnames({
            [theme.active]: active
        }, className);

        return (
            <Chip {...other} className={classes} theme={theme}/>
        );
    };
    ChipTransparent.propTypes = {
        active: PropTypes.bool,
        className: PropTypes.string,
        theme: PropTypes.shape({
            avatar: PropTypes.string,
            chip: PropTypes.string,
            deletable: PropTypes.string,
            delete: PropTypes.string,
            deleteIcon: PropTypes.string,
            deleteX: PropTypes.string
        })
    };

    return ChipTransparent;
};

const ChipTransparent = factory();
export default themr(TRANSPARENT_CHIP)(ChipTransparent);
export {factory as chipTransparentFactory};
export {ChipTransparent};
