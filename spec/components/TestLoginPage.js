import React from 'react';
import LoginPage from '../../components/login-page';
import Input from 'react-toolbox/lib/input';
import Button from 'react-toolbox/lib/button';
import Dialog from 'react-toolbox/lib/dialog';
const TEST_AVATAR = 'https://dl.dropboxusercontent.com/u/2247264/assets/m.jpg';
const LIVE_4 = 'https://raw.githubusercontent.com/mytcat/react-toolbox/dev/static/img/Live4_logo_grey.png';

class TestLoginPage extends React.Component {

    state = {
        active: false,
        active_2: false
    }

    render () {
        return (
            <div>
                <Button label='open Login Page' onClick={()=>{this.setState({active: !this.state.active})}}/>
                <Button label='open Default dialog' onClick={()=>{this.setState({active_2: !this.state.active_2})}}/>
                <LoginPage logo={LIVE_4}
                           bgColor={'#444'}
                           active={this.state.active}
                           onOverlayClick={()=>{this.setState({active: !this.state.active})}}

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
;


/* kmc 427*/

/* global VERSION */
import {IconButton} from 'react-toolbox/lib/button';
import FontIcon from 'react-toolbox/lib/font_icon';
import {Card, CardActions, CardMedia, CardText, CardTitle} from 'react-toolbox/lib/card';
import theme from './theme.scss';
const pageBackground = {
    width: '100vw',
    height: '100vh',
    clear: 'both',
    background: 'rgba(0,0,0,0.81)'
}

const rectangle = {
    width: '700px',
    height: '380px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    background: '#4e4e4e',
    border: 'none'
}

const logoAndCard = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-45%,-50%)',
    display: 'flex'
}

const live4Logo = {
    width: '150px',
    marginRight: '60px'
}

const cardTitleStyle = {
    fontWeight: 500,
    padding: '4rem 0 3rem 0'
}

const forgotButton = {
    color: 'red'
}

const signInButton = {
    background: 'blue'
}

const buttonsContainer = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '2rem 2rem 2rem 1.3rem'
}

class Kmc427 extends React.Component {
    state = {email: "", password: "", check1: true, check2: false};


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
                           onChange={(v)=>{this.setState({email:v});}}
                           key="email"
                        // error='Please enter your email'
                        >
                    </Input>
                    <Input type="password"
                           value={this.state.password}
                           label="Password"
                           onChange={(p)=>{this.setState({password:p});}}
                           icon='visibility' // or 'visibility_off' when user start inserting password
                           key="pass"
                           className={theme['input']}
                        // error='Please enter your password'
                        >
                    </Input>

                </div>

                <CardActions style={buttonsContainer}>
                    <Button label="FORGOT PASSWORD?" style={forgotButton}/>
                    <Button raised primary label="SIGN IN" style={signInButton}/>
                </CardActions>
            </div>
        );
    }
}
/* **********/


export default TestLoginPage;
