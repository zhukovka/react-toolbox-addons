import React, {PropTypes} from 'react';
import {Button} from 'react-toolbox/lib/button';
import Checkbox from 'react-toolbox/lib/checkbox';
import {themr} from 'react-css-themr';
import {AVATARCHECKBOX} from '../identifiers';

const factory = () => {
    class AvatarCheckbox extends Checkbox {

        static propTypes = {
            avatar: PropTypes.string
        };

        render () {
            const btnProps = {
                floating: true,
                onClick: ()=>this.props.onChange(!this.props.checked)
            };

            if (this.props.checked) {
                btnProps.accent = true;
                btnProps.icon = 'check';
            } else {
                btnProps.style = {backgroundImage: 'url(' + this.props.avatar + ')', backgroundSize: 'cover'};
            }

            return (
                <div style={{width: '56px', height: '56px'}}>
                    <Button {...btnProps}/>
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
