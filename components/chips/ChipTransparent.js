import React, {PropTypes} from 'react';
import _theme from './theme.scss';
import Chip from 'react-toolbox/lib/chip';
import classnames from 'classnames';

const ChipTransparent = (props) => {
    const {active, className, ...other} = props;

    const classes = classnames({
        [_theme.active]: active
    }, className);

    return (
        <Chip {...other} className={classes} theme={_theme}/>
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
export default ChipTransparent;
