import React, { Component } from 'react';
import styled from 'styled-components';

import Menu from './../organisms/Menu.jsx';
import SectionContent from './../atoms/SectionContent';
import ContentHeader from './../atoms/ContentHeader';
import HeaderTitle from './../atoms/HeaderTitle';

import Button from './../atoms/Button';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <Menu dashboard/>
            
                <SectionContent>
                    <ContentHeader>
                        <HeaderTitle>Dashboard</HeaderTitle>
                        <Button primary margin="0 20px">Test view</Button>
                    </ContentHeader>
                </SectionContent>
            </div>
        );
    }
}



export default Dashboard;