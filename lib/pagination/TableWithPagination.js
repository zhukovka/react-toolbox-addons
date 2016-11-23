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

var _button = require('react-toolbox/lib/button');

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
                value: 10,
                label: '10'
            }, {
                value: 15,
                label: '15'
            }, {
                value: 25,
                label: '20'
            }, {
                value: 50,
                label: '50'
            }, {
                value: 100,
                label: '100'
            }].filter(function (el) {
                return el.value < _this2.props.source.length;
            });
            return _react2.default.createElement(_dropdown2.default, {
                source: source,
                value: this.state.max,
                onChange: function onChange(val) {
                    _this2.setState({ max: val });
                }
            });
        }
    }, {
        key: 'renderPagination',
        value: function renderPagination() {
            var _state = this.state,
                max = _state.max,
                startIndex = _state.startIndex;
            var _props = this.props,
                source = _props.source,
                theme = _props.theme;

            if (source.length > 10) {
                var pagination = (startIndex === 0 ? 1 : startIndex) + '-' + (startIndex + max > source.length ? source.length : startIndex + max) + ' of ' + source.length;
                var span = _constants.SPAN_TEXT + pagination;
                return _react2.default.createElement(
                    'div',
                    { className: theme.pagination },
                    _react2.default.createElement(
                        'span',
                        null,
                        _constants.SPAN_TEXT
                    ),
                    this.renderDropDown(),
                    _react2.default.createElement(
                        'span',
                        null,
                        pagination
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: theme.controls },
                        this.renderControls()
                    )
                );
            }
        }
    }, {
        key: 'handleIndexChange',
        value: function handleIndexChange(e, startIndex) {
            e.preventDefault();
            this.setState({
                startIndex: startIndex
            });
        }
    }, {
        key: 'renderControls',
        value: function renderControls() {
            var _this3 = this;

            var _state2 = this.state,
                max = _state2.max,
                startIndex = _state2.startIndex;
            var source = this.props.source;

            var actions = [{
                icon: _constants.ARROW_LEFT,
                onClick: function onClick(e) {
                    return _this3.handleIndexChange(e, startIndex - max);
                },
                disabled: startIndex === 0
            }, {
                icon: _constants.ARROW_RIGHT,
                onClick: function onClick(e) {
                    return _this3.handleIndexChange(e, startIndex + max);
                },
                disabled: startIndex + max >= source.length
            }];
            return actions.map(function (elProps, index) {
                return _react2.default.createElement(_button.IconButton, _extends({ key: 'paginationControl ' + index }, elProps));
            });
        }
    }, {
        key: 'renderSource',
        value: function renderSource() {
            var _state3 = this.state,
                max = _state3.max,
                startIndex = _state3.startIndex;
            var source = this.props.source;

            if (source.length > 10) {
                return source.slice(startIndex, startIndex + max);
            } else {
                return source;
            }
        }
    }, {
        key: 'handleOnSelect',
        value: function handleOnSelect(select) {
            console.log(select);
            this.props.onSelect(this.transformIndexes(true, select));
        }
    }, {
        key: 'transformIndexes',
        value: function transformIndexes(type) {
            var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
            var startIndex = this.state.startIndex;

            var transformedSource = [];
            if (type) {
                transformedSource = source.map(function (i) {
                    return i + startIndex;
                });
            }
            if (!type) {
                transformedSource = source.map(function (i) {
                    return i - startIndex;
                });
            }
            return transformedSource;
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                className = _props2.className,
                theme = _props2.theme,
                props = _objectWithoutProperties(_props2, ['className', 'theme']);

            var cls = (0, _classnames2.default)(theme.tableWithPagination, className);
            return _react2.default.createElement(
                'div',
                { className: cls },
                _react2.default.createElement(_table2.default, _extends({}, props, { onSelect: this.handleOnSelect.bind(this), source: this.renderSource(),
                    selected: this.transformIndexes(false, this.props.selected),
                    className: cls
                })),
                this.renderPagination()
            );
        }
    }]);

    return TableWithPagination;
}(_react.Component);

TableWithPagination.propTypes = {
    className: _react.PropTypes.string,
    onSelect: _react.PropTypes.func,
    selected: _react.PropTypes.array,
    source: _react.PropTypes.array,
    theme: _react.PropTypes.object
};
exports.default = TableWithPagination;