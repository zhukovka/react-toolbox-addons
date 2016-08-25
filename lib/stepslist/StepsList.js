'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ICON_DONE = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _theme = require('./theme.scss');

var _theme2 = _interopRequireDefault(_theme);

var _avatar = require('react-toolbox/lib/avatar');

var _avatar2 = _interopRequireDefault(_avatar);

var _grid = require('../../lib/grid');

var _ChipTransparent = require('../chips/ChipTransparent');

var _ChipTransparent2 = _interopRequireDefault(_ChipTransparent);

var _Checkmark = require('../checkmark/Checkmark');

var _Checkmark2 = _interopRequireDefault(_Checkmark);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ICON_DONE = exports.ICON_DONE = 'done';


var StepsList = function StepsList(props) {
    var steps = props.steps;


    var renderNavigationChip = function renderNavigationChip(step, index, arr) {

        var last = arr.length - 1 === index;
        var classes = (0, _classnames3.default)(_theme2.default.chip, _defineProperty({}, _theme2.default.chip_last, last));
        return _react2.default.createElement(
            _grid.Col,
            { key: index, shrink: last && true },
            _react2.default.createElement(
                _ChipTransparent2.default,
                { active: step.active, className: classes },
                step.done ? _react2.default.createElement(_Checkmark2.default, null) : _react2.default.createElement(_avatar2.default, { title: index + '' }),
                _react2.default.createElement(
                    'span',
                    { className: _theme2.default.name },
                    index,
                    ' ',
                    step.name
                ),
                _react2.default.createElement('span', { className: _theme2.default.line })
            )
        );
    };

    return _react2.default.createElement(
        _grid.Row,
        { expanded: true },
        steps.map(renderNavigationChip)
    );
};
StepsList.propTypes = {
    steps: _react.PropTypes.arrayOf(_react2.default.PropTypes.shape({
        name: _react.PropTypes.string,
        active: _react.PropTypes.bool,
        done: _react.PropTypes.bool
    }))
};
exports.default = StepsList;