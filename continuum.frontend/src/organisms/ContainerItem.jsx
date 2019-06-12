import React, { Component } from 'react';
import styled from 'styled-components';

import Button from './../atoms/Button';

import Checkbox from './../molecules/Checkbox.jsx';

class ContainerItem extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <Container>
                {/* <Checkbox /> */}
                <ColumnItem title={this.props.name} width="15%">{this.props.name}</ColumnItem>
                
                <State state={this.props.state}>{this.props.state}</State>
                
                <ColumnItem title={this.props.image} width="15%">{this.props.image}</ColumnItem>
                <ColumnItem title={this.props.command} width="15%">{this.props.command}</ColumnItem>
                <ColumnItem width="200px">{this.props.created}</ColumnItem>
                <ColumnItem width="15%">{this.props.ports}</ColumnItem>

                <Actions>
                    <ActionItem title="Start container"><i className="fas fa-play"></i></ActionItem>
                    <ActionItem title="Exec to container"><i className="fas fa-terminal"></i></ActionItem>
                    <ActionItem title="Restart container"><i className="fas fa-sync"></i></ActionItem>
                    <ActionItem title="Delete container"><i className="far fa-trash-alt"></i></ActionItem>
                </Actions>
            </Container>
        );
    }
}



const Container = styled.div`
    width: calc(100% - 60px);
    height: auto;
    margin: 15px 30px 15px 30px;
    /* padding: 5px 0; */

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: center;
    align-items: center;

    /* border-bottom: 1px solid #E0E0E0; */
`

const ColumnItem = styled.p`
    width: ${props => props.width};
    font-family: 'Quicksand';
    font-size: 1.2em;
    font-weight: 100;
    text-align: left;
    color: #000;

    &:nth-of-type(1), &:nth-of-type(3), &:nth-of-type(4) {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`

const State = styled.p`
    width: 100px;
    /* height: 20px; */
    padding: 5px 20px;
    margin-right: 30px;
    font-family: 'BlenderProBook';
    font-size: 1.1em;
    font-weight: 600;
    text-align: center;
    color: #fff;
    background: ${props => props.state == "Running" ? "#4CAF50" : (props.state == "Stopped" ? "#6441A5" : "#C0392B")};
    border-radius: 5px;
`

const Actions = styled.div`
    width: 160px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: center;
    align-items: center;
    /* margin: 0 20px; */
`

const ActionItem = styled.a`
    font-family: 'BlenderProBook';
    font-size: 1.1em;
    font-weight: 600;
    text-align: left;
    color: #6441A5;
    margin: 0 10px;
    transition: .2s ease-in-out;

    &:hover {
        transition: .2s ease-in-out;
        opacity: .5;
        cursor: pointer;
    }

    &:first-of-type {
        margin: 0 10px 0 0;
    }

    &:last-of-type {
        margin: 0;
    }

    svg {
        width: 20px !important;
        height: 20px !important;
    }
`

export default ContainerItem;