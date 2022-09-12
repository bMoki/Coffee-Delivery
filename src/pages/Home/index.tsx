import {
    Background,
    CoffeListContainer,
    CoffeListSubtitle,
    HomeContainer,
    HomeMainTitle,
    HomeMainTitleSubtitle,
    HomeStart,
    HomeStartContent,
    HomeStartContentItem,
    HomeStartContentItemColumn,
    HomeStartContentItemContainer
} from "./styles";
import BACKGROUND from '../../assets/Background.svg';
import HomeMainImage from '../../assets/HomeMainImage.svg';
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { CoffeCard } from "./CoffeCard";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export function Home() {
    const { cartState } = useContext(CartContext);
    return (
        <>
            <HomeContainer>
                <HomeStart>
                    <Background ><img src={BACKGROUND} alt="" /></Background>
                    <HomeStartContent>
                        <HomeMainTitle>Encontre o cafe perfeito para qualquer hora do dia</HomeMainTitle>
                        <HomeMainTitleSubtitle>Com o Coffee Delivery voce recebe seu cafe onde estiver, a qualquer hora</HomeMainTitleSubtitle>
                        <HomeStartContentItemContainer>
                            <HomeStartContentItemColumn>
                                <HomeStartContentItem itemColor="yellowDark"><button><ShoppingCart size={16} weight='fill' /></button>Compra simples e segura</HomeStartContentItem>
                                <HomeStartContentItem itemColor="yellow"><button><Timer size={16} weight='fill' /></button>Entrega rápida e rastreada</HomeStartContentItem>
                            </HomeStartContentItemColumn>
                            <HomeStartContentItemColumn>
                                <HomeStartContentItem itemColor="baseText"><button><Package size={16} weight='fill' /></button>Embalagem mantém o café intacto</HomeStartContentItem>
                                <HomeStartContentItem itemColor="purple"><button><Coffee size={16} weight='fill' /></button>O café chega fresquinho até você</HomeStartContentItem>
                            </HomeStartContentItemColumn>
                        </HomeStartContentItemContainer>
                    </HomeStartContent>
                    <img src={HomeMainImage} alt="Copo de café com especiarias em volta" />
                </HomeStart>

                <CoffeListSubtitle>
                    <span>Nossos cafés</span>
                </CoffeListSubtitle>
                <CoffeListContainer>
                    {cartState.coffees.map(coffee => (
                        <CoffeCard coffee={coffee} key={coffee.id} />
                    ))}


                </CoffeListContainer>
            </HomeContainer>
        </>

    )
}