'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.VideoPanel = exports.videoPanelFactory = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _card = require('react-toolbox/lib/card');

var _reactCssThemr = require('react-css-themr');

var _identifiers = require('../identifiers');

var _cardAddons = require('../card-addons');

var _rtcomponentsprops = require('../rtcomponentsprops');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var factory = function factory() {
    var VideoPanel = function VideoPanel(_ref) {
        var buttons = _ref.buttons;
        var children = _ref.children;
        var theme = _ref.theme;

        return _react2.default.createElement(
            _card.CardMedia,
            { theme: theme, aspectRatio: 'wide' },
            _react2.default.createElement(_cardAddons.CardTitleButtons, { buttons: buttons, theme: theme }),
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