import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Product } from "../../models/product";

export const CartActions = createActionGroup({
    source: 'Cart',
    events: {
        'ADD_PRODUCT': props<{ product: Product }>(),
        'REMOVE_PRODUCT': props<{ product: Product }>(),
        'CLEAR_CART': emptyProps(),
    }
})