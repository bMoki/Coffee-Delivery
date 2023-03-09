import { createContext, ReactNode, useEffect, useReducer } from "react";


import expressoTradicional from '../assets/ExpressoTradicional.svg';
import expressoAmericano from '../assets/ExpressoAmericano.svg';
import expressoCremoso from '../assets/ExpressoCremoso.svg';
import expressoGelado from '../assets/ExpressoGelado.svg';
import cafeComLeite from '../assets/CafeComLeite.svg';
import latte from '../assets/Latte.svg';
import capuccino from '../assets/Capuccino.svg';
import macchiato from '../assets/Macchiato.svg';
import mocaccino from '../assets/Mocaccino.svg';
import chocolateQuente from '../assets/ChocolateQuente.svg';
import cubano from '../assets/Cubano.svg';
import havaiano from '../assets/Havaiano.svg';
import arabe from '../assets/Arabe.svg';
import irlandes from '../assets/Irlandes.svg';
import { cartReducer, CartState } from "../reducers/coffees/reducer";
import { addItemAction, clearCartAction, removeFromCartAction, removeItemAction } from "../reducers/coffees/actions";

interface CartContextType {
    handlePlusButton: (id: string) => void;
    handleMinusButton: (id: string) => void;
    handleRemoveButton: (id: string) => void;
    handleConfirmDelivery: () => void;
    cartState: CartState;
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
    children: ReactNode
}

export function CartContextProvider({
    children,
}: CartContextProviderProps) {
    const TRADICIONAL = { id: "1", name: "TRADICIONAL" };
    const GELADO = { id: "2", name: "GELADO" };
    const COM_LEITE = { id: "3", name: "COM LEITE" };
    const ESPECIAL = { id: "4", name: "ESPECIAL" };
    const ALCOOLICO = { id: "5", name: "ALCOÓLICO" };

    const [cartState, dispatch] = useReducer(cartReducer, {
        coffees: [
            {
                id: 'a',
                image: expressoTradicional,
                tags: [TRADICIONAL],
                name: "Expresso Tradicional",
                description: "O tradicional cafe feito com agua quente e graos moidos",
                price: "9.90",
                quantity: 0,
            },
            {
                id: 'b',
                image: expressoAmericano,
                tags: [TRADICIONAL],
                name: "Expresso Americano",
                description: "Expresso diluido, menos intenso que o tradicional",
                price: "9.90",
                quantity: 0,
            },
            {
                id: 'c',
                image: expressoCremoso,
                tags: [TRADICIONAL],
                name: "Expresso Cremoso",
                description: "Cafe expresso tradicional com espuma cremosa",
                price: "9.90",
                quantity: 0,
            },
            {
                id: 'd',
                image: expressoGelado,
                tags: [TRADICIONAL, GELADO],
                name: "Expresso Gelado",
                description: "Bebida preparada com cafe espresso e cubos de gelo",
                price: "9.90",
                quantity: 0,
            },
            {
                id: 'e',
                image: cafeComLeite,
                tags: [TRADICIONAL, COM_LEITE],
                name: "Café com Leite",
                description: "Meio a meio de expresso tradicional com leite vaporizado",
                price: "9.90",
                quantity: 0,
            },
            {
                id: 'f',
                image: latte,
                tags: [TRADICIONAL, COM_LEITE],
                name: "Latte",
                description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
                price: "9.90",
                quantity: 0,
            },
            {
                id: 'g',
                image: capuccino,
                tags: [TRADICIONAL, COM_LEITE],
                name: "Capuccino",
                description: "Bebida com canela feita de doses iguais de café, leite e espuma",
                price: "9.90",
                quantity: 0,
            },
            {
                id: 'h',
                image: macchiato,
                tags: [TRADICIONAL, COM_LEITE],
                name: "Macchiato",
                description: "Café expresso misturado com um pouco de leite quente e espuma",
                price: "9.90",
                quantity: 0,
            },
            {
                id: 'i',
                image: mocaccino,
                tags: [TRADICIONAL, COM_LEITE],
                name: "Mocaccino",
                description: "Café expresso com calda de chocolate, pouco leite e espuma",
                price: "9.90",
                quantity: 0,
            },
            {
                id: 'j',
                image: chocolateQuente,
                tags: [ESPECIAL, COM_LEITE],
                name: "Chocolate Quente",
                description: "Bebida feita com chocolate dissolvido no leite quente e café",
                price: "9.90",
                quantity: 0,
            },
            {
                id: 'k',
                image: cubano,
                tags: [ESPECIAL, ALCOOLICO, GELADO],
                name: "Cubano",
                description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
                price: "9.90",
                quantity: 0,
            },
            {
                id: 'l',
                image: havaiano,
                tags: [ESPECIAL],
                name: "Havaiano",
                description: "Bebida adociada preparada com café e leite de coco",
                price: "9.90",
                quantity: 0,
            },
            {
                id: 'm',
                image: arabe,
                tags: [ESPECIAL],
                name: "Árabe",
                description: "Bebida preparada com grãos de café árabe e especiarias",
                price: "9.90",
                quantity: 0,
            },
            {
                id: 'n',
                image: irlandes,
                tags: [ESPECIAL, ALCOOLICO],
                name: "Irlandês",
                description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
                price: "9.90",
                quantity: 0,
            }
        ],
        totalPrice: 0,
        cartItensQuantity: 0
    }
        , () => {
            const storedStateAsJSON = localStorage.getItem('@coffee-delivery:cart-state-1.0.0');

            if (storedStateAsJSON) {
                console.log("aaaaa");
                return JSON.parse(storedStateAsJSON);
            } else {
                return {
                    coffees: [
                        {
                            id: 'a',
                            image: expressoTradicional,
                            tags: [TRADICIONAL],
                            name: "Expresso Tradicional",
                            description: "O tradicional cafe feito com agua quente e graos moidos",
                            price: "9.90",
                            quantity: 0,
                        },
                        {
                            id: 'b',
                            image: expressoAmericano,
                            tags: [TRADICIONAL],
                            name: "Expresso Americano",
                            description: "Expresso diluido, menos intenso que o tradicional",
                            price: "9.90",
                            quantity: 0,
                        },
                        {
                            id: 'c',
                            image: expressoCremoso,
                            tags: [TRADICIONAL],
                            name: "Expresso Cremoso",
                            description: "Cafe expresso tradicional com espuma cremosa",
                            price: "9.90",
                            quantity: 0,
                        },
                        {
                            id: 'd',
                            image: expressoGelado,
                            tags: [TRADICIONAL, GELADO],
                            name: "Expresso Gelado",
                            description: "Bebida preparada com cafe espresso e cubos de gelo",
                            price: "9.90",
                            quantity: 0,
                        },
                        {
                            id: 'e',
                            image: cafeComLeite,
                            tags: [TRADICIONAL, COM_LEITE],
                            name: "Café com Leite",
                            description: "Meio a meio de expresso tradicional com leite vaporizado",
                            price: "9.90",
                            quantity: 0,
                        },
                        {
                            id: 'f',
                            image: latte,
                            tags: [TRADICIONAL, COM_LEITE],
                            name: "Latte",
                            description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
                            price: "9.90",
                            quantity: 0,
                        },
                        {
                            id: 'g',
                            image: capuccino,
                            tags: [TRADICIONAL, COM_LEITE],
                            name: "Capuccino",
                            description: "Bebida com canela feita de doses iguais de café, leite e espuma",
                            price: "9.90",
                            quantity: 0,
                        },
                        {
                            id: 'h',
                            image: macchiato,
                            tags: [TRADICIONAL, COM_LEITE],
                            name: "Macchiato",
                            description: "Café expresso misturado com um pouco de leite quente e espuma",
                            price: "9.90",
                            quantity: 0,
                        },
                        {
                            id: 'i',
                            image: mocaccino,
                            tags: [TRADICIONAL, COM_LEITE],
                            name: "Mocaccino",
                            description: "Café expresso com calda de chocolate, pouco leite e espuma",
                            price: "9.90",
                            quantity: 0,
                        },
                        {
                            id: 'j',
                            image: chocolateQuente,
                            tags: [ESPECIAL, COM_LEITE],
                            name: "Chocolate Quente",
                            description: "Bebida feita com chocolate dissolvido no leite quente e café",
                            price: "9.90",
                            quantity: 0,
                        },
                        {
                            id: 'k',
                            image: cubano,
                            tags: [ESPECIAL, ALCOOLICO, GELADO],
                            name: "Cubano",
                            description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
                            price: "9.90",
                            quantity: 0,
                        },
                        {
                            id: 'l',
                            image: havaiano,
                            tags: [ESPECIAL],
                            name: "Havaiano",
                            description: "Bebida adociada preparada com café e leite de coco",
                            price: "9.90",
                            quantity: 0,
                        },
                        {
                            id: 'm',
                            image: arabe,
                            tags: [ESPECIAL],
                            name: "Árabe",
                            description: "Bebida preparada com grãos de café árabe e especiarias",
                            price: "9.90",
                            quantity: 0,
                        },
                        {
                            id: 'n',
                            image: irlandes,
                            tags: [ESPECIAL, ALCOOLICO],
                            name: "Irlandês",
                            description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
                            price: "9.90",
                            quantity: 0,
                        }
                    ],
                    totalPrice: 0,
                    cartItensQuantity: 0
                }
            }
        }
    )

    useEffect(() => {
        const stateJSON = JSON.stringify(cartState);

        localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stateJSON);
    }, [cartState])

    function handlePlusButton(id: string) {
        dispatch(addItemAction(id));
    }
    function handleMinusButton(id: string) {
        dispatch(removeItemAction(id));
    }

    function handleRemoveButton(id: string) {
        dispatch(removeFromCartAction(id));
    }
    function handleConfirmDelivery() {
        dispatch(clearCartAction());
    }

    return (
        <CartContext.Provider
            value={{
                handlePlusButton,
                handleMinusButton,
                cartState,
                handleRemoveButton,
                handleConfirmDelivery
            }}>
            {children}
        </CartContext.Provider>
    )
}