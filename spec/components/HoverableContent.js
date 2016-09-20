import React from 'react';
import HoverableContent from '../../components/hoverablecontent';
import {List, ListItem, ListSubHeader} from 'react-toolbox/lib/list';

const HoverableContentTest = () => {
    return (
        <section>
            <h5>HoverableContent</h5>
            <HoverableContent>
                <List selectable ripple>
                    <ListSubHeader caption='Explore characters'/>
                    <ListItem
                        avatar='https://dl.dropboxusercontent.com/u/2247264/assets/o.jpg'
                        caption='Ozymandias'
                        legend='Adrian Veidt'
                        rightIcon='star'
                    />
                </List>
                <List selectable ripple>
                    <ListSubHeader caption='Explore hover characters'/>
                    <ListItem
                        avatar='https://dl.dropboxusercontent.com/u/2247264/assets/o.jpg'
                        caption='Hover'
                        legend='Adrian Veidt'
                        rightIcon='star'
                    />
                </List>
            </HoverableContent>
        </section>
    );
};

export default HoverableContentTest;
