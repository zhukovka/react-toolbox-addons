import React, {PropTypes} from 'react';
import classnames from 'classnames';
import Avatar from 'react-toolbox/lib/avatar';

const GridItem = ({icon, title, theme, selected, master, ...other}) => {
    const styleWrapper = classnames(theme.gridItem, {
        [theme.selected]: selected
    });
    return (
        <div {...other} className={styleWrapper}>
            <Avatar className={classnames(theme.avatar, {
                [theme.master]: master
            })} icon={icon}/>
            <span className={theme.title}>{title}</span>
        </div>
    );
};

GridItem.propTypes = {
    icon: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired,
    master: PropTypes.bool.isRequired, // just to set accentColor
    title: PropTypes.string.isRequired,
    theme: PropTypes.object
};


export default GridItem;
