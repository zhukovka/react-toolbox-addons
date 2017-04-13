import React, {PropTypes} from 'react';
import classnames from 'classnames';
import Avatar from 'react-toolbox/lib/avatar';
import CustomTooltip from '../custom-tooltip';

const GridItem = ({icon, title, theme, selected, master, ...other}) => {
    const styleWrapper = classnames(theme.gridItem, {
        [theme.selected]: selected
    });
    return (
        <CustomTooltip tooltip={title} label={title} tooltipPosition={'top'}>
            <div {...other} className={styleWrapper}>
                <Avatar className={classnames(theme.avatar, {
                    [theme.master]: master
                })} icon={icon}/>
                <span className={theme.title}>{title}</span>
            </div>
        </CustomTooltip>
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
