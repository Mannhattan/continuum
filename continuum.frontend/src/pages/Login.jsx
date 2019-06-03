import React, { Component } from 'react';
import styled from 'styled-components';

import Logo from "./../molecules/Logo";
import Button from './../atoms/Button';



class Login extends Component {
    render() {
        return (
            <LoginSection>
                <LoginWrapper>
                    <Logo margins="30px 0" big/>

                    <InputDesc>Login</InputDesc>
                    <Input type="text" />
                    <InputDesc>Password</InputDesc>
                    <Input type="password" />

                    <Button outline href="/dashboard" margin="15px 0 0 0" width="100%">Login</Button>
                </LoginWrapper>
            </LoginSection>
        );
    }
}



const LoginSection = styled.section`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: center;
    align-items: center;

    background: #6441A5;
    background: -webkit-linear-gradient(to bottom, #2a0845, #6441A5);
    background: linear-gradient(to bottom, #2a0845, #6441A5);

    /* background: #0F2027;
    background: -webkit-linear-gradient(to bottom, #2C5364, #203A43, #0F2027);
    background: linear-gradient(to bottom, #2C5364, #203A43, #0F2027);

    background: #000428;
    background: -webkit-linear-gradient(to bottom, #004e92, #000428);
    background: linear-gradient(to bottom, #004e92, #000428);

    background: #673AB7;
    background: -webkit-linear-gradient(to right, #512DA8, #673AB7);
    background: linear-gradient(to right, #512DA8, #673AB7); */

    /* background: #2a0845;
    background: #4B79A1;
    background: -webkit-linear-gradient(to right, #283E51, #4B79A1);
    background: linear-gradient(to right, #283E51, #4B79A1); */
`

const LoginWrapper = styled.div`
    width: 250px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: center;
    align-items: center;
`

const InputDesc = styled.p`
    width: 250px;
    font-family: 'BlenderProBook';
    font-size: 1.2em;
    color: #fff;
    font-weight: 100;
    text-align: left;
`

const Input = styled.input`
    display: block;
    width: 250px;
    padding: 5px 5px;

    font-family: 'Quicksand';
    font-size: 1.2em;
    color: #000;
    font-weight: 100;

    border: 1px solid #fff;
    border-radius: 3px;
    margin: 10px;
`

// const LoginButton = styled.a`
    
// `

export default Login;