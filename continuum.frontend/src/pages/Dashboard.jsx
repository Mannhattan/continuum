import React, { Component } from 'react';

import "./Dashboard.scss";

import Menu from './../components/Menu.jsx';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <Menu dashboard/>
            
                <section className="content dashboard">
                    <div className="header">
                        <h1>Dashboard</h1>
                    </div>
                </section>
            </div>
        );
    }
}

export default Dashboard;