'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.VideoPanel = exports.videoPanelFactory = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _card = require('react-toolbox/lib/card');

var _reactCssThemr = require('react-css-themr');

var _identifiers = require('../identifiers');

var _cardAddons = require('../card-addons');

var _rtcomponentsprops = require('../rtcomponentsprops');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var factory = function factory() {
    var VideoPanel = function VideoPanel(_ref) {
        var buttons = _ref.buttons;
        var children = _ref.children;
        var theme = _ref.theme;

        var other = _objectWithoutProperties(_ref, ['buttons', 'children', 'theme']);

        return _react2.default.createElement(
            _card.CardMedia,
            _extends({ theme: theme }, other),
            _react2.default.createElement(_cardAddons.CardTitleButtons, { buttons: buttons, className: theme.video_btns, theme: theme }),
            children
        );
    };

    VideoPanel.propTypes = {
        buttons: _react.PropTypes.arrayOf(_rtcomponentsprops.ButtonProps),
        children: _react.PropTypes.any,
        theme: _react.PropTypes.object
    };

    return VideoPanel;
};
var VideoPanel = factory();
exports.default = (0, _reactCssThemr.themr)(_identifiers.VIDEOPANEL)(VideoPanel);
exports.videoPanelFactory = factory;
exports.VideoPanel = VideoPanel;