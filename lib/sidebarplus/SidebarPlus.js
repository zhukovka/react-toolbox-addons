'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SidebarPlus = exports.sidebarPlusFactory = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactCssThemr = require('react-css-themr');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _identifiers = require('../identifiers');

var _reactToolbox = require('react-toolbox');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory() {
    var SidebarPlus = function (_Component) {
        _inherits(SidebarPlus, _Component);

        function SidebarPlus(props) {
            _classCallCheck(this, SidebarPlus);

            return _possibleConstructorReturn(this, (SidebarPlus.__proto__ || Object.getPrototypeOf(SidebarPlus)).call(this, props));
        }

        _createClass(SidebarPlus, [{
            key: 'render',
            value: function render() {
                var _props = this.props,
                    title = _props.title,
                    children = _props.children,
                    theme = _props.theme,
                    pinned = _props.pinned,
                    className = _props.className;

                var classes = (0, _classnames2.default)(theme.sidebarPlus, className);
                return _react2.default.createElement(
                    _reactToolbox.Sidebar,
                    { pinned: pinned, width: 5, theme: theme, className: classes },
                    _react2.default.createElement(
                        _reactToolbox.AppBar,
                        { theme: theme },
                        _react2.default.createElement(
                            'h5',
                            null,
                            title
                        )
                    ),
                    children
                );
            }
        }]);

        return SidebarPlus;
    }(_react.Component);

    SidebarPlus.propTypes = {
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
        title: _react.PropTypes.string,
        width: _react.PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 25, 33, 50, 66, 75, 100])
    };


    return SidebarPlus;
};
var SidebarPlus = factory();
exports.default = (0, _reactCssThemr.themr)(_identifiers.SIDEBAR_PLUS)(SidebarPlus);
exports.sidebarPlusFactory = factory;
exports.SidebarPlus = SidebarPlus;