import React, { Component } from 'react';
import styled from 'styled-components';

import Menu from './../organisms/Menu.jsx';
import TopMenu from './../organisms/TopMenu.jsx';
import PipelineModal from './../organisms/PipelineModal.jsx';
import PipelineItem from './../organisms/PipelineItem.jsx';

import SectionContent from './../atoms/SectionContent';

class Pipelines extends Component {
    render() {
        return (
            <div>
                <Menu pipelines/>
            
                <SectionContent>
                    <TopMenu title="Pipelines" button="Add new pipeline" profileName="mannhattan" />

                    <PipelineItem passed={true} title="S3 Deploy Mercury" branch="master" commit="Validation (#1231)" user="mannhattan" timeTaken="3m 25s" timeAgo="36m 54s ago" />
                    <PipelineItem passed={false} title="Local TMA setup" branch="staging" commit="Integration tests added" user="tarkov" timeTaken="1m 54s" timeAgo="3h 21m ago" />
                    <PipelineItem passed={true} title="MV - OVE Build" branch="production" commit="Fixed lock.json" user="hmv" timeTaken="31s" timeAgo="1m 22s ago" />
                </SectionContent>
            </div>
        );
    }
}



export default Pipelines;