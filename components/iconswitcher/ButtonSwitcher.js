import React, {PropTypes} from 'react';
import classnames from 'classnames';
import {themr} from 'react-css-themr';
import {BUTTON_SWITCHER} from '../identifiers';
import {Button} from 'react-toolbox/lib/button';
import {IconSwitcher} from './IconSwitcher.js';
import {FontIcon} from 'react-toolbox/lib/font_icon';

const ButtonSwitcher = ({active, icons, labels, className, theme, onSwitch, ...other}) => {
    const renderIcons = ()=> {
        return icons.map((icon, i)=> {
            const classname = classnames(theme.button, {[theme.active]: icon === active});
            return (
                <Button theme={theme} key={`${icon}-${i}`} onClick={()=>onSwitch(icon)} className={classname}>
                    {labels[i]}
                    <FontIcon value={icon}/>
                </Button>
            );

        });
    };
    const classname = classnames(theme.buttonSwitcher, className);
    return (<span className={classname} {...other}>{renderIcons()}</span>);
};
ButtonSwitcher.propTypes = {
    active: PropTypes.string,
    children: PropTypes.any,
    className: PropTypes.string,
    icons: PropTypes.arrayOf(PropTypes.string),
    labels: PropTypes.arrayOf(PropTypes.string),
    onSwitch: PropTypes.func,
    theme: PropTypes.object
};
ButtonSwitcher.propTypes = IconSwitcher.propTypes;
ButtonSwitcher.propTypes.labels = PropTypes.arrayOf(PropTypes.string);
const factory = () => ButtonSwitcher;
export default themr(BUTTON_SWITCHER)(ButtonSwitcher);
export {factory as ButtonSwitcherFactory};
export {ButtonSwitcher};

