import React, {PropTypes} from 'react';
import {CardMedia} from 'react-toolbox/lib/card';
import classnames from 'classnames';
import {
    BANNER_PRIMARY,
    BANNER_ACCENT
} from './constants';
import {BANNER} from '../identifiers';

const Banner = ({children, className, theme, primary, accent, opacity, ...other}) => {
    const classes = classnames({
        [theme[BANNER]]: true,
        [theme[BANNER_PRIMARY]]: primary,
        [theme[BANNER_ACCENT]]: accent
    }, className);
    const _opacity = {
        opacity: opacity ? ('.' + opacity) : 1
    };
    return (
        <CardMedia {...other} theme={theme}>
            {children}
            <div className={classes} style={_opacity}></div>
        </CardMedia>

    );
};
Banner.propTypes = {
    accent: PropTypes.bool,
    aspectRatio: PropTypes.oneOf(['wide', 'square']),
    children: PropTypes.any,
    className: PropTypes.string,
    color: PropTypes.string,
    contentOverlay: PropTypes.bool,
    image: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
    ]),
    opacity: PropTypes.number,
    primary: PropTypes.bool,
    theme: PropTypes.shape({
        cardMedia: PropTypes.string,
        content: PropTypes.string,
        contentOverlay: PropTypes.string,
        square: PropTypes.string,
        wide: PropTypes.string
    })
};

export {Banner};
