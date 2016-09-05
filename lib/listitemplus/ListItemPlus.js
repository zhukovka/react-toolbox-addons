'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ListItemPlus = exports.listItemPlusFactory = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactCssThemr = require('react-css-themr');

var _list = require('react-toolbox/lib/list');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ListItem2 = require('react-toolbox/lib/list/ListItem.js');

var _ListItem3 = _interopRequireDefault(_ListItem2);

var _identifiers = require('../identifiers.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory(liItem) {
    var ListItemPlus = function (_ListItem) {
        _inherits(ListItemPlus, _ListItem);

        function ListItemPlus() {
            _classCallCheck(this, ListItemPlus);

            return _possibleConstructorReturn(this, Object.getPrototypeOf(ListItemPlus).apply(this, arguments));
        }

        _createClass(ListItemPlus, [{
            key: 'groupChildren',
            value: function groupChildren() {
                var children = {
                    leftActions: [],
                    rightActions: [],
                    ignored: []
                };

                _react2.default.Children.forEach(this.props.children, function (child, i) {
                    if (!_react2.default.isValidElement(child)) {
                        return;
                    }

                    var _child$props = child.props;
                    var listItemIgnore = _child$props.listItemIgnore;

                    var rest = _objectWithoutProperties(_child$props, ['listItemIgnore']);

                    var strippedChild = _extends({}, child, { props: rest });

                    if (listItemIgnore) {
                        children.ignored.push(strippedChild);
                        return;
                    }
                    if (child.type === ListItemContent) {
                        children.itemContent = strippedChild;
                        return;
                    }
                    var bucket = children.itemContent ? 'rightActions' : 'leftActions';
                    children[bucket].push(_extends({}, strippedChild, { key: i }));
                });

                return children;
            }
        }, {
            key: 'render',
            value: function render() {
                var _props = this.props;
                var className = _props.className;
                var onMouseDown = _props.onMouseDown;
                var to = _props.to;
                var onItemClick = _props.onItemClick;
                var hasRipple = _props.ripple;
                var theme = _props.theme;

                var other = _objectWithoutProperties(_props, ['className', 'onMouseDown', 'to', 'onItemClick', 'ripple', 'theme']); //eslint-disable-line no-unused-vars


                var _className = (0, _classnames2.default)(this.props.theme.listItem, this.props.theme[this.props.group]);

                var children = this.groupChildren();
                var content = _react2.default.createElement(_list.ListItemLayout, _extends({ theme: this.props.theme }, children, other));
                return _react2.default.createElement(
                    'li',
                    { className: theme.listItem + ' ' + _className, onClick: onItemClick, onMouseDown: onMouseDown },
                    to ? _react2.default.createElement(
                        'a',
                        { href: this.props.to },
                        content
                    ) : content,
                    children.ignored
                );
            }
        }]);

        return ListItemPlus;
    }(_list.ListItem);

    ListItemPlus.propTypes = {
        onItemClick: _react.PropTypes.func,
        group: _react.PropTypes.oneOf(['admin', 'orgAdmin', 'missionOwner', 'participant', 'observer'])
    };

    return ListItemPlus;
};
//
var ListItemPlus = factory(_ListItem3.default);
exports.default = (0, _reactCssThemr.themr)(_identifiers.LISTITEMPLUS)(ListItemPlus);
exports.listItemPlusFactory = factory;
exports.ListItemPlus = ListItemPlus;