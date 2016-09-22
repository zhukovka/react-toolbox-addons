import React from 'react';
import {Button, IconButton} from 'react-toolbox/lib/button';
import {DialogLayout, DialogPanel} from '../../components/dialoglayout';
import {List, ListItem} from 'react-toolbox/lib/list';
import Input from 'react-toolbox/lib/input';
import InputGroup from '../../components/inputgroup';
import {StyledDropdown} from '../../components/input-addons';

class DialLayoutTest extends React.Component {
    state = {
        active: false,
        selectedIds: []
    };

    handleToggle = () => {
        this.setState({active: !this.state.active});
    };

    actions = [
        {label: 'Cancel', onClick: this.handleToggle},
        {label: 'Save', onClick: this.handleToggle, primary: true}
    ];
    users = [
        {
            avatar: 'https://dl.dropboxusercontent.com/u/2247264/assets/m.jpg',
            caption: 'Dr. Manhattan',
            legend: 'Jonathan Osterman',
            id: 0,
            onClick: ()=> {
                this.setState({selectedIds: [...this.state.selectedIds, 0]});
            }
        },
        {
            avatar: 'https://dl.dropboxusercontent.com/u/2247264/assets/o.jpg',
            caption: 'Ozymandias',
            legend: 'Adrian Veidt',
            id: 1,
            onClick: ()=> {
                this.setState({selectedIds: [...this.state.selectedIds, 1]});
            }
        },
        {
            avatar: 'https://dl.dropboxusercontent.com/u/2247264/assets/r.jpg',
            caption: 'Rorschach',
            legend: 'Walter Joseph Kovacs',
            id: 2,
            onClick: ()=> {
                this.setState({selectedIds: [...this.state.selectedIds, 2]});
            }
        },
        {
            avatar: 'https://dl.dropboxusercontent.com/u/2247264/assets/m.jpg',
            caption: 'Ololosha',
            legend: 'Chuvak 3',
            id: 3,
            onClick: ()=> {
                this.setState({selectedIds: [...this.state.selectedIds, 3]});
            }
        },
        {
            avatar: 'https://dl.dropboxusercontent.com/u/2247264/assets/o.jpg',
            caption: 'Ololosha',
            legend: 'Chuvak 4',
            id: 4,
            onClick: ()=> {
                this.setState({selectedIds: [...this.state.selectedIds, 4]});
            }
        }
    ];

    renderUserList () {
        return this.users.filter((u, i)=>this.state.selectedIds.indexOf(u.id) === -1).map((user, index)=> {
            return (<ListItem key={'user-' + index} {...user} />);
        }, this);
    }

    roles = [
        {value: 'one', label: 'One'},
        {value: 'two', label: 'Two'},
        {value: 'three', label: 'Three'}
    ];

    renderRightAction (user) {
        const i = this.state.selectedIds.indexOf(user.id);
        const selectedIds = {selectedIds: [...this.state.selectedIds.slice(0, i), ...this.state.selectedIds.slice(i + 1)]};
        return [<StyledDropdown
            auto
            source={this.roles}
            value='one'
            collapse
            primary
            align='right'
        />, <IconButton icon='clear'
                        onClick={()=>this.setState(selectedIds)}/>];
    }

    renderSelectedList () {

        return this.users.filter((u, i)=>this.state.selectedIds.indexOf(u.id) !== -1).map((user, index)=> {
            return (<ListItem key={'user-' + index} {...user} rightActions={this.renderRightAction(user, index)}/>);
        }, this);
    }

    render () {
        return (
            <section>
                <h5>DialogLayout</h5>
                <Button label='Show my dialog' onClick={this.handleToggle}/>
                <DialogLayout
                    actions={this.actions}
                    active={this.state.active}
                    onEscKeyDown={this.handleToggle}
                    onOverlayClick={this.handleToggle}
                    title='My awesome dialog'
                    primary>
                    <DialogPanel>
                        <InputGroup shadow>
                            <Input type='text'/>
                            <IconButton icon='search'/>
                            <IconButton icon='add_circle_outline'/>
                        </InputGroup>
                        <List selectable ripple>
                            {this.renderUserList()}
                        </List>
                    </DialogPanel>
                    <DialogPanel>
                        <List selectable ripple>
                            {this.renderSelectedList()}
                        </List>
                    </DialogPanel>
                </DialogLayout>
            </section>
        );
    }


}

export default DialLayoutTest;
