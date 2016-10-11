import React, {PropTypes} from 'react';
import classnames from 'classnames';
import {themr} from 'react-css-themr';
import {ICONSWITCHER} from '../identifiers';
import FontIcon from 'react-toolbox/lib/font_icon';
const IconSwitcher = ({active, icons, className, theme, onSwitch, ...other}) => {
    const renderIcons = ()=> {
        return icons.map((icon, i)=> {
            const classname = classnames(theme.icon, {[theme.active]: icon === active});
            return (<FontIcon value={icon} key={`${icon}-${i}`} onClick={()=>onSwitch(icon)} className={classname}/>);
        });
    };
    const classname = classnames(theme.iconswitcher, className);
    return (<span className={classname} {...other}>{renderIcons()}</span>);
};
IconSwitcher.propTypes = {
    active: PropTypes.string,
    children: PropTypes.any,
    className: PropTypes.string,
    icons: PropTypes.arrayOf(PropTypes.string),
    onSwitch: PropTypes.func,
    theme: PropTypes.object
};
const factory = () => IconSwitcher;
export default themr(ICONSWITCHER)(IconSwitcher);
export {factory as IconSwitcherFactory};
export {IconSwitcher};
