import React from 'react';
import {TabBar, TabItem} from '../../components/tab-bar';
import {CardTitlePrimary, CardMediaPrimary} from '../../components/card-addons';
import {CardTitleButtons} from '../../components/card-addons';
import CardActionsSpaced from '../../components/cardactionsspaced';
import ButtonGroup from '../../components/buttongroup/';
import {IconMenu, MenuItem, MenuDivider } from 'react-toolbox/lib/menu';
import {CardTitle} from 'react-toolbox/lib/card';
import {Button, IconButton} from 'react-toolbox/lib/button';
const TestTabBar = () => {
    return (
        <CardMediaPrimary overflow>
            <CardActionsSpaced>

            <TabBar>
                <TabItem active>{'some text'.toUpperCase()}</TabItem>
                <TabItem >two</TabItem>
                <TabItem active>three</TabItem>
                <TabItem>four</TabItem>
                <TabItem>long ...........</TabItem>
                <TabItem>long ...........</TabItem>
                <TabItem>long ...........</TabItem>
            </TabBar>
            <ButtonGroup white>
                <IconButton icon='favorite' />
                <IconMenu icon='more_vert' position='topRight' menuRipple>
                    <MenuItem value='download' icon='get_app' caption='Download' />
                    <MenuItem value='help' icon='favorite' caption='Favorite' />
                    <MenuItem value='settings' icon='open_in_browser' caption='Open in app' />
                    <MenuDivider />
                    <MenuItem value='signout' icon='delete' caption='Delete' disabled />
                </IconMenu>
            </ButtonGroup>
            </CardActionsSpaced>
        </CardMediaPrimary>
    );
};

export default TestTabBar;
