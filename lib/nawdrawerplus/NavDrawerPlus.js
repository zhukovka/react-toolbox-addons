'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NavDrawerPlus = exports.navDrawerPlusFactory = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactCssThemr = require('react-css-themr');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _index = require('../card-addons/index');

var _identifiers = require('../identifiers');

var _reactToolbox = require('react-toolbox');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var factory = function factory() {
    var NavDrawerPlus = function NavDrawerPlus(_ref) {
        var title = _ref.title;
        var children = _ref.children;
        var theme = _ref.theme;
        var className = _ref.className;
        var _onClick = _ref.onClick;
        var active = _ref.active;
        var pinned = _ref.pinned;


        var btns = [{ icon: 'close', onClick: function onClick(e) {
                return _onClick(e);
            } }];
        var classes = (0, _classnames2.default)(className, theme.navDrawerPlus);
        return _react2.default.createElement(
            _reactToolbox.NavDrawer,
            { active: active, pinned: pinned, theme: theme, className: classes },
            _react2.default.createElement(
                _reactToolbox.AppBar,
                { theme: theme },
                _react2.default.createElement(
                    'h5',
                    null,
                    title
                ),
                _react2.default.createElement(_index.CardTitleButtons, { center: true, buttons: btns })
            ),
            children
        );
    };
    NavDrawerPlus.propTypes = {
        active: _react.PropTypes.bool,
        children: _react.PropTypes.any,
        className: _react.PropTypes.string,
        onClick: _react.PropTypes.func,
        onOverlayClick: _react.PropTypes.func,
        permanentAt: _react.PropTypes.oneOf(['sm', 'md', 'lg', 'xl', 'xxl', 'xxxl']),
        pinned: _react.PropTypes.bool,
        primary: _react.PropTypes.bool,
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
        title: _react.PropTypes.string,
        width: _react.PropTypes.oneOf(['normal', 'wide'])
    };
    return NavDrawerPlus;
};
var NavDrawerPlus = factory();
exports.default = (0, _reactCssThemr.themr)(_identifiers.NAVDRAWER_PLUS)(NavDrawerPlus);
exports.navDrawerPlusFactory = factory;
exports.NavDrawerPlus = NavDrawerPlus;