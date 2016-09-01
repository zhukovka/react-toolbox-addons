import React from 'react';
import {TabBar, TabItem} from '../../components/tab-bar';
import {CardTitlePrimary} from '../../components/card-addons';
import {CardTitleButtons} from '../../components/card-addons';
import {CardTitle} from 'react-toolbox/lib/card';

const TestTabBar = () => {
    return (
        <CardTitlePrimary>
            <CardTitle title="TEST tabBar" />
            <CardTitle title="TEST tabBar" />
            <TabBar>
                <TabItem active>{'some text'.toUpperCase()}</TabItem>
                <TabItem >two</TabItem>
                <TabItem active>three</TabItem>
                <TabItem>four</TabItem>
                <TabItem>long ...........</TabItem>
                <TabItem>long ...........</TabItem>
                <TabItem>long ...........</TabItem>
            </TabBar>
            <CardTitleButtons buttons={[{icon: 'add', onClick: ()=>{}},{icon: 'edit', onClick: ()=>{}}]}/>
        </CardTitlePrimary>
    );
};

export default TestTabBar;
