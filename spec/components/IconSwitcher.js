import React, {Component} from 'react';
import {IconSwitcher} from '../../components/iconswitcher';
class IconSwitcherTest extends Component {
    state = {
        active: 'favorite'
    };

    render () {
        const icons = ['add', 'favorite'];
        return (<IconSwitcher icons={icons} active={this.state.active}
                              onSwitch={(icon)=>this.setState({active: icon})}/>);
    }
}
export default IconSwitcherTest;
