'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _table = require('react-toolbox/lib/table');

var _table2 = _interopRequireDefault(_table);

var _dropdown = require('react-toolbox/lib/dropdown');

var _dropdown2 = _interopRequireDefault(_dropdown);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _constants = require('./constants.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableWithPagination = function (_Component) {
    _inherits(TableWithPagination, _Component);

    function TableWithPagination(props) {
        _classCallCheck(this, TableWithPagination);

        var _this = _possibleConstructorReturn(this, (TableWithPagination.__proto__ || Object.getPrototypeOf(TableWithPagination)).call(this, props));

        _this.state = {
            items: props.source,
            startIndex: 0,
            max: 10
        };
        return _this;
    }

    _createClass(TableWithPagination, [{
        key: 'renderDropDown',
        value: function renderDropDown() {
            var _this2 = this;

            var source = [{
                value: 5,
                label: '5'
            }, {
                value: 10,
                label: '10'
            }, {
                value: 15,
                label: '15'
            }, {
                value: 20,
                label: '20'
            }];
            return _react2.default.createElement(_dropdown2.default, {
                source: source,
                onChange: function onChange(val) {
                    _this2.setState({ max: val });
                }
            });
        }
    }, {
        key: 'renderPagination',
        value: function renderPagination() {
            var _state = this.state;
            var max = _state.max;
            var startIndex = _state.startIndex;

            var pagination = (startIndex === 0 ? 1 : startIndex) + ' / ' + max;
            var span = _constants.SPAN_TEXT + pagination;
            return _react2.default.createElement(
                'div',
                null,
                span,
                this.renderDropDown()
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props;
            var className = _props.className;
            var theme = _props.theme;

            var props = _objectWithoutProperties(_props, ['className', 'theme']);

            var items = this.state.items;

            var cls = (0, _classnames2.default)(theme.tableWithPagination, className);
            return _react2.default.createElement(
                'div',
                { className: cls },
                _react2.default.createElement(_table2.default, _extends({}, props, { source: items })),
                _react2.default.createElement('div', { className: theme.pagination })
            );
        }
    }]);

    return TableWithPagination;
}(_react.Component);

TableWithPagination.propTypes = {
    theme: _react.PropTypes.object,
    source: _react.PropTypes.array,
    className: _react.PropTypes.string
};
exports.default = TableWithPagination;