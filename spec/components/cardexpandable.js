import React, {Component} from 'react';
import CardExpandable from '../../components/cardexpandable/';
import {List, ListSubHeader} from 'react-toolbox/lib/list';
import MessageItem from '../../components/messageitem';
import InputGroup from '../../components/inputgroup';
import Input from 'react-toolbox/lib/input';
import {Button} from 'react-toolbox/lib/button';

class CardExpandableTest extends Component {
    state = {hidden: false, value: ''};

    render () {

        const buttons = [{icon: 'add'}, {icon: 'done'}];
        return (
            <section>

                <h5>Card Expandable Primary</h5>
                <Button label='Toggle' raised primary onClick={()=>this.setState({hidden: !this.state.hidden})}/>
                <CardExpandable primary absolute hidden={this.state.hidden} title="Test Expandable card"
                                titleButtons={buttons}>
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
                        <Input type='text' label='Name' name='name' value={this.state.value} multiline
                                onChange={(newValue)=>{this.setState({value: newValue});}}
                            />
                    </InputGroup>
                </CardExpandable>
            </section>
        );
    }
}


export default CardExpandableTest;
