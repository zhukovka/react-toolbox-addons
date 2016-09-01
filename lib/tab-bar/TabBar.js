'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TabBar = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _flexlist = require('../flexlist');

var _constants = require('./constants');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TabBar = function (_Component) {
    _inherits(TabBar, _Component);

    function TabBar(props) {
        _classCallCheck(this, TabBar);

        return _possibleConstructorReturn(this, (TabBar.__proto__ || Object.getPrototypeOf(TabBar)).call(this, props));
    }

    _createClass(TabBar, [{
        key: 'render',
        value: function render() {
            var _props = this.props;
            var theme = _props.theme;
            var className = _props.className;
            var children = _props.children;

            var classes = (0, _classnames2.default)(theme[_constants.TAB_BAR], className);
            return _react2.default.createElement(
                _flexlist.FlexList,
                { className: classes },
                children
            );
        }
    }]);

    return TabBar;
}(_react.Component);

TabBar.propTypes = {
    children: _react.PropTypes.any,
    className: _react.PropTypes.string,
    theme: _react.PropTypes.object
};

exports.TabBar = TabBar;
exports.default = TabBar;