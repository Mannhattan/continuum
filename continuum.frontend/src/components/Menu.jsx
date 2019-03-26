import React, { Component } from 'react';

import "./Menu.scss";

import icon from "./../assets/Untitled-12-01.png";

class Menu extends Component {
    constructor(props) {
        super();
    }

    logout(e) {
        e.preventDefault();
        alert("Logging out...");
    }

    render() {
        return (
            <nav className="menu">
                <i className="fas fa-infinity logo"></i>
                {/* <img src={icon} alt=""/> */}
                <h1>CONTINUUM</h1>
                {/* <i className="fas fa-toolbox"></i> */}
                <a href="/dashboard" className={this.props.dashboard ? "menu-item item-selected" : "menu-item"}><i className="fas fa-th"></i> Dashboard</a>
                <a href="/pipelines" className={this.props.pipelines ? "menu-item item-selected" : "menu-item"}><i class="fas fa-sync-alt"></i> Pipelines</a>
                <a href="/containers" className={this.props.containers ? "menu-item item-selected" : "menu-item"}><i className="fas fa-box-open"></i> Containers</a>
                <a href="/images" className={this.props.images ? "menu-item item-selected" : "menu-item"}><i className="fas fa-cube"></i> Images</a>
                <a href="/boards" className={this.props.boards ? "menu-item item-selected" : "menu-item"}><i class="fab fa-trello"></i> Boards</a>
                <a href="/settings" className={this.props.settings ? "menu-item item-selected" : "menu-item"}><i className="fas fa-cog"></i> Settings</a>
                <a href="" onClick={(e) => this.logout(e)} className="menu-item"><i className="fas fa-sign-out-alt"></i> Logout</a>
            </nav>
        );
    }
}

export default Menu;