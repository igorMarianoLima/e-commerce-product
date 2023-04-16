import { createReducer, on } from "@ngrx/store";
import { initialState } from "./cart.store";
import { CartActions } from "./cart.actions";

export const cartReducers = createReducer(
    initialState,

    on(CartActions.add_product, (state, { product }) => {
        if (state.products.find(p => p.id === product.id)) return state;

        return {
            ...state,
            products: [...state.products, product]
        }
    }),

    on(CartActions.remove_product, (state, { product }) => {
        return {
            ...state,
            products: state.products.filter(p => p.id !== product.id)
        }
    }),

    on(CartActions.clear_cart, (state) => {
        return {
            ...state,
            products: []
        }
    })
)