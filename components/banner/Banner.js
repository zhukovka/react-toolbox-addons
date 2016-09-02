import React, {PropTypes} from 'react';
import {CardMedia} from 'react-toolbox/lib/card';
import classnames from 'classnames';

const Banner = ({children, className, theme, overflow, ...other}) => {
    const classes = classnames({[theme.overflow]: overflow}, className);
    return (
        <CardMedia {...other} theme={theme} className={classes}>
            {children}
        </CardMedia>
    );
};
Banner.propTypes = {
    aspectRatio: PropTypes.oneOf(['wide', 'square']),
    children: PropTypes.any,
    className: PropTypes.string,
    color: PropTypes.string,
    contentOverlay: PropTypes.bool,
    image: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
    ]),
    overflow: PropTypes.bool,
    theme: PropTypes.shape({
        cardMedia: PropTypes.string,
        content: PropTypes.string,
        contentOverlay: PropTypes.string,
        square: PropTypes.string,
        wide: PropTypes.string
    })
};

export {Banner};
export default Banner;
