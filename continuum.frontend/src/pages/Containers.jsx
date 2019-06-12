import React, { Component } from 'react';
import styled from 'styled-components';

import Menu from './../organisms/Menu.jsx';
import TopMenu from './../organisms/TopMenu.jsx';
import ContainerItem from './../organisms/ContainerItem.jsx';

import SectionContent from './../atoms/SectionContent';

class Containers extends Component {
    constructor(props) {
        super(props);

        this.state = {
            containers: [{
                "id": 1,
                "name": "Toughjoyfax",
                "state": "Running",
                "image": "imcsorley0",
                "command": "ut ultrices vel.js",
                "created": "09/09/2018",
                "ports": [
                  "209.129.32.117",
                  "201.231.182.81",
                  "199.146.165.237",
                  "90.130.75.197"
                ]
              }, {
                "id": 2,
                "name": "Fixflex",
                "state": "Error",
                "image": "mquantrell1",
                "command": "mi nulla ac.css",
                "created": "03/06/2019",
                "ports": [
                  "247.70.60.115",
                  "160.88.193.54",
                  "180.55.136.80",
                  "243.29.218.222"
                ]
              }, {
                "id": 3,
                "name": "Stringtough",
                "state": "Error",
                "image": "etryhorn2",
                "command": "lobortis ligula sit.java",
                "created": "10/05/2019",
                "ports": [
                  "226.182.67.175"
                ]
              }, {
                "id": 4,
                "name": "Transcof",
                "state": "Stopped",
                "image": "lsimmig3",
                "command": "odio porttitor.js",
                "created": "30/04/2019",
                "ports": [
                  "124.72.20.222",
                  "4.137.28.101",
                  "4.237.161.94",
                  "139.229.206.119"
                ]
              }, {
                "id": 5,
                "name": "Matsoft",
                "state": "Running",
                "image": "dlilly4",
                "command": "blandit nam nulla.java",
                "created": "05/06/2019",
                "ports": [
                  "234.183.207.124"
                ]
              }, {
                "id": 6,
                "name": "Zathin",
                "state": "Stopped",
                "image": "jpobjoy5",
                "command": "quis justo.js",
                "created": "17/01/2019",
                "ports": [
                  "58.202.197.55"
                ]
              }, {
                "id": 7,
                "name": "Subin",
                "state": "Running",
                "image": "bdrummond6",
                "command": "dictumst.html",
                "created": "10/06/2019",
                "ports": [
                  "193.149.109.178"
                ]
              }, {
                "id": 8,
                "name": "Sonsing",
                "state": "Error",
                "image": "wtallquist7",
                "command": "nulla.js",
                "created": "26/05/2019",
                "ports": [
                  "159.58.12.148"
                ]
              }]
        }
    }

    render() {
        return (
            <div>
                <Menu containers/>

                <SectionContent>
                    <TopMenu title="Containers" profileName="mannhattan" button="Add new container" />

                    <ListHeader>
                        <ColumnTitle width="15%">Name</ColumnTitle>
                        <ColumnTitle width="130px">State</ColumnTitle>
                        <ColumnTitle width="15%">Image</ColumnTitle>
                        <ColumnTitle width="15%">Command</ColumnTitle>
                        <ColumnTitle width="200px">Created</ColumnTitle>
                        <ColumnTitle width="15%">Ports</ColumnTitle>
                        <ColumnTitle width="160px">Actions</ColumnTitle>
                    </ListHeader>
                    
                    {this.state.containers.map((container) => 
                        <ContainerItem key={container.id} name={container.name} state={container.state} image={container.image} command={container.command} created={container.created} ports={container.ports.join(" ")} />
                    )}
                    
                </SectionContent>
            </div>
        );
    }
}



const ListHeader = styled.div`
    width: calc(100% - 60px);
    height: 50px;
    margin: 98px 30px 0 30px;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: center;
    align-items: center;

    border-bottom: 2px solid #e0e0e0;
`

const ColumnTitle = styled.p`
    width: ${props => props.width};
    font-family: 'BlenderProBook';
    font-size: 1.2em;
    font-weight: 600;
    text-align: left;
    color: #000;
`

export default Containers;