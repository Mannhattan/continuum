import React, { Component } from 'react';

import "./Settings.scss";

import Menu from './../components/Menu.jsx';

class Settings extends Component {
    render() {
        return (
            <div>
                <Menu settings/>
            
                <section className="content settings">
                    <div className="header">
                        <h1>Settings</h1>
                    </div>
                </section>
            </div>
        );
    }
}

export default Settings;