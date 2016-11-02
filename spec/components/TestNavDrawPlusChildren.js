import React from 'react';
import NavDrawerPlusChildren from '../../components/navdraweplus-children';
import {List, ListSubHeader} from 'react-toolbox/lib/list';
import MessageItem from '../../components/messageitem';
import GroupListItem from '../../components/grouplistitem';
import GroupListDivider from '../../components/grouplistdivider';
import { ListItem, ListDivider} from 'react-toolbox/lib/list';
import InputGroup from '../../components/inputgroup';
import Input from 'react-toolbox/lib/input';

import ChatContent from '../../components/chat-content';

const TestNavDrawChildren = ({...props}) => {
    return (
        <NavDrawerPlusChildren {...props}>
            <List selectable ripple>
                <ListSubHeader caption='GroupListItem'/>
                <GroupListItem
                    avatar='https://dl.dropboxusercontent.com/u/2247264/assets/m.jpg'
                    caption='Dr. Manhattan'
                    legend="Jonathan 'Jon' Osterman"
                    rightIcon='star'
                    group="owner"
                    />
                <GroupListDivider/>
                <GroupListItem
                    avatar='https://dl.dropboxusercontent.com/u/2247264/assets/o.jpg'
                    caption='Ozymandias'
                    legend='Adrian Veidt'
                    rightIcon='star'
                    group="participant"
                    />
                <GroupListDivider/>
                <GroupListItem
                    avatar='https://dl.dropboxusercontent.com/u/2247264/assets/r.jpg'
                    caption='Rorschach'
                    legend='Walter Joseph Kovacs'
                    rightIcon='star'
                    group="unknown"
                    />
                <GroupListDivider/>
                <GroupListItem
                    avatar='https://dl.dropboxusercontent.com/u/2247264/assets/r.jpg'
                    caption='Rorschach'
                    legend='Walter Joseph Kovacs'
                    rightIcon='star'
                    group="pilot"
                    />
                <GroupListDivider/>
                <GroupListItem
                    avatar='https://dl.dropboxusercontent.com/u/2247264/assets/r.jpg'
                    caption='Rorschach'
                    legend='Walter Joseph Kovacs'
                    rightIcon='star'
                    group="observer"
                    />
                <ListDivider />
                <GroupListItem caption='Contact the publisher' leftIcon='send'/>
                <GroupListItem caption='Remove this publication' leftIcon='delete'/>
                <ListDivider />
                <ListSubHeader caption='ListItem'/>
                <ListItem
                    avatar='https://dl.dropboxusercontent.com/u/2247264/assets/m.jpg'
                    caption='Dr. Manhattan'
                    legend="Jonathan 'Jon' Osterman"
                    rightIcon='star'
                    />
                <ListItem
                    avatar='https://dl.dropboxusercontent.com/u/2247264/assets/o.jpg'
                    caption='Ozymandias'
                    legend='Adrian Veidt'
                    rightIcon='star'
                    />
            </List>

            <ChatContent>
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
                    <Input type='text' label='Name' name='name' value={""} multiline

                        />
                </InputGroup>
            </ChatContent>
        </NavDrawerPlusChildren>
    );
};

export default TestNavDrawChildren;
