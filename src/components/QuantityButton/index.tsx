import { Minus, Plus } from "phosphor-react";
import { ButtonHTMLAttributes, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { ButtonContainer, QuantityButtonContainer } from "./styles";

interface QuantityButtonProps {
    quantity?: number,
    coffeeId: string,
}


export function QuantityButton({ coffeeId, quantity = 0 }: QuantityButtonProps) {
    const { handlePlusButton, handleMinusButton } = useContext(CartContext);
    return (
        <QuantityButtonContainer>
            <ButtonContainer type={"button"} onClick={() => handleMinusButton(coffeeId)}><Minus size={14} weight="bold" /></ButtonContainer>
            <span>{quantity}</span>
            <ButtonContainer type={"button"} onClick={() => handlePlusButton(coffeeId)}><Plus size={14} weight="bold" /></ButtonContainer>
        </QuantityButtonContainer>
    )
}