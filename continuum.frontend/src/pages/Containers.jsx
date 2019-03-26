import React, { Component } from 'react';

import "./Containers.scss";

import Menu from './../components/Menu.jsx';

class Containers extends Component {
    render() {
        return (
            <div>
                <Menu containers/>
            
                <section className="content containers">
                    <div className="header">
                        <h1>Containers</h1>
                    </div>
                </section>
            </div>
        );
    }
}

export default Containers;