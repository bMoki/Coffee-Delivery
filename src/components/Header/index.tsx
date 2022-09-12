import { HeaderContainer, LocationItemContainer, ShoppingCartLink } from "./styles";
import logoCoffeDelivery from '../../assets/logoCoffeDelivery.svg';
import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export function Header() {
    const { cartState } = useContext(CartContext);
    return (
        <HeaderContainer>
            <NavLink to={"/"}>
                <img src={logoCoffeDelivery} alt="" />
            </NavLink>

            <nav>

                <LocationItemContainer>
                    <MapPin size={22} weight='fill' />
                    <span>Porto alegre, RS</span>
                </LocationItemContainer>
                <ShoppingCartLink quantity={String(cartState.cartItensQuantity)}>
                    <NavLink to={"/checkout"}>

                        <button><ShoppingCart size={22} weight='fill' /></button>

                    </NavLink>
                </ShoppingCartLink>
            </nav>
        </HeaderContainer>
    )
}