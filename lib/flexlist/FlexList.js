'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FlexList = exports.flexlistFactory = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames3 = require('classnames');

var _classnames4 = _interopRequireDefault(_classnames3);

var _reactCssThemr = require('react-css-themr');

var _identifiers = require('../identifiers.js');

var _ListItem = require('react-toolbox/lib/list/ListItem.js');

var _ListItem2 = _interopRequireDefault(_ListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory(ListItem) {
    var FlexList = function (_Component) {
        _inherits(FlexList, _Component);

        function FlexList() {
            _classCallCheck(this, FlexList);

            return _possibleConstructorReturn(this, (FlexList.__proto__ || Object.getPrototypeOf(FlexList)).apply(this, arguments));
        }

        _createClass(FlexList, [{
            key: 'renderItems',
            value: function renderItems() {
                var _props = this.props;
                var children = _props.children;
                var theme = _props.theme;
                var ripple = _props.ripple;
                var selectable = _props.selectable;
                var width = _props.width;

                return _react2.default.Children.map(children, function (item) {
                    var clone = void 0;
                    if (item.type === ListItem) {
                        clone = _react2.default.cloneElement(item, {
                            ripple: ripple,
                            selectable: selectable,
                            theme: theme
                        });
                    } else {
                        clone = _react2.default.cloneElement(item, {
                            className: (0, _classnames4.default)(_defineProperty({}, theme.flexlist_item, width)),
                            style: { width: width }
                        });
                    }
                    return clone;
                });
            }
        }, {
            key: 'render',
            value: function render() {
                var _classnames2;

                var _props2 = this.props;
                var children = _props2.children;
                var theme = _props2.theme;
                var ripple = _props2.ripple;
                var selectable = _props2.selectable;
                var width = _props2.width;
                var align = _props2.align;
                var auto = _props2.auto;
                var className = _props2.className;
                var small = _props2.small;
                var inverse = _props2.inverse;
                var wrap = _props2.wrap;

                var other = _objectWithoutProperties(_props2, ['children', 'theme', 'ripple', 'selectable', 'width', 'align', 'auto', 'className', 'small', 'inverse', 'wrap']); //eslint-disable-line no-unused-vars


                var classes = (0, _classnames4.default)([theme.flexlist, theme[align]], (_classnames2 = {}, _defineProperty(_classnames2, theme.inverse, inverse), _defineProperty(_classnames2, theme.wrap, wrap), _defineProperty(_classnames2, theme.auto, auto), _defineProperty(_classnames2, theme.small, small), _classnames2), className);
                return _react2.default.createElement(
                    'ul',
                    _extends({ 'data-react-toolbox': 'flexlist',
                        className: classes
                    }, other),
                    this.renderItems()
                );
            }
        }]);

        return FlexList;
    }(_react.Component);

    FlexList.propTypes = {
        align: _react.PropTypes.oneOf(['right', 'space-between', 'space-around', 'center']),
        auto: _react.PropTypes.bool,
        children: _react.PropTypes.node,
        className: _react.PropTypes.string,
        flexlist: _react.PropTypes.string,
        inverse: _react.PropTypes.bool,
        ripple: _react.PropTypes.bool,
        selectable: _react.PropTypes.bool,
        small: _react.PropTypes.bool,
        theme: _react.PropTypes.shape({}),
        width: _react.PropTypes.string,
        wrap: _react.PropTypes.bool
    };
    FlexList.defaultProps = {
        className: '',
        ripple: false,
        selectable: false,
        wrap: true
    };


    return FlexList;
};

var FlexList = factory(_ListItem2.default);
exports.default = (0, _reactCssThemr.themr)(_identifiers.FLEXLIST)(FlexList);
exports.flexlistFactory = factory;
exports.FlexList = FlexList;