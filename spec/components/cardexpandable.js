import React from 'react';
import CardExpandable from '../../components/cardexpandable/';
import {List, ListSubHeader, ListCheckbox} from 'react-toolbox/lib/list';
import MessageItem from '../../components/messageitem';
import InputGroup from '../../components/inputgroup';
import Input from 'react-toolbox/lib/input';
const CardExpandableTest = (props) => {
    const buttons = [{icon: 'add'}, {icon: 'done'}];
    return (
        <section>

            <h5>Card Expandable Primary</h5>
            <CardExpandable primary absolute title="Test Expandable card" titleButtons={buttons}>
                <List selectable ripple>
                    <ListSubHeader caption='Explore characters'/>
                    <MessageItem
                        avatar='https://dl.dropboxusercontent.com/u/2247264/assets/m.jpg'
                        caption='Dr. Manhattan'
                        legend="Jonathan 'Jon' Osterman Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid consectetur, delectus dignissimos
            dolores, et harum illo inventore laboriosam laudantium minima neque nihil officiis perspiciatis quae
            quisquam, voluptate voluptatibus. Itaque."/>
                    <MessageItem
                        legend='Ololosha'
                        time="today"
                        me/>
                    <MessageItem
                        legend='Ololosha'
                        time="today"
                        me/>
                    <MessageItem
                        legend='Ololosha'
                        time="today"
                        me/>
                    <MessageItem
                        legend='Ololosha'
                        time="today"
                        me/>
                    <MessageItem
                        legend='Ololosha'
                        time="today"
                        me/>
                    <MessageItem
                        legend='Ololosha'
                        time="today"
                        me/>
                    <MessageItem
                        legend='Ololosha'
                        time="today"
                        me/>
                    <MessageItem
                        legend='Ololosha'
                        time="today"
                        me/>
                </List>
                <InputGroup>
                    <Input type='text' label='Name' name='name' value=""/>
                </InputGroup>
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
