import {
    CoffeCardCartButton,
    CoffeCardContainer,
    CoffeCardDescription,
    CoffeCardFooter,
    CoffeCardMoney,
    CoffeCardName,
    CoffeCardTag,
    CoffeCardTagContainer
} from "./styles";
import { ShoppingCart } from "phosphor-react";
import { QuantityButton } from "../../../components/QuantityButton";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

interface Tag {
    id: string,
    name: String,
}

interface CardProps {
    coffee: {
        id: string;
        image: string;
        tags: Tag[];
        name: String;
        description: String;
        price: String;
        quantity: number;
    }
}

export function CoffeCard({ coffee }: CardProps) {
    const { name, description, image, tags, price } = coffee;
    const { handlePlusButton } = useContext(CartContext);
    return (
        <CoffeCardContainer>
            <img src={image} alt="" />
            <CoffeCardTagContainer>
                {tags.map(tag => (
                    <CoffeCardTag key={tag.id}>{tag.name}</CoffeCardTag>
                ))}
            </CoffeCardTagContainer>

            <CoffeCardName>{name}</CoffeCardName>
            <CoffeCardDescription>{description}</CoffeCardDescription>
            <CoffeCardFooter>
                <CoffeCardMoney>{price.replace(".", ",")}</CoffeCardMoney>
                <QuantityButton coffeeId={coffee.id} quantity={coffee.quantity} />
                <NavLink to="/checkout">
                    <CoffeCardCartButton onClick={() => handlePlusButton(coffee.id)}><ShoppingCart size={22} weight='fill' /></CoffeCardCartButton>
                </NavLink>
            </CoffeCardFooter>
        </CoffeCardContainer>
    )
}