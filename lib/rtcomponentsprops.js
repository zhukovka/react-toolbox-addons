'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SidebarProps = exports.NavDrawerProps = exports.ButtonProps = undefined;

var _react = require('react');

var ButtonProps = exports.ButtonProps = _react.PropTypes.shape({
    accent: _react.PropTypes.bool,
    children: _react.PropTypes.node,
    className: _react.PropTypes.string,
    disabled: _react.PropTypes.bool,
    flat: _react.PropTypes.bool,
    floating: _react.PropTypes.bool,
    href: _react.PropTypes.string,
    icon: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]),
    inverse: _react.PropTypes.bool,
    label: _react.PropTypes.string,
    mini: _react.PropTypes.bool,
    neutral: _react.PropTypes.bool,
    onMouseLeave: _react.PropTypes.func,
    onMouseUp: _react.PropTypes.func,
    primary: _react.PropTypes.bool,
    raised: _react.PropTypes.bool,
    theme: _react.PropTypes.shape({
        accent: _react.PropTypes.string,
        button: _react.PropTypes.string,
        flat: _react.PropTypes.string,
        floating: _react.PropTypes.string,
        icon: _react.PropTypes.string,
        inverse: _react.PropTypes.string,
        mini: _react.PropTypes.string,
        neutral: _react.PropTypes.string,
        primary: _react.PropTypes.string,
        raised: _react.PropTypes.string,
        rippleWrapper: _react.PropTypes.string,
        toggle: _react.PropTypes.string
    }),
    type: _react.PropTypes.string
});

var NavDrawerProps = exports.NavDrawerProps = _react.PropTypes.shape({
    active: _react.PropTypes.bool,
    children: _react.PropTypes.any,
    className: _react.PropTypes.string,
    onOverlayClick: _react.PropTypes.func,
    permanentAt: _react.PropTypes.oneOf(['sm', 'md', 'lg', 'xl', 'xxl', 'xxxl']),
    pinned: _react.PropTypes.bool,
    scrollY: _react.PropTypes.bool,
    theme: _react.PropTypes.shape({
        active: _react.PropTypes.string,
        drawerContent: _react.PropTypes.string,
        lgPermanent: _react.PropTypes.string,
        mdPermanent: _react.PropTypes.string,
        navDrawer: _react.PropTypes.string,
        pinned: _react.PropTypes.string,
        scrim: _react.PropTypes.string,
        scrollY: _react.PropTypes.string,
        smPermanent: _react.PropTypes.string,
        wide: _react.PropTypes.string,
        xlPermanent: _react.PropTypes.string,
        xxlPermanent: _react.PropTypes.string,
        xxxlPermanent: _react.PropTypes.string
    }),
    width: _react.PropTypes.oneOf(['normal', 'wide'])
});

var SidebarProps = exports.SidebarProps = _react.PropTypes.shape({
    children: _react.PropTypes.any,
    className: _react.PropTypes.string,
    pinned: _react.PropTypes.bool,
    scrollY: _react.PropTypes.bool,
    theme: _react.PropTypes.shape({
        pinned: _react.PropTypes.string,
        scrollY: _react.PropTypes.string,
        sidebar: _react.PropTypes.string,
        sidebarContent: _react.PropTypes.string
    }),
    width: _react.PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 25, 33, 50, 66, 75, 100])
});