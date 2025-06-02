import { WithoutFunctions } from "../types/server/class/helpers"
import { Product } from "../types/server/class/Product"

export interface CartProduct extends WithoutFunctions<Product> {
    quantity: number
}

export interface Cart {
    products: CartProduct[]
}
