import React, { Component } from 'react';
import styled from 'styled-components';

import Button from './../atoms/Button';

const logo = "https://png.pngtree.com/svg/20170602/0db185fb9c.png";

class TopMenu extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <TopMenuWrapper>
                <TitleWrapper>
                    <Title>{this.props.title}</Title>
                    {this.props.button ? <Button primary margin="0 20px">{this.props.button}</Button> : null}
                </TitleWrapper>

                <ProfileWrapper>
                    <ProfileAvatar src={logo} />
                    <ProfileName>{this.props.profileName} <i className="fas fa-angle-down"></i></ProfileName>
                </ProfileWrapper>
            </TopMenuWrapper>
        );
    }
}



const TopMenuWrapper = styled.section`
    width: calc(100% - 300px);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: center;
    align-items: center;

    position: fixed;
    top: 0;
    right: 0;

    background: #fff;
    z-index: 3;
    /* border-bottom: 2px solid #e0e0e0; */
    box-shadow: 0 0px 10px rgba(0,0,0,0.14);
`

const TitleWrapper = styled.div`
    width: calc(100% - 250px);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: center;
    align-items: center;
`

const Title = styled.h1`
    font-family: 'BlenderProBook';
    font-size: 2em;
    font-weight: 600;
    text-align: left;
    color: #6441A5;
    padding: 20px 30px;
`



const ProfileWrapper = styled.div`
    width: 250px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: center;
    align-items: center;

    border-left: 2px solid #e0e0e0;
    padding: 0 15px;
`

const ProfileAvatar = styled.img`
    width: 40px;
    height: auto;
    margin: 0;
`

const ProfileName = styled.h1`
    font-family: 'Quicksand';
    font-size: 1.5em;
    color: #6441A5;
    font-weight: 600;
    margin-left: 10px;
    transition: .2s ease-in-out;

    svg {
        transition: .2s ease-in-out;
        height: 20px !important;
        width: auto;
    }

    &:hover {
        transition: .2s ease-in-out;
        cursor: pointer;

        svg {
            transition: .2s ease-in-out;
            opacity: .5;
        }
    }
`

export default TopMenu;