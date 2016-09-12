import React, {PropTypes} from 'react';
import classnames from 'classnames';
import {themr} from 'react-css-themr';
import {STYLEDAVATAR} from '../identifiers';
import Avatar from 'react-toolbox/lib/avatar';
const StyledAvatar = ({accent, primary, theme, className, ...other}) => {
    const classes = classnames(theme.styledavatar, {
        [theme.accent]: accent,
        [theme.primary]: primary
    }, className);
    return (
        <Avatar {...other} className={classes} theme={theme}/>
    );
};
StyledAvatar.propTypes = {
    /**
     * set to make background color accent
     * Boolean accent
     */
    accent: PropTypes.bool,
    className: PropTypes.string,
    /**
     * set to make background color primary
     * Boolean primary
     */
    primary: PropTypes.bool,
    theme: PropTypes.object
};
const factory = () => StyledAvatar;
export default themr(STYLEDAVATAR)(StyledAvatar);
export {factory as StyledAvatarFactory};
export {StyledAvatar};
