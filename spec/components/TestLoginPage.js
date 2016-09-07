import React from 'react';
import LoginPage from '../../components/login-page';
import Input from 'react-toolbox/lib/input';
import Button from 'react-toolbox/lib/button';
import Dialog from 'react-toolbox/lib/dialog';
const LIVE_4 = 'https://raw.githubusercontent.com/mytcat/react-toolbox/dev/static/img/Live4_logo_grey.png';

class TestLoginPage extends React.Component {

    state = {
        active: false,
        active_2: false
    }

    render () {
        return (
            <div>
                <Button label='open Login Page' onClick={()=>{this.setState({active: !this.state.active});}}/>
                <Button label='open Default dialog' onClick={()=>{this.setState({active_2: !this.state.active_2});}}/>
                <LoginPage logo={LIVE_4}
                           bgColor={'#444'}
                           active={this.state.active}
                           onOverlayClick={()=>{this.setState({active: !this.state.active});}}

                    >

                    <Kmc427 />
                </LoginPage>
                <Dialog active={this.state.active_2}>
                    <Kmc427 />
                </Dialog>

            </div>

        );
    }
}


import {CardActions, CardTitle} from 'react-toolbox/lib/card';
import theme from './theme.scss';

const cardTitleStyle = {
    fontWeight: 500,
    padding: '4rem 0 3rem 0'
};

const forgotButton = {
    color: 'red'
};

const signInButton = {
    background: 'blue'
};

const buttonsContainer = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '2rem 2rem 2rem 1.3rem'
};

class Kmc427 extends React.Component {
    state = {email: '', password: '', check1: true, check2: false};


    render () {
        return (
            <div>
                <div>
                    <CardTitle style={cardTitleStyle}>Log In</CardTitle>

                    <p className={theme['enter-email-message']}>Enter your email address and we'll send you
                        instruction on how
                        to reset your password.</p>
                    <Input type="email"
                           value={this.state.email}
                           label="Email"
                           onChange={(v)=>{this.setState({email: v});}}
                           key="email"
                        />
                    <Input type="password"
                           value={this.state.password}
                           label="Password"
                           onChange={(p)=>{this.setState({password: p});}}
                           icon='visibility' // or 'visibility_off' when user start inserting password
                           key="pass"
                           className={theme.input}
                        />

                </div>

                <CardActions style={buttonsContainer}>
                    <Button label="FORGOT PASSWORD?" style={forgotButton}/>
                    <Button raised primary label="SIGN IN" style={signInButton}/>
                </CardActions>
            </div>
        );
    }
}


export default TestLoginPage;
