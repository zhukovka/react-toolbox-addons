import React, {Component} from 'react';
import {ButtonSwitcher} from '../../components/iconswitcher';

class ButtonSwitcherTest extends Component {
    state = {
        active: 'favorite'
    };

    handleChange (icon) {
        const {active} = this.state;
        let newActive = null;
        if (active === icon) {
            newActive = '';
        } else {
            newActive = icon;
        }
        this.setState({
            active: newActive
        });
    }

    render () {
        const icons = ['add', 'favorite'];
        const labels = ['Sources', 'Live Streams'];
        return (<ButtonSwitcher icons={icons} labels={labels} active={this.state.active}
                              onSwitch={this.handleChange.bind(this)}/>);
    }
}
export default ButtonSwitcherTest;
