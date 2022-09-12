import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {    
        display: flex;
        gap: 0.75rem;
        align-items: center;

        

        button {
            display: flex;
            align-items: center;
            background: ${props => props.theme["yellow-light"]};
            border: 0;
            padding: 0.5rem;
            border-radius: 8px;
            color: ${props => props.theme["yellow-dark"]};
            
            

        }
    }

`
export const LocationItemContainer = styled.div`
    display: flex;
    gap:0.5rem;
    align-items: center;

    background: ${props => props.theme["purple-light"]};
    padding: 0.5rem;
    border-radius: 8px;
    font-size: 0.875rem;
    margin: 0.5rem 0;

    &:not(span){
        color: ${props => props.theme.purple};
    }

    span{
        color: ${props => props.theme["purple-dark"]};
    }
`
interface CartLinkProps {
    quantity: string;
}
export const ShoppingCartLink = styled.div<CartLinkProps>`
    
    a {
            width: 3rem auto;
            height: 3rem;
        
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            cursor: pointer;
            
            svg {
                cursor: pointer; 
            }
            

            &::after{
                display: flex;
                align-items: center;
                justify-content: center;
                width: 1.25rem;
                height: 1.25rem;
                content: '${props => props.quantity}';
                background: ${props => props.theme["yellow-dark"]};
                border-radius: 999px;
                font-weight: bold;
                font-size: 0.75rem;
                color: ${props => props.theme.white};
                margin-left: -0.75rem;
                margin-bottom: 2rem;

            }
        }
`