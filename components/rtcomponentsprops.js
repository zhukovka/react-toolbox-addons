import {PropTypes} from 'react';
export const ButtonProps = PropTypes.shape({
    accent: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    flat: PropTypes.bool,
    floating: PropTypes.bool,
    href: PropTypes.string,
    icon: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
    ]),
    inverse: PropTypes.bool,
    label: PropTypes.string,
    mini: PropTypes.bool,
    neutral: PropTypes.bool,
    onMouseLeave: PropTypes.func,
    onMouseUp: PropTypes.func,
    primary: PropTypes.bool,
    raised: PropTypes.bool,
    theme: PropTypes.shape({
        accent: PropTypes.string,
        button: PropTypes.string,
        flat: PropTypes.string,
        floating: PropTypes.string,
        icon: PropTypes.string,
        inverse: PropTypes.string,
        mini: PropTypes.string,
        neutral: PropTypes.string,
        primary: PropTypes.string,
        raised: PropTypes.string,
        rippleWrapper: PropTypes.string,
        toggle: PropTypes.string
    }),
    type: PropTypes.string
});

export const NavDrawerProps = PropTypes.shape({
    active: PropTypes.bool,
    children: PropTypes.any,
    className: PropTypes.string,
    onOverlayClick: PropTypes.func,
    permanentAt: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', 'xxl', 'xxxl']),
    pinned: PropTypes.bool,
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
    width: PropTypes.oneOf(['normal', 'wide'])
});

export const SidebarProps = PropTypes.shape(
    {
        children: PropTypes.any,
        className: PropTypes.string,
        pinned: PropTypes.bool,
        scrollY: PropTypes.bool,
        theme: PropTypes.shape({
            pinned: PropTypes.string,
            scrollY: PropTypes.string,
            sidebar: PropTypes.string,
            sidebarContent: PropTypes.string
        }),
        width: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 25, 33, 50, 66, 75, 100])
    }
);

export const CardMediaProps = {
    aspectRatio: PropTypes.oneOf([ 'wide', 'square' ]),
    children: PropTypes.any,
    className: PropTypes.string,
    color: PropTypes.string,
    contentOverlay: PropTypes.bool,
    image: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
    ]),
    theme: PropTypes.shape({
        cardMedia: PropTypes.string,
        content: PropTypes.string,
        contentOverlay: PropTypes.string,
        square: PropTypes.string,
        wide: PropTypes.string
    })
};
