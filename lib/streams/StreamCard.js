'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StreamCard = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _StreamCardMedia = require('./StreamCardMedia');

var _editableTitle = require('../editable-title');

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var StreamCard = function StreamCard(_ref) {
    var theme = _ref.theme;
    var streamName = _ref.streamName;
    var onChange = _ref.onChange;

    var other = _objectWithoutProperties(_ref, ['theme', 'streamName', 'onChange']);

    return _react2.default.createElement(
        'div',
        { className: theme[_constants.CSS_SCROLL_ITEM] },
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_StreamCardMedia.StreamCardMedia, other)
        ),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_editableTitle.EditableTitle, { editable: false,
                defaultValue: streamName,
                onBlur: function onBlur(e) {
                    return onChange(e);
                }
            })
        )
    );
};

StreamCard.propTypes = {
    onChange: _react.PropTypes.func,
    onClick: _react.PropTypes.func,
    streamName: _react.PropTypes.string,
    theme: _react.PropTypes.object
};

exports.default = StreamCard;
exports.StreamCard = StreamCard;