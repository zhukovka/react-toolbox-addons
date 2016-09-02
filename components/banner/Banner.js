import React, {PropTypes} from 'react';
import {themr} from 'react-css-themr';
import {CardMedia} from 'react-toolbox/lib/card';
import classnames from 'classnames';
import {BANNER} from '../identifiers';

/**
 * Banner props extend CardMedia props
 */
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
    /**
     * add for item to have accent background color
     * Boolean accent
     */
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
    /**
     * integer from 0 to 10 to set opacity to the background
     * Integer opacity
     */
    opacity: PropTypes.number,
    /**
     * add for item to have primary background color
     * Boolean primary
     */
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
