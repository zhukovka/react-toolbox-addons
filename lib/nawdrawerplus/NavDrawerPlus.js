'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NavDrawerPlus = exports.navDrawerPlusFactory = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactCssThemr = require('react-css-themr');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _index = require('../card-addons/index');

var _identifiers = require('../identifiers');

var _reactToolbox = require('react-toolbox');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory() {
    var NavDrawerPlus = function (_Component) {
        _inherits(NavDrawerPlus, _Component);

        function NavDrawerPlus(props) {
            _classCallCheck(this, NavDrawerPlus);

            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(NavDrawerPlus).call(this, props));

            _this.state = {
                active: _this.props.active,
                pinned: _this.props.pinned
            };
            return _this;
        }

        _createClass(NavDrawerPlus, [{
            key: 'componentWillReceiveProps',
            value: function componentWillReceiveProps(nextProps) {
                var active = nextProps.active;
                var pinned = nextProps.pinned;

                this.setState({ active: active, pinned: pinned });
            }
        }, {
            key: 'toggleDrawer',
            value: function toggleDrawer() {
                this.setState({
                    active: !this.state.active,
                    pinned: !this.state.pinned
                });
            }
        }, {
            key: 'render',
            value: function render() {
                var _props = this.props;
                var title = _props.title;
                var children = _props.children;
                var theme = _props.theme;
                var className = _props.className;
                var _state = this.state;
                var active = _state.active;
                var pinned = _state.pinned;

                var btns = [{ icon: 'close', onClick: this.toggleDrawer.bind(this) }];
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
            }
        }]);

        return NavDrawerPlus;
    }(_react.Component);

    NavDrawerPlus.propTypes = {
        active: _react.PropTypes.bool,
        children: _react.PropTypes.any,
        className: _react.PropTypes.string,
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