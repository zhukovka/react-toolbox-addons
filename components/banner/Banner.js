import React, {PropTypes} from 'react';
import {themr} from 'react-css-themr';
import {CardMedia} from 'react-toolbox/lib/card';
import classnames from 'classnames';
import {BANNER} from '../identifiers';
const Banner = ({children, className, theme, primary, accent, opacity, ...other}) => {
    const classes = classnames(theme.banner, {
        [theme.primary]: primary,
        [theme.accent]: accent,
        [theme[`opacity-${opacity}`]]: opacity
    }, className);

    return (
        <CardMedia {...other} className={classes} theme={theme}>
            {children}
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

const factory = () => Banner;
export default themr(BANNER)(Banner);
export {factory as bannerFactory};
export {Banner};
