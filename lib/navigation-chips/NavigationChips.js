'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RTNavigationChips = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _chip = require('react-toolbox/lib/chip');

var _avatar = require('react-toolbox/lib/avatar');

var _grid = require('../../lib/grid');

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RTNavigationChips = function (_Component) {
    _inherits(RTNavigationChips, _Component);

    function RTNavigationChips() {
        _classCallCheck(this, RTNavigationChips);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(RTNavigationChips).apply(this, arguments));
    }

    _createClass(RTNavigationChips, [{
        key: 'renderNavigationChip',
        value: function renderNavigationChip() {
            var chip = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
            var _props = this.props;
            var theme = _props.theme;
            var currentIndex = _props.currentIndex;
            var headers = _props.headers;

            var _chipIndex = chip.index + 1;
            var getAvatarClass = _chipIndex <= currentIndex || 0 ? theme[_constants.CSS_HEADER_CHIP_AVATAR] + ' ' + theme[_constants.CSS_HEADER_CHIP_AVATAR_ACTIVE] : theme[_constants.CSS_HEADER_CHIP_AVATAR];
            var getAvatarIcon = _chipIndex < currentIndex || 0 ? _constants.ICON_DONE : '';
            var getLineClass = _chipIndex !== headers.length && theme[_constants.CSS_HEADER_CHIP_LINE];
            return _react2.default.createElement(
                _chip.Chip,
                { key: chip.index, className: theme[_constants.CSS_HEADER_CHIP] },
                _react2.default.createElement(
                    _avatar.Avatar,
                    { className: getAvatarClass,
                        icon: getAvatarIcon },
                    !getAvatarIcon && _chipIndex
                ),
                _react2.default.createElement(
                    'span',
                    { className: getLineClass },
                    chip.header
                )
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var headers = this.props.headers;

            return _react2.default.createElement(
                _grid.Row,
                { expanded: true },
                headers.map(function (header, index) {
                    return _react2.default.createElement(
                        _grid.Col,
                        { key: index, shrink: headers.length === index + 1 && 'true' },
                        _this2.renderNavigationChip({ header: header, index: index })
                    );
                })
            );
        }
    }]);

    return RTNavigationChips;
}(_react.Component);

RTNavigationChips.propTypes = {
    currentIndex: _react.PropTypes.number,
    headers: _react.PropTypes.array.isRequired,
    theme: _react.PropTypes.object.isRequired
};
exports.RTNavigationChips = RTNavigationChips;