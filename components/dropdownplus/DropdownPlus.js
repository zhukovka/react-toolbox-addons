import React, {PropTypes} from 'react';
import {Dropdown} from 'react-toolbox/lib/dropdown/Dropdown';
import classnames from 'classnames';
import {themr} from 'react-css-themr';
import {DROPDOWNPLUS} from '../identifiers.js';
import InjectInput from 'react-toolbox/lib/input/Input.js';
const factory = (Input) => {
    class DropdownPlus extends Dropdown {
        static propTypes = {
            allowBlank: PropTypes.bool,
            auto: PropTypes.bool,
            className: PropTypes.string,
            disabled: PropTypes.bool,
            error: PropTypes.string,
            label: PropTypes.string,
            name: PropTypes.string,
            onAddAnother: PropTypes.func,
            onBlur: PropTypes.func,
            onChange: PropTypes.func,
            onFocus: PropTypes.func,
            source: PropTypes.array.isRequired,
            template: PropTypes.func,
            theme: PropTypes.shape({
                active: PropTypes.string,
                disabled: PropTypes.string,
                dropdown: PropTypes.string,
                error: PropTypes.string,
                errored: PropTypes.string,
                field: PropTypes.string,
                label: PropTypes.string,
                selected: PropTypes.string,
                templateValue: PropTypes.string,
                up: PropTypes.string,
                value: PropTypes.string,
                values: PropTypes.string
            }),
            value: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number
            ])
        };

        constructor (props) {
            super(props);
        }

        renderAddAnother (className) {
            const {theme, onAddAnother} = this.props;
            const _className = classnames(className, theme['add-another']);
            return (
                <li key="plus-item" className={_className} onClick={onAddAnother}>
                    Add another...
                </li>);
        }

        render () {
            const {template, theme, source, onAddAnother, allowBlank, auto, ...others} = this.props; //eslint-disable-line no-unused-vars
            const selected = this.getSelectedItem();
            const className = classnames(theme.dropdown, {
                [theme.up]: this.state.up,
                [theme.active]: this.state.active,
                [theme.disabled]: this.props.disabled
            }, this.props.className);

            return (
                <div data-react-toolbox='dropdown' className={className}>
                    <Input
                        {...others}
                        className={theme.value}
                        onMouseDown={this.handleMouseDown}
                        readOnly
                        type={template && selected ? 'hidden' : null}
                        value={selected && selected.label ? selected.label : ''}
                    />
                    {template && selected ? this.renderTemplateValue(selected) : null}
                    <ul className={theme.values} ref='values'>
                        {source.map(this.renderValue.bind(this))}
                        {onAddAnother ? this.renderAddAnother(className) : null}
                    </ul>
                </div>
            );
        }


    }
    return DropdownPlus;
};
//
const DropdownPlus = factory(InjectInput);
export default themr(DROPDOWNPLUS)(DropdownPlus);
export {factory as dropdownFactory};
export {DropdownPlus};
// export default DropdownPlus;
