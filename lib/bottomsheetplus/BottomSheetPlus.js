'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BottomSheetPlus = exports.bottomsheetFactory = undefined;

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

var _BottomSheet2 = require('../bottomsheet/BottomSheet');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory(Overlay) {
    var BottomSheetPlus = function (_BottomSheet) {
        _inherits(BottomSheetPlus, _BottomSheet);

        function BottomSheetPlus(props) {
            _classCallCheck(this, BottomSheetPlus);

            return _possibleConstructorReturn(this, (BottomSheetPlus.__proto__ || Object.getPrototypeOf(BottomSheetPlus)).call(this, props));
        }

        _createClass(BottomSheetPlus, [{
            key: 'renderVisibleContent',
            value: function renderVisibleContent(header) {
                var theme = this.props.theme;

                return _react2.default.createElement(
                    'div',
                    { className: theme.bottomsheet_plus__header },
                    header
                );
            }
        }, {
            key: 'render',
            value: function render() {
                var _classnames;

                var _props = this.props;
                var theme = _props.theme;
                var children = _props.children;
                var className = _props.className;
                var active = _props.active;
                var style = _props.style;
                var visibleBody = _props.visibleBody;


                var header = Array.isArray(children) ? children[0] : null;
                var content = Array.isArray(children) ? children.slice(1) : children;

                var _className = (0, _classnames3.default)((_classnames = {}, _defineProperty(_classnames, theme.active, active), _defineProperty(_classnames, theme.visibleBody, visibleBody), _classnames), theme.bottomsheet_plus__item);
                var classes = (0, _classnames3.default)(theme.bottomsheet_plus, className);

                return _react2.default.createElement(
                    'div',
                    { 'data-react-toolbox': 'bottomsheetplus', className: classes, style: style },
                    this.renderVisibleContent(header),
                    _react2.default.createElement(
                        'div',
                        { className: _className },
                        _react2.default.createElement(
                            'div',
                            { className: theme.bottomsheet_plus__children },
                            content
                        )
                    )
                );
            }
        }]);

        return BottomSheetPlus;
    }(_BottomSheet2.BottomSheet);

    return BottomSheetPlus;
};

var BottomSheetPlus = factory(_Overlay2.default, _IconButton2.default);
exports.default = (0, _reactCssThemr.themr)(_identifiers.BOTTOMSHEET)(BottomSheetPlus);
exports.bottomsheetFactory = factory;
exports.BottomSheetPlus = BottomSheetPlus;