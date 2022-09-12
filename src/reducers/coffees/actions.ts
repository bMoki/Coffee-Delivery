export enum ActionTypes {
    ADD_ITEM = 'ADD_ITEM',
    REMOVE_ITEM = 'REMOVE_ITEM',
    REMOVE_FROM_CART = 'REMOVE_FROM_CART',
    CLEAR_CART = 'CLEAR_CART',
}

export function addItemAction(itemID: string) {
    return {
        type: ActionTypes.ADD_ITEM,
        payload: {
            itemID,
        }
    }
}

export function removeItemAction(itemID: string) {
    return {
        type: ActionTypes.REMOVE_ITEM,
        payload: {
            itemID,
        }
    }
}

export function removeFromCartAction(itemID: string) {
    return {
        type: ActionTypes.REMOVE_FROM_CART,
        payload: {
            itemID,
        }
    }
}

export function clearCartAction() {
    return {
        type: ActionTypes.CLEAR_CART,
        payload: {}
    }
}