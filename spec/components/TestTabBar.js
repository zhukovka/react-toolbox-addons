import React from 'react';
import {TabBar, TabItem} from '../../components/tab-bar';
import {CardTitlePrimary} from '../../components/card-addons';

const TestTabBar = () => {
    return (
        <CardTitlePrimary>
            <TabBar>
                <TabItem>one</TabItem>
                <TabItem>two</TabItem>
                <TabItem>three</TabItem>
            </TabBar>
        </CardTitlePrimary>
    );
};

export default TestTabBar;
