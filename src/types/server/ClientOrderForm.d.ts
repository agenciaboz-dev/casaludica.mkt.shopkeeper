import { ShippingForm } from "./ShippingForm"

declare interface ClientOrderForm {
    address: string
    city: string
    email: string
    lastname: string
    name: string
    phone: string
    postcode: string
    storeId: number
    company: string
    notes: string
    total: number
    district: string
    complement?: string
    number: string
    state: string
    cpf: string

    user_id?: number

    products: {
        name: string
        price: number
        quantity: number
        id: number
    }[]

    shipping: ShippingForm

    coupon_id?: string
}
