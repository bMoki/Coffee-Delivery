import { ActionTypes } from "./actions";

type Tag = {
    id: string,
    name: String,
}


type Coffee = {
    id: string;
    image: string;
    tags: Tag[];
    name: String;
    description: String;
    price: String;
    quantity: number,
}

export interface CartState {
    coffees: Coffee[],
    totalPrice: number,
    cartItensQuantity: number,
}

interface dispatchType {
    type: ActionTypes,
    payload: {
        itemID?: string,
    }
}

export function cartReducer(state: CartState, action: dispatchType) {
    let value: number = 0;

    switch (action.type) {
        case ActionTypes.ADD_ITEM:
            return {
                ...state,
                coffees: state.coffees.map((coffee) => {
                    if (coffee.id === action.payload.itemID) {
                        value = +coffee.price;
                        return { ...coffee, quantity: coffee.quantity + 1 }
                    } else {
                        return coffee;
                    }
                }),
                cartItensQuantity: state.cartItensQuantity + 1,
                totalPrice: (+(state.totalPrice + value).toFixed(2)),
            }

        case ActionTypes.REMOVE_ITEM:
            return {
                ...state,
                coffees: state.coffees.map((coffee) => {
                    if (coffee.id === action.payload.itemID && coffee.quantity !== 1) {
                        value = -coffee.price;
                        state.cartItensQuantity = state.cartItensQuantity - 1;
                        return { ...coffee, quantity: coffee.quantity - 1 }
                    } else {
                        return coffee;
                    }
                }),
                totalPrice: (+(state.totalPrice + value).toFixed(2)),
            }

        case ActionTypes.REMOVE_FROM_CART:
            let quantity: number = 0;
            return {
                ...state,
                coffees: state.coffees.map((coffee) => {
                    if (coffee.id === action.payload.itemID) {
                        quantity = coffee.quantity;
                        value = -coffee.price * quantity;
                        return { ...coffee, quantity: 0 }
                    } else {
                        return coffee;
                    }
                }),
                cartItensQuantity: state.cartItensQuantity - quantity,
                totalPrice: (+(state.totalPrice + value).toFixed(2)),
            }
        case ActionTypes.CLEAR_CART:
            return {
                ...state,
                coffees: state.coffees.map((coffee) => {
                    if (coffee.quantity > 0) {
                        return { ...coffee, quantity: 0 }
                    } else {
                        return coffee;
                    }
                }),
                cartItensQuantity: 0,
                totalPrice: 0,
            }
        default:
            return state;
    }
}