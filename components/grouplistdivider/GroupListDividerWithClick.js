import React, {PropTypes} from 'react';
import FontIcon from 'react-toolbox/lib/font_icon';
import classnames from 'classnames';
import {GROUPLISTDIVIDERWITHCLICK} from '../identifiers.js';
import {themr} from 'react-css-themr';


const GroupListDividerWithClick = ({
        onClick, theme, collapsed
    }) => {
    const ARROW_DROP_DOWN = 'arrow_drop_down';
    const ARROW_DROP_UP = 'arrow_drop_up';
    const cls = classnames(theme.clickIcon, {
        [theme.collapsed]: collapsed
    });
    return (
        <div className={theme.clickDivider}>
            <FontIcon value={!collapsed ? ARROW_DROP_UP : ARROW_DROP_DOWN} onClick={onClick} className={cls}/>
        </div>
    );
};

GroupListDividerWithClick.propTypes = {
    collapsed: PropTypes.bool,
    onClick: PropTypes.func,
    theme: PropTypes.object
};

const factory = () => GroupListDividerWithClick;
export default themr(GROUPLISTDIVIDERWITHCLICK)(GroupListDividerWithClick);
export {factory as GroupListDividerWithClickFactory};
//export {GroupListDividerWithClick};

