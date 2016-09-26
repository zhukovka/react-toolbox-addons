import React, {Component} from 'react';
import {List, ListItem, ListSubHeader, ListDivider} from 'react-toolbox/lib/list';
import StyledListItem from '../../components/styledlistitem';
class StyledListItemTest extends Component {
    render () {
        return (
            <section>
                <h5>StyledListItem test</h5>
                <List selectable ripple>
                    <ListSubHeader caption='StyledListItem'/>
                    <StyledListItem
                        avatar='https://dl.dropboxusercontent.com/u/2247264/assets/m.jpg'
                        caption='Dr. Manhattan'
                        legend="Jonathan 'Jon' Osterman"
                        rightIcon='star'
                    />
                    <StyledListItem
                        avatar='https://dl.dropboxusercontent.com/u/2247264/assets/o.jpg'
                        caption='Ozymandias'
                        legend='Adrian Veidt'
                        rightIcon='star'
                    />
                    <StyledListItem
                        avatar='https://dl.dropboxusercontent.com/u/2247264/assets/r.jpg'
                        caption='Rorschach'
                        legend='Walter Joseph Kovacs'
                        rightIcon='star'
                    />
                    <ListDivider />
                    <StyledListItem caption='Contact the publisher' leftIcon='send'/>
                    <StyledListItem caption='Remove this publication' leftIcon='delete'/>
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
            </section>);
    }
}
export default StyledListItemTest;
