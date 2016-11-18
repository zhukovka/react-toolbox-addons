'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _table = require('react-toolbox/lib/table');

var _table2 = _interopRequireDefault(_table);

var _dropdown = require('react-toolbox/lib/dropdown');

var _dropdown2 = _interopRequireDefault(_dropdown);

var _button = require('react-toolbox/lib/button');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ARROW_LEFT = 'keyboard_arrow_left';
var ARROW_RIGHT = 'keyboard_arrow_right';

var Pagination = function (_Component) {
    _inherits(Pagination, _Component);

    function Pagination(props) {
        _classCallCheck(this, Pagination);

        var _this = _possibleConstructorReturn(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).call(this, props));

        _this.state = {
            items: props.source,
            max: 10,
            startIndex: 0,
            selected: []
        };
        return _this;
    }

    _createClass(Pagination, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _state = this.state;
            var startIndex = _state.startIndex;
            var max = _state.max;
            var source = this.props.source;

            this.setState({
                items: source.slice(startIndex, max)
            });
        }
    }, {
        key: 'getItemsByIndex',
        value: function getItemsByIndex(startIndex) {
            var max = this.state.max;
            var source = this.props.source;

            this.setState({
                items: source.slice(startIndex, startIndex + max),
                startIndex: startIndex
            });
        }
    }, {
        key: 'renderActions',
        value: function renderActions() {
            var _state2 = this.state;
            var startIndex = _state2.startIndex;
            var max = _state2.max;
            var source = this.props.source;

            var actions = [{
                icon: ARROW_LEFT,
                onClick: this.getItemsByIndex.bind(this, startIndex - max),
                disabled: startIndex === 0
            }, {
                icon: ARROW_RIGHT,
                onClick: this.getItemsByIndex.bind(this, startIndex + max),
                disabled: startIndex + max >= source.length
            }];
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_button.IconButton, actions[0]),
                _react2.default.createElement(_button.IconButton, actions[1])
            );
        }
    }, {
        key: 'renderDropDown',
        value: function renderDropDown() {
            var _this2 = this;

            var startIndex = this.state.startIndex;
            var source = this.props.source;

            var _s = [{
                value: 10,
                label: '10'
            }, {
                value: 20,
                label: '20'
            }];
            return _react2.default.createElement(_dropdown2.default, { source: _s, onChange: function onChange(val) {
                    _this2.setState({
                        max: val,
                        items: source.slice(startIndex, startIndex + val)
                    });
                } });
        }
    }, {
        key: 'renderPagination',
        value: function renderPagination() {
            var _state3 = this.state;
            var startIndex = _state3.startIndex;
            var max = _state3.max;
            var source = this.props.source;

            var msg = 'Start with ' + (startIndex === 0 ? 1 : startIndex) + ' - ' + (startIndex + max > source.length ? source.length : startIndex + max) + ' / ' + source.length;
            var _span = _react2.default.createElement(
                'span',
                null,
                msg
            );
            var _dd = this.renderDropDown();
            return _react2.default.createElement(
                'div',
                null,
                _span,
                _dd,
                this.renderActions()
            );
        }
    }, {
        key: 'handleSelect',
        value: function handleSelect(selected) {
            this.setState({
                selected: selected
            });
        }
    }, {
        key: 'handleOnChange',
        value: function handleOnChange(el, key, s) {
            console.log(el, key, s);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_table2.default, {
                    source: this.state.items,
                    onSelect: this.handleSelect.bind(this),
                    model: this.props.model,
                    selected: this.state.selected,
                    selectable: true,
                    multiSelectable: true,
                    onChange: this.handleOnChange.bind(this)
                }),
                this.renderPagination()
            );
        }
    }]);

    return Pagination;
}(_react.Component);

Pagination.propTypes = {
    source: _react.PropTypes.array,
    onSelect: _react.PropTypes.func

};
exports.default = Pagination;