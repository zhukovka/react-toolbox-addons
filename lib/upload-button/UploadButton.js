'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RTUploadButton = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _button = require('react-toolbox/lib/button');

var _button2 = _interopRequireDefault(_button);

var _font_icon = require('react-toolbox/lib/font_icon');

var _font_icon2 = _interopRequireDefault(_font_icon);

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RTUploadButton = function (_Component) {
  _inherits(RTUploadButton, _Component);

  function RTUploadButton(props) {
    _classCallCheck(this, RTUploadButton);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(RTUploadButton).call(this, props));

    _this.state = {
      imageUrl: props.imageUrl || '',
      buttonHover: false
    };
    return _this;
  }

  _createClass(RTUploadButton, [{
    key: 'handleOnClick',
    value: function handleOnClick() {
      _reactDom2.default.findDOMNode(this.refs.fileInput).click();
    }
  }, {
    key: 'handleOnChange',
    value: function handleOnChange(e) {
      this.props.onUpload(e);
      this.refs.fileInput.value = '';
    }
  }, {
    key: 'handleMouseOver',
    value: function handleMouseOver(bool) {
      this.setState({
        buttonHover: bool
      });
    }
  }, {
    key: 'renderIcon',
    value: function renderIcon(icon) {
      var _props = this.props;
      var theme = _props.theme;
      var imageUrl = _props.imageUrl;
      var buttonHover = this.state.buttonHover;

      if (icon && !imageUrl && !buttonHover) {
        return _react2.default.createElement(
          _font_icon2.default,
          { className: theme[_constants.CSS_UPLOAD_BUTTON_ICON] },
          icon
        );
      } else if (icon && buttonHover) {
        return _react2.default.createElement(
          _font_icon2.default,
          { className: theme[_constants.CSS_UPLOAD_BUTTON_ICON_WHITE] },
          icon
        );
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _classnames;

      var _props2 = this.props;
      var theme = _props2.theme;
      var icon = _props2.icon;
      var children = _props2.children;
      var defaultClass = _props2.defaultClass;
      var className = _props2.className;
      var imageUrl = _props2.imageUrl;
      var buttonHover = this.state.buttonHover;

      var classes = (0, _classnames3.default)(theme[defaultClass], className);
      var buttonClasses = (0, _classnames3.default)((_classnames = {}, _defineProperty(_classnames, theme[_constants.CSS_UPLOAD_BUTTON_HOVER], buttonHover), _defineProperty(_classnames, theme[_constants.CSS_UPLOAD_BUTTON_BUTTON], !buttonHover), _classnames));
      return _react2.default.createElement(
        'div',
        { className: classes },
        _react2.default.createElement(
          _button2.default,
          { className: buttonClasses,
            onClick: this.handleOnClick.bind(this),
            onMouseEnter: this.handleMouseOver.bind(this, true),
            onMouseLeave: this.handleMouseOver.bind(this, false),
            style: {
              backgroundImage: 'url(' + imageUrl + ')',
              backgroundSize: 'cover'
            }
          },
          this.renderIcon(icon),
          children
        ),
        _react2.default.createElement('input', { ref: 'fileInput',
          type: 'file',
          onChange: this.handleOnChange.bind(this),
          style: { display: 'none' } })
      );
    }
  }]);

  return RTUploadButton;
}(_react.Component);

RTUploadButton.propTypes = {
  children: _react.PropTypes.any,
  className: _react.PropTypes.string,
  defaultClass: _react.PropTypes.string,
  onUpload: _react.PropTypes.func.isRequired,
  icon: _react.PropTypes.string,
  imageUrl: _react.PropTypes.string,
  theme: _react.PropTypes.object
};
RTUploadButton.defaultProps = {
  defaultClass: _constants.CSS_UPLOAD_BUTTON_SECTION
};
exports.RTUploadButton = RTUploadButton;