import React, { Component } from 'react';
import styled from 'styled-components';

class PipelineModal extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <Pipeline>
                <PipelineWrapper>
                    <TitleWrapper>
                        <Title>Pipeline name</Title>
                        <Exit><i className="fas fa-times"></i></Exit>
                    </TitleWrapper>
                    
                    <ActionsWrapper>
                        <Action>
                            <Name>Action 1</Name>
                        </Action>
                        <AddAction><i className="fas fa-plus"></i></AddAction>
                    </ActionsWrapper>
                </PipelineWrapper>
            </Pipeline>
        );
    }
}



const Pipeline = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: center;
    align-items: center;
    /* background: #6441A5; */
    /* margin: 40px 30px;
    border-radius: 5px; */
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0,0,0,.3);
    z-index: 5;
`

const PipelineWrapper = styled.div`
    width: 400px;
    height: auto;
    background: #fff;
    border-radius: 3px;
    overflow: hidden;
    box-shadow: 0 0px 20px rgba(0,0,0,0.18);
`

const TitleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    box-shadow: 0 0px 20px rgba(0,0,0,0.18);
    background: #6441A5;
`

const Title = styled.h1`
    font-family: 'Quicksand';
    font-size: 1.4em;
    color: #fff;
    font-weight: 100;
    margin: 20px 20px;
`

const Exit = styled.a`
    padding: 20px;
    transition: .2s ease-in-out;
    color: #fff;

    &:hover {
        transition: .2s ease-in-out;
        opacity: .5;
        cursor: pointer;
    }

    svg {
        width: 20px !important;
        height: 20px !important;
    }
`

const ActionsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: flex-start;
    align-items: flex-start;
    margin: 20px 20px;
`

const Action = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: center;
    align-items: center;

    border: 2px solid #6441A5;
    border-radius: 5px;
    width: 200px;
    height: 130px;
    /* border: 2px solid #6441A5; */
    /* background: #6441A5; */
    /* margin: 20px 30px; */
    /* border-radius: 5px; */
    /* width: 200px; */
    /* height: 200px; */
`

const AddAction = styled.a`
    display: block;
    text-decoration: none;
    padding: 10px;
    border: 2px solid #6441A5;
    border-radius: 50%;
    margin: 0 10px;

    svg {
        width: 20px !important;
        height: 20px !important;
        color: #6441A5;
    }
`

const Name = styled.h2`
    font-family: 'Quicksand';
    font-size: 1.7em;
    color: #6441A5;
    font-weight: 600;
`

export default PipelineModal;