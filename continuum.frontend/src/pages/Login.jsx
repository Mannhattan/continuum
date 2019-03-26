import React, { Component } from 'react';

import "./Login.scss";

import icon from "./../assets/Untitled-12-01.png";

class Login extends Component {
    render() {
        return (
            <section className="login">
                <div className="wrapper">
                    <i className="fas fa-infinity"></i>
                    {/* <img src={icon} alt=""/> */}

                    <p>Login</p>
                    <input type="text"/>
                    <p>Password</p>
                    <input type="password"/>

                    <a href="" className="login">Login</a>
                </div>
            </section>
        );
    }
}

export default Login;