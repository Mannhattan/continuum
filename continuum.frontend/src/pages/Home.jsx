import React, { Component } from 'react';

import "./Home.scss";

import icon from "./../assets/Untitled-12-01.png";

class Home extends Component {
    render() {
        return (
            <section className="landing">
                <i className="fas fa-infinity"></i>
                {/* <img src={icon} alt=""/> */}
                <a href="/login" className="login">Login</a>
            </section>
        );
    }
}

export default Home;