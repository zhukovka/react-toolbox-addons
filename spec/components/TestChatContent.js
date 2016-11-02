import React from 'react';
import ChatContent from '../../components/chat-content';
import {List, ListSubHeader} from 'react-toolbox/lib/list';
import MessageItem from '../../components/messageitem';
import InputGroup from '../../components/inputgroup';
import Input from 'react-toolbox/lib/input';

const TestChatContent = () => {
    return (
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
                <Input type='text' name='name' value={"test"} multiline

                    />
            </InputGroup>
        </ChatContent>
    );
};

export default TestChatContent;

