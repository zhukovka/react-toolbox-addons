import React from 'react';
import AsideWrapper from '../../components/aside-wrapper';
import CardExpandable from '../../components/cardexpandable/';
import {List, ListSubHeader} from 'react-toolbox/lib/list';
import MessageItem from '../../components/messageitem';
import InputGroup from '../../components/inputgroup';
import Input from 'react-toolbox/lib/input';
import GroupListItem from '../../components/grouplistitem';
import GroupListDivider from '../../components/grouplistdivider';
import { ListItem, ListDivider} from 'react-toolbox/lib/list';
const TestAsideWrapper = () =>{
    return (
      <AsideWrapper>
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

          <CardExpandable primary title="Test Expandable card"
              >
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
          </CardExpandable>
      </AsideWrapper>
    );
};

export default TestAsideWrapper;
