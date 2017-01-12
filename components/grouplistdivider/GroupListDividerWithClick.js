import React, {PropTypes} from 'react';
import FontIcon from 'react-toolbox/lib/font_icon';
import classnames from 'classnames';
import {GROUPLISTDIVIDERWITHCLICK} from '../identifiers.js';
import {themr} from 'react-css-themr';


const GroupListDividerWithClick = ({
        onClick, theme, collapsed, title
    }) => {
    const ARROW_DROP_DOWN = 'arrow_drop_down';
    const ARROW_DROP_UP = 'arrow_drop_up';
    const cls = classnames(theme.title, {
        [theme.collapsed]: collapsed
    });
    const clsIcon = classnames(theme.clickIcon, {
       [theme.iconCollapsed]: collapsed
    });
    return (
        <div className={theme.clickDivider}>
            <p className={cls} onClick={onClick}>{title}
                <FontIcon value={!collapsed ? ARROW_DROP_DOWN : ARROW_DROP_UP} className={clsIcon}/>
            </p>
        </div>
    );
};

GroupListDividerWithClick.propTypes = {
    collapsed: PropTypes.bool,
    onClick: PropTypes.func,
    theme: PropTypes.object,
    title: PropTypes.string
};

const factory = () => GroupListDividerWithClick;
export default themr(GROUPLISTDIVIDERWITHCLICK)(GroupListDividerWithClick);
export {factory as GroupListDividerWithClickFactory};

