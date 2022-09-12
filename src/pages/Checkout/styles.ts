import styled from "styled-components";

export const CheckoutContainer = styled.main`
    margin-top: 4rem;
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    grid-template-areas:
        "subtitle subtitle"
		"form ShoppingList"
		"form ShoppingList"
		;
    align-items: flex-start;
    padding-right: 1rem;

    gap: 1.25rem;

`
export const CheckoutSubtitle = styled.span`
    color: ${props => props.theme["base-subtitle"]};
    font-family: 'Baloo 2', cursive;
    font-size: 1.125rem;
`
const CheckoutBaseSection = styled.div`
    background: ${props => props.theme["base-card"]}; 
    padding: 2.5rem;
    border-radius: 8px;
    margin-top: -0.25rem;

    display: flex;
    flex-direction: column;
    gap: 2rem;
    
`
export const CheckoutFormContainer = styled(CheckoutBaseSection)`
    grid-area: form;
`

export const CheckoutPaymentContainer = styled(CheckoutBaseSection)`
`
export const CheckoutPedidoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`

const CheckoutSectionTitle = styled.div`
    display: flex;

    div {
        display:flex;
        flex-direction: column;
        gap: 0.25rem;
    }

    p {
        color: ${props => props.theme["base-subtitle"]};
    }
    span {
        font-size: 0.875rem;
    }
`

export const CheckoutFormTitle = styled(CheckoutSectionTitle)`
    svg {
        color: ${props => props.theme["yellow-dark"]};
        margin-right: 0.5rem;
    }
`
export const CheckoutPaymentSectionTitle = styled(CheckoutSectionTitle)`
     svg {
        color: ${props => props.theme.purple};
        margin-right: 0.5rem;
    }
`
export const CheckoutPaymentOptions = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: space-around;
`
export const CheckoutForm = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;

`
export const Form = styled.form`
    display: none;
`
const BaseInput = styled.input`
    background: ${props => props.theme["base-input"]};
    height: 2.625rem;
    border: 1px solid ${props => props.theme["base-button"]};
    border-radius: 4px;
    padding: 0 0.5rem;
    font-size: 0.875rem;
    margin-top: 0.25rem;

    &::placeholder{
        color: ${props => props.theme["base-label"]};   
    }
`

export const InputRua = styled(BaseInput)`
    width: 100%;
`
export const Input = styled(BaseInput)`
    width: 35.71%;
`

export const InputComplemento = styled(BaseInput)`
    flex:1;
`
export const InputUF = styled(BaseInput)`
    width: 10.71%;
`

export const CheckoutShoppingListContainer = styled(CheckoutBaseSection)`
    border-radius: 8px 35px 8px 35px;
    grid-area: ShoppingList;
`
export const CheckoutShoppingListItem = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;
    img {
        width: 4rem;
        height: 4rem;
        margin-right: 1rem;
    }

    

    & + & {
        border-top: 1px solid ${props => props.theme["base-button"]};
        padding-top: 2rem;
    }

   
`
export const CheckoutShoppingListItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
`
export const CheckoutShoppingListItemPrice = styled.span`
    font-size: 1rem;
    color: ${props => props.theme["base-text"]}; 
    font-weight: 700;
    
`

export const CheckoutShoppingListTotalContainer = styled.div`
    border-top: 1px solid ${props => props.theme["base-button"]};
    padding-top: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`

export const CheckoutShoppingListInfo = styled.div`
    display: flex;
    justify-content: space-between;

    span {
        color: ${props => props.theme["base-text"]};
        font-size: 1rem;
    }

    label {
        color: ${props => props.theme["base-text"]};
        font-size: 0.875rem;
    }
`
export const CheckoutShoppingListTotal = styled.div`
    display: flex;
    justify-content: space-between;

    span {
        color: ${props => props.theme["base-subtitle"]};
        font-size: 1.25rem;
        font-weight: 700;
    }
`
export const ConfirmButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    color:${props => props.theme.white};
    background: ${props => props.theme.yellow};
    height: 2.875rem;
    border: 0;
    border-radius: 8px;
    font-weight: 700;
    font-size: 0.875rem;
    margin-top: 0.5rem;
    cursor: pointer;

    &:hover{
        background: ${props => props.theme["yellow-dark"]};
    }
    
    &:disabled{
        cursor: not-allowed;
        background: ${props => props.theme["yellow-light"]};
    }
`
export const OptionsContainer = styled.div`
    display: flex;
    gap: 0.5rem;
`
export const RemoveButton = styled.button`
    border: 0;
    background: ${props => props.theme["base-button"]};
    color: ${props => props.theme["base-text"]};
    font-size: 0.75rem;
    padding: 0.5rem;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    cursor: pointer;

    svg {
        color: ${props => props.theme.purple}
    }
    &:hover{
        background: ${props => props.theme["base-hover"]};
    }
`