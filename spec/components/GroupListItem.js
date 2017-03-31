import React, {Component} from 'react';
import {GroupListItem, ListItemDropDownContent} from '../../components/grouplistitem';
import {GroupListDivider, GroupListDividerWithClick} from '../../components/grouplistdivider';
import {DraggableList} from '../../components/draggable';
import {ListItem, ListSubHeader, ListDivider} from 'react-toolbox/lib/list';
import FontIcon from 'react-toolbox/lib/font_icon';

class GroupListItemTest extends Component {
    constructor (props) {
        super(props);
        this.state = {
          active: false
        };
    }
    render () {
        const countries = [
            {value: 'EN-gb', label: 'England', img: 'http://'},
            {value: 'ES-es', label: 'Spain', img: 'http://'},
            {value: 'TH-th', label: 'Thailand', img: 'http://'},
            {value: 'EN-en', label: 'USA', img: 'http://'},
            {value: 'FR-fr', label: 'France', img: 'http://'}
        ];
        return (
            <section style={{width: "30rem"}}>
                <h5>Group ListItem test</h5>
                <DraggableList>
                    <ListSubHeader caption='GroupListItem'/>
                    <GroupListItem
                        avatar='https://dl.dropboxusercontent.com/u/2247264/assets/m.jpg'
                        caption='Dr. Manhattan'
                        ripple={false} selectable={false}
                        itemContent={<ListItemDropDownContent title={'Dr. Manhattan'} selected={countries[0].value} source={countries} onChange={(e) => {
                         console.log(e.currentTarget.value);
                       }} />}
                        rightIcon={[(<FontIcon value="add"/>),
                        (<FontIcon value="close"/>)]}
                        group="owner"
                    />
                    <GroupListDividerWithClick onClick={() => {
                        this.setState({
                            active: !this.state.active
                        });
                    }} collapsed={this.state.active} title={"Pilots"}/>
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
                </DraggableList>
            </section>
        );
    }
}
export default GroupListItemTest;
