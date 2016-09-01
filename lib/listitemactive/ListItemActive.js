'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ListItemActive = exports.listItemActiveFactory = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactCssThemr = require('react-css-themr');

var _identifiers = require('../identifiers.js');

var _Input = require('react-toolbox/lib/input/Input.js');

var _Input2 = _interopRequireDefault(_Input);

var _FlexList2 = require('../flexlist/FlexList.js');

var _FlexList3 = _interopRequireDefault(_FlexList2);

var _theme = require('./theme.scss');

var _theme2 = _interopRequireDefault(_theme);

var _app_bar = require('react-toolbox/lib/app_bar');

var _app_bar2 = _interopRequireDefault(_app_bar);

var _navigation = require('react-toolbox/lib/navigation');

var _navigation2 = _interopRequireDefault(_navigation);

var _list = require('react-toolbox/lib/list');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // import React, {PropTypes} from 'react';
// import FlexList from '../flexlist/FlexList.js';
// import {themr} from 'react-css-themr';
// import {LISTITEMACTIVE} from '../identifiers';
// import classnames from 'classnames';
// import InjectInput from 'react-toolbox/lib/input/Input.js';
// import { ListItem } from 'react-toolbox/lib/list';
// import theme from './theme.scss';

// const factory = (ListItem) => {
//     class ListItemActive extends FlexList {
//         static propTypes = {
//             theme: PropTypes.shape({
//                 active: PropTypes.string
//             })
//         };
//         constructor (props) {
//             super(props);
//         }
//
//         render () {
//             const _className = classnames(className, theme['active']);
//             return (
//                 <li key="plus-item" className={_className}>
//                     Active list item
//                 </li>);
//         }
//     }
// }

// const ListItemActive = factory(InjectInput);
// export default themr(LISTITEMACTIVE)(ListItemActive);
// export {factory as ListItemActiveFactory};
// export default {ListItemActive};

var factory = function factory(ListItem) {
    var ListItemActive = function (_FlexList) {
        _inherits(ListItemActive, _FlexList);

        function ListItemActive(props) {
            _classCallCheck(this, ListItemActive);

            return _possibleConstructorReturn(this, Object.getPrototypeOf(ListItemActive).call(this, props));
        }

        _createClass(ListItemActive, [{
            key: 'renderItems',
            value: function renderItems() {
                return _react2.default.createElement(
                    _list.List,
                    { className: { border: '5px solid' } },
                    _react2.default.createElement(
                        ListItem,
                        null,
                        _react2.default.createElement(
                            'a',
                            { href: '#' },
                            '11'
                        )
                    ),
                    _react2.default.createElement(
                        ListItem,
                        { className: _theme2.default.active },
                        _react2.default.createElement(
                            'a',
                            { href: '#' },
                            '222'
                        )
                    ),
                    _react2.default.createElement(
                        ListItem,
                        null,
                        _react2.default.createElement(
                            'a',
                            { href: '#' },
                            '333'
                        )
                    )
                );
            }
        }, {
            key: 'render',
            value: function render() {

                return _react2.default.createElement(
                    _app_bar2.default,
                    { fixed: true, flat: true },
                    _react2.default.createElement(
                        'a',
                        { href: '/home' },
                        'React Toolbox Docs'
                    ),
                    _react2.default.createElement(
                        _navigation2.default,
                        null,
                        this.renderItems()
                    )
                );
            }
        }]);

        return ListItemActive;
    }(_FlexList3.default);

    ListItemActive.propTypes = {
        theme: _react.PropTypes.shape({
            active: _react.PropTypes.string
        })
    };

    return ListItemActive;
};
//
var ListItemActive = factory(_Input2.default);
exports.default = (0, _reactCssThemr.themr)(_identifiers.LISTITEMACTIVE)(ListItemActive);
exports.listItemActiveFactory = factory;
exports.ListItemActive = ListItemActive;
// export default DropdownPlus;