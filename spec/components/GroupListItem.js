import React, {Component} from 'react';
import GroupListItem from '../../components/grouplistitem';
import GroupListDivider from '../../components/grouplistdivider';
import {List, ListItem, ListSubHeader, ListDivider} from 'react-toolbox/lib/list';
class GroupListItemTest extends Component {
    render () {
        return (
            <section>
                <h5>Group ListItem test</h5>
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
            </section>
        );
    }
}
export default GroupListItemTest;
