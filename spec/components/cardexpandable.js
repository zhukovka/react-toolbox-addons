import React from 'react';
import CardExpandable from '../../components/cardexpandable/';
import {List, ListItem, ListSubHeader, ListDivider, ListCheckbox} from 'react-toolbox/lib/list';
import TestStatusAvatar from './TestStatusAvatar';

const _testStatusAvatar = (<TestStatusAvatar />);

const CardExpandableTest = (props) => {
    const buttons = [{icon: 'add'}, {icon: 'done'}];
    return (
        <section>
            <h5>Card Expandable Primary</h5>
            <CardExpandable primary title="Test Expandable card" titleButtons={buttons}>
                <List selectable ripple>
                    <ListSubHeader caption='Explore characters'/>
                    <ListItem
                        caption='Dr. Manhattan'
                        legend="Jonathan 'Jon' Osterman"
                        rightIcon='star'
                    >{_testStatusAvatar}</ListItem>
                    <ListItem
                        avatar='https://dl.dropboxusercontent.com/u/2247264/assets/o.jpg'
                        caption='Ozymandias'
                        legend='Adrian Veidt'
                        rightIcon='star'
                    />
                    <ListDivider />
                    <ListItem caption='Contact the publisher' leftIcon='send'/>
                    <ListItem caption='Remove this publication' leftIcon='delete'/>
                </List>
            </CardExpandable>

            <h5>Card Expandable</h5>
            <CardExpandable title="Test Expandable card">
                <List selectable ripple>
                    <ListSubHeader caption='Explore characters'/>
                    <ListCheckbox checked caption='Notify new comics'
                                  legend='You will receive a notification when a new one is published'/>

                </List>
            </CardExpandable>
        </section>
    );
};

export default CardExpandableTest;
