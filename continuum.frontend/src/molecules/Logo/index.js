import React, { Component } from 'react';
import styled from 'styled-components';

import signet from './signet.png';

const LogoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: center;
    align-items: center;
    margin: ${props => props.margins ? props.margins : null};
`

const Image = styled.img.attrs({
    src: (signet)
})`
    width: ${props => props.big ? "58px" : "38px"};
    height: auto;
`

const H1 = styled.h1`
    font-family: 'BlenderProBook';
    font-size: ${props => props.big ? "3.4em" : "2.5em"};
    color: #fff;
    font-weight: 600;
`

const Logo = ({ margins, big }) => {
    return (
        <LogoWrapper margins={margins}>
            <Image big={big} />
            <H1 big={big}>ontinuum</H1>
        </LogoWrapper>
    )
}


export default Logo;