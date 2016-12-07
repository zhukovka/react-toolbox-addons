'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChatContent = function (_Component) {
    _inherits(ChatContent, _Component);

    function ChatContent(props) {
        _classCallCheck(this, ChatContent);

        return _possibleConstructorReturn(this, (ChatContent.__proto__ || Object.getPrototypeOf(ChatContent)).call(this, props));
    }

    _createClass(ChatContent, [{
        key: 'scrollDown',
        value: function scrollDown(content) {
            if (content) {
                content.scrollTop = content.scrollHeight;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props;
            var theme = _props.theme;
            var children = _props.children;
            var className = _props.className;

            return _react2.default.createElement(
                'div',
                { className: (0, _classnames2.default)(theme.chatContent, className) },
                _react2.default.createElement(
                    'div',
                    { className: theme.content, ref: this.scrollDown.bind(this) },
                    children[0]
                ),
                children.slice(1)
            );
        }
    }]);

    return ChatContent;
}(_react.Component);

ChatContent.propTypes = {
    children: _react.PropTypes.arrayOf(_react.PropTypes.element),
    className: _react.PropTypes.string,
    theme: _react.PropTypes.object
};

exports.default = ChatContent;