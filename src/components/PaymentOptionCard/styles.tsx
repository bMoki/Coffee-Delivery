import styled from "styled-components";

interface Props {
    selected: boolean
}

export const CardSelectorContainer = styled.button<Props>`
    padding: 1rem ;
    border: 1px solid ${props => props.selected ? props.theme["purple"] : 'transparent'};
    background: ${props => props.selected ? props.theme["purple-light"] : props.theme["base-button"]};
    color: ${props => props.theme["base-text"]};
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size:0.75rem;
    width: 11.16rem;

    svg {
        color: ${props => props.theme.purple};
    }
    
    &:hover{
        background: ${props => props.selected ? props.theme["purple-light"] : props.theme["base-hover"]};
        color: ${props => props.selected ? props.theme["base-text"] : props.theme["base-subtitle"]};
    }

`