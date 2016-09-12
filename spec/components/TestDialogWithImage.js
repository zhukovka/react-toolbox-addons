import React, {Component} from 'react';
import DialogWithImage from '../../components/dialogwithimage';
import Input from 'react-toolbox/lib/input';
import {Button} from 'react-toolbox/lib/button';
import CardActionsSpaced from '../../components/cardactionsspaced';

class TestDialogWithImage extends Component {
    state = {
        active: false
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
                <h5>Dialog With Image</h5>
                <Button label='Show my dialog' onClick={this.handleToggle}/>
                <DialogWithImage imageCapture="http://qa.live4.io/s/1751/live4/img/logo.svg"
                                 background="#4e4e4e"
                                 type="small"
                                 actions={this.actions}
                                 active={this.state.active}
                                 onEscKeyDown={this.handleToggle}
                                 onOverlayClick={this.handleToggle}
                                 title='Login dialog'
                >
                    <Input type="email" label="Email"/>
                    <Input type="password" label="Password"/>
                    <CardActionsSpaced>
                        <Button label="forgot password?" flat primary />
                        <Button label="log in" primary raised />
                    </CardActionsSpaced>
                </DialogWithImage>
            </section>
        );
    }
}

export default TestDialogWithImage;
