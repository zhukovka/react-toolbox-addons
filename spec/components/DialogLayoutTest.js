import React from 'react';
import {Button} from 'react-toolbox/lib/button';
import DialogLayout from '../../components/dialoglayout';

class DialLayoutTest extends React.Component {
    state = {
        active: true
    };

    handleToggle = () => {
        this.setState({active: !this.state.active});
    };

    actions = [
        {label: 'Cancel', onClick: this.handleToggle},
        {label: 'Save', onClick: this.handleToggle}
    ];


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
                    primary
                >
                    <p>Here you can add arbitrary content. Components like Pickers are using dialogs now.</p>
                </DialogLayout>
            </section>
        );
    }


}

export default DialLayoutTest;
