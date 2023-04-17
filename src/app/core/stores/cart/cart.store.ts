import { Product } from "../../models/product";

export interface CartStore {
    products: Product[];
}

export const initialState: CartStore = {
    products: [
        {
            id: 1,
            name: 'Product 1',
            price: 100,
            description: 'Product 1 description',
            image: 'https://picsum.photos/200/300',
            quantity: 1
        },
        {
            id: 2,
            name: 'Product 2',
            price: 200,
            description: 'Product 2 description',
            image: 'https://picsum.photos/200/300',
            quantity: 2
        }
    ]
}