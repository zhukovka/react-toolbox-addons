# TabBar & TabItem example

```
import React, {Component} from 'react';
import {Card} from 'react-toolbox/lib/card';
import Banner from 'react-toolbox-addons/lib/banner';
import CardActionsSpaced from 'react-toolbox-addons/lib/cardactionsspaced';
import {TabBar, TabItem} from 'react-toolbox-addons/lib/tab-bar';
import ButtonGroup from 'react-toolbox-addons/lib/buttongroup';
import {Button, IconButton} from 'react-toolbox/lib/button';
import {IconMenu, MenuItem, MenuDivider} from 'react-toolbox/lib/menu';
import Table from 'react-toolbox/lib/table';
import FontIcon from 'react-toolbox/lib/font_icon';
import {StyledInput} from 'react-toolbox-addons/lib/input-addons';
const UserModel = {
    name: {type: String},
    twitter: {type: String},
    birthdate: {type: Date},
    cats: {type: Number},
    dogs: {type: FontIcon},
    active: {type: Boolean}
};

const users = {
    one: [
        {
            name: 'Javi Jimenez',
            twitter: '@soyjavi',
            birthdate: new Date(1980, 3, 11),
            cats: 1,
            dogs: <IconButton icon='add'/>
        },
        {
            name: 'Javi Velasco',
            twitter: '@javivelasco',
            birthdate: new Date(1987, 1, 1),
            dogs: <IconButton icon='add'/>,
            active: true
        }
    ],
    two: [
        {
            name: 'Vasia Jimenez',
            twitter: '@soyjavi',
            birthdate: new Date(1980, 3, 11),
            cats: 1,
            dogs: <IconButton icon='add'/>
        },
        {
            name: 'Vasia Velasco',
            twitter: '@javivelasco',
            birthdate: new Date(1987, 1, 1),
            dogs: <IconButton icon='add'/>,
            active: true
        }
    ],
    three: [
        {
            name: 'Petia Jimenez',
            twitter: '@soyjavi',
            birthdate: new Date(1980, 3, 11),
            cats: 1,
            dogs: <IconButton icon='add'/>
        },
        {
            name: 'Petia Velasco',
            twitter: '@javivelasco',
            birthdate: new Date(1987, 1, 1),
            dogs: <IconButton icon='add'/>,
            active: true
        }
    ],
    four: [
        {
            name: 'Ololosha Jimenez',
            twitter: '@soyjavi',
            birthdate: new Date(1980, 3, 11),
            cats: 1,
            dogs: <IconButton icon='add'/>
        },
        {
            name: 'Ololosha Velasco',
            twitter: '@javivelasco',
            birthdate: new Date(1987, 1, 1),
            dogs: <IconButton icon='add'/>,
            active: true
        }
    ]
};
class MissionListTest extends Component {
    state = {source: users, active: 'one', selected: [], filterMode: false};

    tabsitems = ['one', 'two', 'three', 'four'];

    renderTabs () {
        return this.tabsitems.map((tabsItem)=> {
            return (<TabItem key={`tab-${tabsItem}`} active={tabsItem === this.state.active}
                             onClick={()=>this.setState({active: tabsItem})}>{tabsItem}</TabItem>);
        }, this);
    }

    handleChange = (row, key, value) => {
        const source = this.state.source[this.state.active];
        source[row][key] = value;
        this.setState({source});
    };

    handleSelect = (selected) => {
        this.setState({selected});
    };

    renderButtons () {
        return (<ButtonGroup white>
            <IconButton icon='filter_list' onClick={()=>this.setState({filterMode: true})}/>
            <IconMenu icon='more_vert' position='topRight' menuRipple>
                <MenuItem value='download' icon='get_app' caption='Download'/>
                <MenuItem value='help' icon='favorite' caption='Favorite'/>
                <MenuItem value='settings' icon='open_in_browser' caption='Open in app'/>
                <MenuDivider />
                <MenuItem value='signout' icon='delete' caption='Delete' disabled/>
            </IconMenu>
        </ButtonGroup>);
    }

    renderBanner () {
        let bannerProps = {primary: true};
        let tabs, buttons;
        if (this.state.selected.length) {
            bannerProps = {accent: true, opacity: 2};
            tabs = <TabItem primary>{this.state.selected.length} item selected</TabItem>;
            buttons = <Button label='REMOVE' accent onClick={()=>this.setState({selected: []})}/>;
        } else if (this.state.filterMode) {
            tabs = (<ButtonGroup white><IconButton icon='search'/><StyledInput white
                                                                               placeholder='search'
                                                                               type='text'/></ButtonGroup>);
            buttons = (<ButtonGroup white><IconButton icon='clear'
                                                      onClick={()=>this.setState({filterMode: false})}/></ButtonGroup>);
        } else {
            tabs = this.renderTabs();
            buttons = this.renderButtons();
        }

        return (
            <Banner {...bannerProps}>
                <CardActionsSpaced>
                    <TabBar>
                        {tabs}
                    </TabBar>
                    {buttons}
                </CardActionsSpaced>
            </Banner>);
    }

    render () {
        return (
            <div style={{padding: 20}}>
                MissionListTest
                <Card style={{overflow: 'visible'}}>
                    {this.renderBanner()}
                    <Table
                        model={UserModel}
                        onChange={this.handleChange}
                        onSelect={this.handleSelect}
                        selectable
                        multiSelectable
                        selected={this.state.selected}
                        source={this.state.source[this.state.active]}
                    />
                </Card>
            </div>
        );
    }
}
```
