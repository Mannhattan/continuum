import styled from 'styled-components';

const primary = `
    color: #fff;
    background: #6441A5;
    border: 2px solid #6441A5;
    
    transition: .2s ease-in-out;

    &:hover {
        transition: .2s ease-in-out;
        background: #fff;
        color: #6441A5;
        cursor: pointer;
    }
`

const secondary = `
    color: #6441A5;
    border: 2px solid #6441A5;
    
    transition: .2s ease-in-out;

    &:hover {
        transition: .2s ease-in-out;
        background: #6441A5;
        color: #fff;
        cursor: pointer;
    }
`

const outline = `
    color: #fff;
    border: 2px solid #fff;
    
    transition: .2s ease-in-out;

    &:hover {
        transition: .2s ease-in-out;
        background: #fff;
        color: #6441A5;
        cursor: pointer;
    }
`

const Button = styled.a`
    display: block;
    text-decoration: none;
    border-radius: 4px;

    font-family: 'BlenderProBook';
    font-size: 1.2em;
    font-weight: 100;

    text-align: center;
    padding: 9px 20px;

    ${props => props.primary ? primary : null}
    ${props => props.secondary ? secondary : null}
    ${props => props.outline ? outline : null}

    width: ${props => props.width ? props.width : "auto"};
    margin: ${props => props.margin ? props.margin : 0};
`

export default Button;