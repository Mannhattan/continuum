import React, { Component } from 'react';
import styled from 'styled-components';

import Button from './../atoms/Button';

class PipelineItem extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <Pipeline passed={this.props.passed}>
                <StatusIcon passed={this.props.passed}>{this.props.passed ? <i className="fas fa-check"></i> : <i className="fas fa-times"></i>}</StatusIcon>

                <DetailsWrapper>
                    <GeneralWrapper>
                        <Title>{this.props.title}</Title>
                        <Detail>Branch <span>{this.props.branch}</span></Detail>
                        <Detail>Commit <span>{this.props.commit}</span></Detail>
                        <Changes>Changes by <span>{this.props.user}</span></Changes>
                    </GeneralWrapper>

                    <GeneralWrapper>
                        <Time><i className="fas fa-stopwatch"></i> {this.props.timeTaken}</Time>
                        <Time><i className="far fa-clock"></i> {this.props.timeAgo}</Time>
                    </GeneralWrapper>
                </DetailsWrapper>
    
                <ControlsWrapper>
                    <Button primary width="136px">Run pipeline</Button>
                    <Button secondary margin="10px 0 0 0" width="136px">Details</Button>
                    <Button secondary margin="10px 0 0 0" width="136px">Edit</Button>
                </ControlsWrapper>
            </Pipeline>
        );
    }
}



const Pipeline = styled.div`
    /* width: calc(100% - 60px); */
    width: auto;
    height: 200px;
    margin: 30px 30px 0 30px;
    /* background: rgba(76, 175, 80, .4); */
    border: 2px solid ${props => props.passed ? "#6441A5" : "#ff0000"};
    border-radius: 5px;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: center;
    align-items: center;
`

const GeneralWrapper = styled.div`
    /* margin: 20px 60px; */
`

const StatusIcon = styled.div`
    width: 200px;
    height: 200px;

    svg {
        width: 100px !important;
        height: 100px !important;
        /* color: 6441A5 #4CAF50; */
        color: ${props => props.passed ? "#6441A5" : "#ff0000"};
        margin: 50px;
    }
`

const DetailsWrapper = styled.div`
    /* width: calc(100% - 400px); */
    width: 800px;
    height: 200px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-content: space-between;
    align-items: space-between;
    padding: 0 40px 0 0;
`

const ControlsWrapper = styled.div`
    width: 196px;
    height: 160px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    align-items: center;

    border-left: 2px solid #6441A5;
    /* #e0e0e0 */
`

const Title = styled.h1`
    font-family: 'BlenderProBook';
    font-size: 2em;
    font-weight: 600;
    text-align: left;
    color: #6441A5;
    padding: 5px 0;
`

const Detail = styled.h1`
    font-family: 'BlenderProBook';
    font-size: 1.6em;
    font-weight: 600;
    text-align: left;
    /* color: #6441A5; */
    color: #000;
    padding: 5px 0;

    /* display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: center;
    align-items: center; */

    span {
        margin-left: 20px;
        font-weight: 100;
    }
`

const Changes = styled.h1`
    font-family: 'BlenderProBook';
    font-size: 1.6em;
    font-weight: 600;
    text-align: left;
    /* color: #6441A5; */
    color: #000;
    padding: 5px 0;

    /* display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: center;
    align-items: center; */

    span {
        margin-left: 20px;
        font-weight: 100;
    }
`

const Time = styled.p`
    font-family: 'BlenderProBook';
    font-size: 1.4em;
    font-weight: 100;
    text-align: left;
    /* color: #6441A5; */
    color: #000;
    margin: 10px 0;

    svg {
        width: 20px !important;
        height: 20px !important;
        color: #6441A5;
        margin-right: 5px;
    }
`

export default PipelineItem;