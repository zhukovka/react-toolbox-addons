'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSAlert = require('react-s-alert');

var _reactSAlert2 = _interopRequireDefault(_reactSAlert);

require('./test.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// mandatory


//import 'react-s-alert/dist/s-alert-css-effects/slide.css';

// optional - you can choose the effect you want
//import 'react-s-alert/dist/s-alert-css-effects/slide.css';
//import 'react-s-alert/dist/s-alert-css-effects/scale.css';
//import 'react-s-alert/dist/s-alert-css-effects/bouncyflip.css';
//import 'react-s-alert/dist/s-alert-css-effects/flip.css';
//import 'react-s-alert/dist/s-alert-css-effects/genie.css';
//import 'react-s-alert/dist/s-alert-css-effects/jelly.css';
//import 'react-s-alert/dist/s-alert-css-effects/stackslide.css';

var Home = function (_React$Component) {
    _inherits(Home, _React$Component);

    function Home() {
        _classCallCheck(this, Home);

        return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
    }

    _createClass(Home, [{
        key: 'handleClick1',
        value: function handleClick1(e) {
            e.preventDefault();
            _reactSAlert2.default.warning('<h1>Test message 1</h1>', {
                position: 'top-right',
                effect: 'scale',
                onShow: function onShow() {
                    console.log('aye!');
                },
                beep: false,
                timeout: 'none',
                offset: 100
            });
        }
    }, {
        key: 'handleClick2',
        value: function handleClick2(e) {
            e.preventDefault();
            _reactSAlert2.default.info('Test message 2', {
                position: 'bottom-left',
                effect: 'bouncyflip',
                timeout: 'none'
            });
        }
    }, {
        key: 'handleClick3',
        value: function handleClick3(e) {
            e.preventDefault();
            _reactSAlert2.default.error('Test message 3', {
                position: 'bottom-right',
                effect: 'slide',
                timeout: 'none'
            });
        }
    }, {
        key: 'handleCloseAll',
        value: function handleCloseAll(e) {
            e.preventDefault();
            _reactSAlert2.default.closeAll();
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_reactSAlert2.default, { stack: { limit: 3 } }),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'a',
                        { href: '#', onClick: this.handleClick1 },
                        'Click 1'
                    ),
                    ' |',
                    _react2.default.createElement(
                        'a',
                        { href: '#', onClick: this.handleClick2 },
                        'Click 2'
                    ),
                    ' |',
                    _react2.default.createElement(
                        'a',
                        { href: '#', onClick: this.handleClick3 },
                        'Click 3'
                    ),
                    ' |',
                    _react2.default.createElement(
                        'a',
                        { href: '#', onClick: this.handleCloseAll },
                        'Close All'
                    )
                )
            );
        }
    }]);

    return Home;
}(_react2.default.Component);

exports.default = Home;