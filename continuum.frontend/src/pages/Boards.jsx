import React, { Component } from 'react';

import "./Boards.scss";

import Menu from './../components/Menu.jsx';

class Boards extends Component {
    constructor() {
        super();

        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                <Menu boards/>
            
                <section className="content boards">
                    <div className="header">
                        <h1>Boards</h1>
                    </div>
                </section>
            </div>
        );
    }
}

export default Boards;