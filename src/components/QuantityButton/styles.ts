import styled from "styled-components";

export const QuantityButtonContainer = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 4.5rem;
   padding: 0.5rem;
   background: ${props => props.theme["base-button"]};
   color: ${props => props.theme["base-title"]};
   border-radius: 8px;
`

export const ButtonContainer = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: 0;
    color: ${props => props.theme.purple};
    
    cursor: pointer;
    
    &:hover{
        color: ${props => props.theme["purple-dark"]};
    }
`