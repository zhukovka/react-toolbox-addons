'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RTBoxHeader = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _card = require('react-toolbox/lib/card');

var _button = require('react-toolbox/lib/button');

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RTBoxHeader = function (_Component) {
    _inherits(RTBoxHeader, _Component);

    function RTBoxHeader() {
        _classCallCheck(this, RTBoxHeader);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(RTBoxHeader).apply(this, arguments));
    }

    _createClass(RTBoxHeader, [{
        key: 'render',
        value: function render() {
            var _props = this.props;
            var buttons = _props.buttons;

            var other = _objectWithoutProperties(_props, ['buttons']);

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _card.CardTitle,
                    other,
                    _react2.default.createElement(
                        'div',
                        null,
                        buttons.map(function (btn, index) {
                            return _react2.default.createElement(_button2.default, { key: index, icon: btn.icon, onClick: btn.handler });
                        })
                    )
                )
            );
        }
    }]);

    return RTBoxHeader;
}(_react.Component);

RTBoxHeader.propTypes = {
    avatar: _react.PropTypes.string,
    buttons: _react.PropTypes.array.shape({
        icon: _react.PropTypes.string.isRequired,
        handler: _react.PropTypes.func.isRequired
    }),
    subtitle: _react.PropTypes.string,
    title: _react.PropTypes.string.isRequired
};
exports.RTBoxHeader = RTBoxHeader;