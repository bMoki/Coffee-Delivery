import styled from "styled-components";

export const CoffeCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: ${props => props.theme["base-card"]};
    width: 16rem;
    height: 19.375rem;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 8px 35px 8px 35px;
    margin-top: 0.5rem;
    img {
        margin-top: -2.5rem;
        width: 6.25rem;
        height: 6.25rem;
    }

`
export const CoffeCardFooter = styled.footer`
    display: flex;
    align-items: center;
    gap: 0.5rem ;


       
`
export const CoffeCardTagContainer = styled.div`
    display: flex;
    gap: 0.5rem;
`

export const CoffeCardTag = styled.span`
    color: ${props => props.theme["yellow-dark"]};
    background: ${props => props.theme["yellow-light"]};
    padding: 0.5rem;
    font-size: 0.625rem;
    font-weight: 700;
    border-radius: 16px;
    line-height: 0.2rem;
`
export const CoffeCardName = styled.span`
    font-size:1.25rem;
    font-family: 'Baloo 2', cursive;
    font-weight: 700;
    color: ${props => props.theme["base-subtitle"]};
`
export const CoffeCardDescription = styled.span`
    font-size: 0.875rem;
    color: ${props => props.theme["base-label"]};
    display: flex;
    justify-content: center;
    align-items: center;
    padding-inline: 1rem;
    text-align:center;
`
export const CoffeCardCartButton = styled.button`
    display: flex;
    align-items: center;
    background: ${props => props.theme["purple-dark"]};
    border: 0;
    padding: 0.5rem;
    border-radius: 8px;
    color: ${props => props.theme["white"]};

    cursor: pointer;

    &:hover{
        background: ${props => props.theme["purple"]};
    }
`

export const CoffeCardMoney = styled.span`
    font-family: 'Baloo 2', cursive;
    font-weight: 800;    
    font-size:1.25rem;
    color: ${props => props.theme["base-text"]};
    margin-right: 1rem;

    &::before{
        content: 'R$ ';
        font-family: 'Roboto', sans-serif;
        font-weight: 400;    
        font-size: 0.75rem;
    }
`