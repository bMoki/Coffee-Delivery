import styled from "styled-components"

export const SuccessContainer = styled.div`
    display: flex;
    margin-top: 7rem;
    flex-wrap: wrap;
`
export const InfoContainer = styled.div`
    background-image: -webkit-gradient(linear, left bottom, right top, color-stop(0.33, ${props => props.theme["yellow"]}), color-stop(0.67, ${props => props.theme["purple"]}));
    background-image: -moz-linear-gradient(center left, ${props => props.theme["yellow"]} 33%, ${props => props.theme["purple"]} 67% );
    padding: 1px;
    border-radius: 8px 35px 8px 35px;
    margin: auto 0;

    &>div {
        background: ${props => props.theme.background}; 
        display: flex;
        flex-direction: column;
        border-radius: 8px 35px 8px 35px;
        gap: 2rem;
        padding: 2.5rem;
        padding-right: 9rem;
    }
`
export const TitleContainer = styled.div`
    display:flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 2rem;
`
export const Title = styled.span`
    font-family: 'Baloo 2', cursive;
    font-size: 2rem;
    font-weight: 800;
    color: ${props => props.theme["yellow-dark"]};
`

export const Subtitle = styled.span`
    font-size: 1.25rem;
    color: ${props => props.theme["base-subtitle"]};
`

export const InfoItem = styled.div`
    display: flex;
    gap: 0.75rem;
    align-items: center;
    padding-right: 2rem ;
`
const ICON_COLOR = {
    yellowDark: 'yellow-dark',
    yellow: 'yellow',
    purple: 'purple'

} as const

interface IconContainerProps {
    iconColor: keyof typeof ICON_COLOR;
}
export const IconContainer = styled.span<IconContainerProps>`
    background: ${props => props.theme[ICON_COLOR[props.iconColor]]};
    display: flex;
    align-items: center;
    border: 0;
    padding: 0.5rem;
    border-radius: 999px;
    color: ${props => props.theme["white"]};
`
export const ItemContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
`
export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-left: 5rem;
`