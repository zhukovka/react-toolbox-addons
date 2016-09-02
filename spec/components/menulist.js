import React, {Component} from 'react';
import {List, ListItem, ListSubHeader, ListDivider, ListCheckbox} from 'react-toolbox/lib/list';
import {IconMenu, MenuItem, MenuDivider} from 'react-toolbox/lib/menu';
import {IconButton} from 'react-toolbox/lib/button';
import AvatarOverlay from '../../components/avatar-overlay';
import Checkmark from '../../components/checkmark/Checkmark';
class MenuListTest extends Component {
    state = {
        checkbox: false,
        selected: 'Download'
    };

    handleCheckboxChange = () => {
        this.setState({checkbox: !this.state.checkbox});
    };

    render () {
        const items = {
            download: 'Download',
            help: 'Favorite',
            settings: 'Open in app'
        };
        const _avatar = (<AvatarOverlay icon={'add'} image={'https://dl.dropboxusercontent.com/u/2247264/assets/m.jpg'}/>);
    const rightAction = [(<span>
            <span>{this.state.selected}</span>
            <IconMenu icon='arrow_drop_down' position='topRight' menuRipple
                      onSelect={(value)=>this.setState({selected: items[value]})}>
                <MenuItem value='download' icon='get_app' caption='Download'/>
                <MenuItem value='help' icon='favorite' caption='Favorite'/>
                <MenuItem value='settings' icon='open_in_browser' caption='Open in app'/>
                <MenuDivider />
                <MenuItem value='signout' icon='delete' caption='Delete' disabled/>
            </IconMenu>
        </span>), (<IconButton icon='clear' onClick={()=>console.log('kuku')}/>)];

        return (
            <List selectable>
                <ListSubHeader caption='Explore characters'/>

                <ListItem
                    avatar={_avatar}
                    caption='Dr. Manhattan'
                    legend="Jonathan 'Jon' Osterman"
                    rightActions={rightAction}
                />
            </List>
        );
    }
}

export default MenuListTest;
