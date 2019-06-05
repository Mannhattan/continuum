import React, { Component } from 'react';
import styled from 'styled-components';

import Menu from './../organisms/Menu.jsx';
import TopMenu from './../organisms/TopMenu.jsx';

import SectionContent from './../atoms/SectionContent';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <Menu dashboard/>

                <SectionContent>
                    <TopMenu title="Dashboard" profileName="mannhattan" />
                </SectionContent>
            </div>
        );
    }
}



export default Dashboard;