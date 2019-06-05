import React, { Component } from 'react';
import styled from 'styled-components';

import Logo from "../molecules/Logo";

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
            <Navigation>
                <Logo margins="50px 0" />

                <NavigationLink href="/dashboard" className={this.props.dashboard ? "item-selected" : null}><i className="fas fa-th"></i> Dashboard</NavigationLink>
                <NavigationLink href="/pipelines" className={this.props.pipelines ? "item-selected" : null}><i className="fas fa-sync-alt"></i> Pipelines</NavigationLink>
                {/* <i className="fas fa-cube"></i> */}
                <NavigationLink href="/containers" className={this.props.containers ? "item-selected" : null}><i className="fas fa-boxes"></i> Containers</NavigationLink>
                <NavigationLink href="/images" className={this.props.images ? "item-selected" : null}><i className="fas fa-box-open"></i> Images</NavigationLink>
                {/* <a href="/boards" className={this.props.boards ? "menu-item item-selected" : "menu-item"}><i class="fab fa-trello"></i> Boards</a> */}
                <NavigationLink href="/settings" className={this.props.settings ? "item-selected" : null}><i className="fas fa-cog"></i> Settings</NavigationLink>
                <NavigationLink href="" onClick={(e) => this.logout(e)}><i className="fas fa-sign-out-alt"></i> Logout</NavigationLink>

                <Coffee href="https://github.com/mannhattan" target="_blank"><i className="fas fa-mug-hot"></i> Buy me a coffee</Coffee>
            </Navigation>
        );
    }
}



const Navigation = styled.nav`
    width: 300px;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    /* box-shadow: 0 1px 3px rgba($color: $main-color, $alpha: .12), 0 1px 2px rgba(0,0,0,0.24); */
    /* box-shadow: 0 3px 6px rgba($color: $main-color, $alpha: .16), 0 3px 6px rgba($color: $main-color, $alpha: .23); */
    box-shadow: 0 0 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);

    background: #6441A5;
    background: -webkit-linear-gradient(to bottom, #2a0845, #6441A5);
    background: linear-gradient(to bottom, #2a0845, #6441A5);
`

const NavigationLink = styled.a`
    display: block;
    text-decoration: none;
    color: #fff;
    /* // width: 100%; */
    padding: 10px 30px;
    font-family: 'BlenderProBook';
    font-size: 1.2em;
    font-weight: 100;
    opacity: .75;
    margin-bottom: 5px;
    transition: .2s ease-in-out;

    &.item-selected {
        opacity: 1;
        padding-left: 40px;
    }

    &:hover {
        transition: .2s ease-in-out;
        opacity: 1;
        padding-left: 40px;
        cursor: pointer;
    }

    svg {
        width: 18px !important;
        height: auto !important;
        margin-right: 10px;
    }
`

const Coffee = styled.a`
    display: block;
    width: 300px;
    text-decoration: none;
    position: absolute;
    bottom: 20px;
    color: #fff;
    font-family: 'BlenderProBook';
    font-size: 1em;
    text-align: center;

    svg {
        margin-right: 5px;
    }
`

export default Menu;