# TabBar & TabItem example

```
import React, {Component} from 'react';
import {Card} from 'react-toolbox/lib/card';
import Banner from 'react-toolbox-addons/lib/banner';
import CardActionsSpaced from 'react-toolbox-addons/lib/cardactionsspaced';
import {TabBar, TabItem} from 'react-toolbox-addons/lib/tab-bar';
import ButtonGroup from 'react-toolbox-addons/lib/buttongroup';
import {IconButton} from 'react-toolbox/lib/button';
import {IconMenu, MenuItem, MenuDivider} from 'react-toolbox/lib/menu';
import Table from 'react-toolbox/lib/table';

const UserModel = {
    name: {type: String},
    twitter: {type: String},
    birthdate: {type: Date},
    cats: {type: Number},
    dogs: {type: Number},
    active: {type: Boolean}
};

const users = {
    one: [
        {name: 'Javi Jimenez', twitter: '@soyjavi', birthdate: new Date(1980, 3, 11), cats: 1},
        {name: 'Javi Velasco', twitter: '@javivelasco', birthdate: new Date(1987, 1, 1), dogs: 1, active: true}
    ],
    two: [
        {name: 'Vasia Jimenez', twitter: '@soyjavi', birthdate: new Date(1980, 3, 11), cats: 1},
        {name: 'Vasia Velasco', twitter: '@javivelasco', birthdate: new Date(1987, 1, 1), dogs: 1, active: true}
    ],
    three: [
        {name: 'Petia Jimenez', twitter: '@soyjavi', birthdate: new Date(1980, 3, 11), cats: 1},
        {name: 'Petia Velasco', twitter: '@javivelasco', birthdate: new Date(1987, 1, 1), dogs: 1, active: true}
    ],
    four: [
        {name: 'Ololosha Jimenez', twitter: '@soyjavi', birthdate: new Date(1980, 3, 11), cats: 1},
        {name: 'Ololosha Velasco', twitter: '@javivelasco', birthdate: new Date(1987, 1, 1), dogs: 1, active: true}
    ]
};
class MissionListTest extends Component {
    state = {source: users, active: 'one'};

    tabsitems = ['one', 'two', 'three', 'four'];

    renderTabs () {
        return this.tabsitems.map((tabsItem)=> {
            return (<TabItem key={`tab-${tabsItem}`} active={tabsItem === this.state.active}
                             onClick={()=>this.setState({active: tabsItem})}>{tabsItem}</TabItem>);
        }, this);
    }

    render () {
        return (
            <div>
                MissionListTest
                <Card style={{overflow: 'visible'}}>
                    <Banner primary>
                        <CardActionsSpaced>
                            <TabBar>
                                {this.renderTabs()}
                            </TabBar>
                            <ButtonGroup white>
                                <IconButton icon='filter_list'/>
                                <IconMenu icon='more_vert' position='topRight' menuRipple>
                                    <MenuItem value='download' icon='get_app' caption='Download'/>
                                    <MenuItem value='help' icon='favorite' caption='Favorite'/>
                                    <MenuItem value='settings' icon='open_in_browser' caption='Open in app'/>
                                    <MenuDivider />
                                    <MenuItem value='signout' icon='delete' caption='Delete' disabled/>
                                </IconMenu>
                            </ButtonGroup>
                        </CardActionsSpaced>
                    </Banner>
                    <Table
                        model={UserModel}
                        source={this.state.source[this.state.active]}
                    />
                </Card>
            </div>
        );
    }


}
```
