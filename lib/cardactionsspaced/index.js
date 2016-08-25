'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CardActionsSpaced = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * Created by mitya on 8/23/16.
                                                                                                                                                                                                                                                                   */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _card = require('react-toolbox/lib/card');

var _theme = require('./theme.scss');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CardActionsSpaced = function CardActionsSpaced(props) {
    return _react2.default.createElement(
        _card.CardActions,
        _extends({}, props, { theme: _theme2.default }),
        props.children
    );
};
CardActionsSpaced.propTypes = {
    children: _react.PropTypes.any
};
exports.default = CardActionsSpaced;
exports.CardActionsSpaced = CardActionsSpaced;