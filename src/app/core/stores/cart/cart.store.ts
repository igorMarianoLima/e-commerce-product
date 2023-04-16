import { Product } from "../../models/product";

export interface CartStore {
    products: Product[];
}

export const initialState: CartStore = {
    products: []
}