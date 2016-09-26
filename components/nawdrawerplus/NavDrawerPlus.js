import React, {PropTypes} from 'react';
import {themr} from 'react-css-themr';
import classnames from 'classnames';
import {CardTitleButtons} from '../card-addons/index';
import {NAVDRAWER_PLUS} from '../identifiers';
import {NavDrawer, AppBar} from 'react-toolbox';
import {ButtonProps} from '../rtcomponentsprops';

const factory = () => {
    const NavDrawerPlus = ({title, children, theme, className, onClick, openState, pinned, buttons})=> {
        const btns = [...(buttons || []), {icon: 'close', onClick: (e)=>onClick(e)}];
        const classes = classnames(className, theme.navDrawerPlus, {[theme.preview]: openState === NavDrawerPlus.PREVIEW});
        return (
            <NavDrawer active={openState === NavDrawerPlus.OPEN} pinned={pinned} theme={theme} className={classes}>
                <AppBar theme={theme}>
                    <h5>
                        {title}
                    </h5>
                    <CardTitleButtons center buttons={btns}/>
                </AppBar>
                {children}
            </NavDrawer>
        );
    };
    NavDrawerPlus.propTypes = {
        active: PropTypes.bool,
        buttons: PropTypes.arrayOf(ButtonProps),
        children: PropTypes.any,
        className: PropTypes.string,
        onClick: PropTypes.func,
        onOverlayClick: PropTypes.func,
        openState: PropTypes.oneOf([0, 1, 2]),
        permanentAt: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', 'xxl', 'xxxl']),
        pinned: PropTypes.bool,
        primary: PropTypes.bool,
        scrollY: PropTypes.bool,
        theme: PropTypes.shape({
            active: PropTypes.string,
            drawerContent: PropTypes.string,
            lgPermanent: PropTypes.string,
            mdPermanent: PropTypes.string,
            navDrawer: PropTypes.string,
            pinned: PropTypes.string,
            scrim: PropTypes.string,
            scrollY: PropTypes.string,
            smPermanent: PropTypes.string,
            wide: PropTypes.string,
            xlPermanent: PropTypes.string,
            xxlPermanent: PropTypes.string,
            xxxlPermanent: PropTypes.string
        }),
        title: PropTypes.string,
        width: PropTypes.oneOf(['normal', 'wide'])
    };
    NavDrawerPlus.OPEN = 2;
    NavDrawerPlus.PREVIEW = 1;
    NavDrawerPlus.CLOSED = 0;
    return NavDrawerPlus;
};
const NavDrawerPlus = factory();
export default themr(NAVDRAWER_PLUS)(NavDrawerPlus);
export {factory as navDrawerPlusFactory};
export {NavDrawerPlus};
