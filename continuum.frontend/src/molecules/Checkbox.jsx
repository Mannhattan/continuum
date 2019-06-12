import React, { Component } from 'react';
import styled from 'styled-components';

class Checkbox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            checked: false
        }
    }

    handleCheckboxChange = event =>
        this.setState({ checked: event.target.checked });

    render() {
        return (
            <div>
                <label>
                    <CheckboxItem
                        checked={this.state.checked}
                        onChange={this.handleCheckboxChange}
                    />
                    {/* <span></span> */}
                </label>
            </div>
        )
    }
}



const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
    border: 0;
    clip: rect(0 0 0 0);
    /* clippath: inset(50%); */
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`

const StyledCheckbox = styled.div`
    display: inline-block;
    width: 20px;
    height: 20px;
    background: ${props => props.checked ? '#6441A5' : 'none'};
    border: 2px solid #6441A5;
    border-radius: 3px;
    transition: .2s ease-in-out;

    &:hover {
        transition: .2s ease-in-out;
        background: #6441A5;
        cursor: pointer;
    }
`

const CheckboxContainer = styled.div`
    display: inline-block;
    vertical-align: middle;
    margin-right: 10px;
    width: 20px;
    height: 20px;
`

// const Icon = styled.svg`
//     fill: none;
//     stroke: ${props => props.checked ? 'white' : '#6441A5'};
//     stroke-width: 2px;
// `

{/* <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon> */}

const CheckboxItem = ({ className, checked, ...props }) => (
    <CheckboxContainer className={className}>
        <HiddenCheckbox checked={checked} {...props} />
        <StyledCheckbox checked={checked} />
    </CheckboxContainer>
  )

export default Checkbox;