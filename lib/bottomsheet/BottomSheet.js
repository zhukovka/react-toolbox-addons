'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BottomSheet = exports.bottomsheetFactory = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _reactCssThemr = require('react-css-themr');

var _identifiers = require('../identifiers.js');

var _Overlay = require('react-toolbox/lib/overlay/Overlay.js');

var _Overlay2 = _interopRequireDefault(_Overlay);

var _IconButton = require('react-toolbox/lib/button/IconButton.js');

var _IconButton2 = _interopRequireDefault(_IconButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory(Overlay, IconButton) {
    var BottomSheet = function (_Component) {
        _inherits(BottomSheet, _Component);

        function BottomSheet() {
            var _Object$getPrototypeO;

            var _temp, _this, _ret;

            _classCallCheck(this, BottomSheet);

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(BottomSheet)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
                active: _this.props.active,
                dragging: false,
                bottom: 0,
                startTop: 0
            }, _temp), _possibleConstructorReturn(_this, _ret);
        }

        _createClass(BottomSheet, [{
            key: 'componentWillReceiveProps',
            value: function componentWillReceiveProps(nextProps) {
                if (nextProps.active !== this.state.active) {
                    this.setState({ active: nextProps.active, dragging: false, bottom: 0, startTop: 0 });
                }
            }
        }, {
            key: 'componentWillUnmount',
            value: function componentWillUnmount() {}
        }, {
            key: 'hideBottomsheet',
            value: function hideBottomsheet() {
                this.setState({ active: false, dragging: false });
            }
        }, {
            key: 'onMouseDown',
            value: function onMouseDown(e, icon) {
                if (!icon) {
                    this.setState({ dragging: true, startTop: e.clientY });
                }
            }
        }, {
            key: 'onMouseMove',
            value: function onMouseMove(e) {
                if (this.state.dragging) {
                    var deltaY = this.state.startTop - e.clientY;
                    var active = this.state.active;

                    if (deltaY < 0) {
                        if (deltaY < -50) {
                            active = false;
                        }
                        this.setState({ bottom: deltaY, active: active });
                    }
                }
            }
        }, {
            key: 'stopDragging',
            value: function stopDragging() {
                if (this.state.dragging && this.state.active) {
                    this.setState({ dragging: false, bottom: 0 });
                }
            }
        }, {
            key: 'render',
            value: function render() {
                var _this2 = this;

                var _props = this.props;
                var icon = _props.icon;
                var theme = _props.theme;
                var children = _props.children;
                var textColor = _props.textColor;
                var _state = this.state;
                var active = _state.active;
                var bottom = _state.bottom;

                var className = (0, _classnames3.default)(theme.bottomsheet, _defineProperty({}, theme.active, active), this.props.className);
                return _react2.default.createElement(
                    Overlay,
                    { invisible: true, onMouseLeave: function onMouseLeave() {
                            return _this2.stopDragging();
                        } },
                    _react2.default.createElement(
                        'div',
                        { 'data-react-toolbox': 'bottomsheet', className: className, style: { bottom: bottom },
                            onMouseDown: function onMouseDown(e) {
                                return _this2.onMouseDown(e, icon);
                            }, onMouseMove: function onMouseMove(e) {
                                return _this2.onMouseMove(e);
                            },
                            onMouseUp: function onMouseUp() {
                                return _this2.stopDragging();
                            } },
                        _react2.default.createElement(
                            'div',
                            { className: theme.bottomsheet__item, style: { color: textColor } },
                            children
                        ),
                        icon ? _react2.default.createElement(IconButton, { icon: icon, inverse: true, onClick: function onClick() {
                                return _this2.hideBottomsheet();
                            } }) : null
                    )
                );
            }
        }]);

        return BottomSheet;
    }(_react.Component);

    BottomSheet.propTypes = {
        active: _react.PropTypes.bool,
        children: _react.PropTypes.node,
        className: _react.PropTypes.string,
        icon: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.string]),
        style: _react.PropTypes.object,
        textColor: _react.PropTypes.string,
        theme: _react.PropTypes.shape({
            accept: _react.PropTypes.string,
            active: _react.PropTypes.string,
            button: _react.PropTypes.string,
            cancel: _react.PropTypes.string,
            icon: _react.PropTypes.string,
            label: _react.PropTypes.string,
            bottomsheet: _react.PropTypes.string,
            bottomsheet__item: _react.PropTypes.string,
            warning: _react.PropTypes.string
        })
    };


    return BottomSheet;
};

var BottomSheet = factory(_Overlay2.default, _IconButton2.default);
exports.default = (0, _reactCssThemr.themr)(_identifiers.BOTTOMSHEET)(BottomSheet);
exports.bottomsheetFactory = factory;
exports.BottomSheet = BottomSheet;