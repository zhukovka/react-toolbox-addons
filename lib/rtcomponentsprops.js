'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.InputProps = exports.CardMediaProps = exports.SidebarProps = exports.NavDrawerProps = exports.ButtonProps = undefined;

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

var CardMediaProps = exports.CardMediaProps = {
    aspectRatio: _react.PropTypes.oneOf(['wide', 'square']),
    children: _react.PropTypes.any,
    className: _react.PropTypes.string,
    color: _react.PropTypes.string,
    contentOverlay: _react.PropTypes.bool,
    image: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]),
    theme: _react.PropTypes.shape({
        cardMedia: _react.PropTypes.string,
        content: _react.PropTypes.string,
        contentOverlay: _react.PropTypes.string,
        square: _react.PropTypes.string,
        wide: _react.PropTypes.string
    })
};

var InputProps = exports.InputProps = {
    children: _react.PropTypes.any,
    className: _react.PropTypes.string,
    disabled: _react.PropTypes.bool,
    error: _react.PropTypes.string,
    floating: _react.PropTypes.bool,
    hint: _react.PropTypes.string,
    icon: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]),
    label: _react.PropTypes.string,
    maxLength: _react.PropTypes.number,
    multiline: _react.PropTypes.bool,
    name: _react.PropTypes.string,
    onBlur: _react.PropTypes.func,
    onChange: _react.PropTypes.func,
    onFocus: _react.PropTypes.func,
    onKeyPress: _react.PropTypes.func,
    required: _react.PropTypes.bool,
    theme: _react.PropTypes.shape({
        bar: _react.PropTypes.string,
        counter: _react.PropTypes.string,
        disabled: _react.PropTypes.string,
        error: _react.PropTypes.string,
        errored: _react.PropTypes.string,
        hidden: _react.PropTypes.string,
        hint: _react.PropTypes.string,
        icon: _react.PropTypes.string,
        input: _react.PropTypes.string,
        inputElement: _react.PropTypes.string,
        required: _react.PropTypes.string,
        withIcon: _react.PropTypes.string
    }),
    type: _react.PropTypes.string,
    value: _react.PropTypes.any
};