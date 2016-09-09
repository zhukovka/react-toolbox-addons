import React, {PropTypes} from 'react';
import {Button} from 'react-toolbox/lib/button';
import Checkbox from 'react-toolbox/lib/checkbox';
import {themr} from 'react-css-themr';
import {AVATARCHECKBOX} from '../identifiers';

const factory = (props) => {
    class AvatarCheckbox extends Checkbox {
        state = {checked: false};

        static propTypes = {
            avatar: PropTypes.string,
            checked: PropTypes.bool,
            className: PropTypes.string,
            disabled: PropTypes.bool,
            label: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.node
            ]),
            name: PropTypes.string,
            onChange: PropTypes.func,
            theme: PropTypes.shape({
                disabled: PropTypes.string,
                field: PropTypes.string,
                input: PropTypes.string,
                ripple: PropTypes.string
            })
        };

        onButtonClick = function () {
            this.state.checked = !this.state.checked;
            this.setState(this.state);
            if (this.props.onChange) {
                this.props.onChange(this.state.checked);
            }
        };

        render () {
            if (this.state.checked) {
                return (
                    <div style={{width: '56px', height: '56px'}}>
                        <Button
                            icon='check'
                            floating
                            accent
                            onClick={this.onButtonClick.bind(this)}
                        />
                    </div>
                );
            }

            return (
                <div style={{width: '56px', height: '56px'}}>
                    <Button
                        style={{backgroundImage: 'url(' + this.props.avatar + ')', backgroundSize: 'cover'}}
                        floating
                        onClick={this.onButtonClick.bind(this)}
                    />
                </div>
            );
        }
    }
    return AvatarCheckbox;
};

const Avatarcheckbox = factory();
export default themr(AVATARCHECKBOX)(Avatarcheckbox);
export {factory as avatarcheckboxFactory};
export {Avatarcheckbox};
