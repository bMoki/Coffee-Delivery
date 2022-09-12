import styled from "styled-components";
import BACKGROUND from '../../assets/Background.svg';

export const HomeContainer = styled.main`
    margin-top: 7rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    gap: 3rem;

     
`

export const HomeMainTitle = styled.span`
    font-size: 3rem;
    color: ${props => props.theme["base-title"]};
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    line-height: 4rem;
    
    
`
export const Background = styled.div`
    z-index: -1;
    left: 0;
    right: 0;
    position: absolute;

    -webkit-filter: blur(70px);
    -moz-filter: blur(70px);
    -o-filter: blur(70px);
    -ms-filter: blur(70px);
    filter: blur(70px);  
    
`
export const HomeStart = styled.div`
    display: flex;
    gap: 9rem;
    position: relative;
   

    /* background-image: url(${BACKGROUND});
        background-size:cover;
        width: 100%;
        height: 100%; 
        background-position: center;
        background-repeat: no-repeat;
        background-attachment: scroll; */

    /* &::before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        z-index: -1;

        
        background-image: url(${BACKGROUND});
        background-size:cover;
        width: 100%;
        height: 100%; 
        background-position: top;
        background-repeat: no-repeat;
        background-attachment: scroll;

         /* -webkit-filter: blur(100px);
        -moz-filter: blur(100px);
        -o-filter: blur(100px);
        -ms-filter: blur(100px);
        filter: blur(100px);  
    }   */
    
`
export const HomeStartContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 37rem;

    
    
`
export const HomeMainTitleSubtitle = styled.span`
    font-size: 1.25rem;
    color: ${props => props.theme["base-subtitle"]};
    margin-bottom: 3rem;
`

export const HomeStartContentItemColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    
`

const ITEMS_COLOR = {
    yellowDark: 'yellow-dark',
    yellow: 'yellow',
    baseText: 'base-text',
    purple: 'purple'

} as const

interface ContentItemsProps {
    itemColor: keyof typeof ITEMS_COLOR;
}

export const HomeStartContentItem = styled.div<ContentItemsProps>`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    //width: 20rem;
    min-width: 15rem;
    justify-content: start;
    

    button {
        display: flex;
        align-items: center;
        background: ${props => props.theme[ITEMS_COLOR[props.itemColor]]};
        border: 0;
        padding: 0.5rem;
        border-radius: 999px;
        color: ${props => props.theme["white"]};
    }
`

export const HomeStartContentItemContainer = styled.div`
    display: flex;
    gap: 3rem;
`

export const CoffeListContainer = styled.div`
    display: flex;
    gap: 2rem;
    width: 100%;
    flex-wrap: wrap;
`
export const CoffeListSubtitle = styled.div`
    margin-top: 4rem;
    display: flex;
    justify-content: start;
    
    span {
        
        font-size: 2rem;
        color: ${props => props.theme["base-subtitle"]};
        font-family: 'Baloo 2', cursive;
        font-weight: 800;
        line-height: 4rem;
    }
`