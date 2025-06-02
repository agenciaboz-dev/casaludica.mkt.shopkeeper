import { Product } from "../../../class/Product"

export interface Quote {
    ServiceCode: string
    ServiceDescription: string
    Carrier: string
    CarrierCode: string
    ShippingPrice: string
    DeliveryTime: string
    Error: boolean
    OriginalDeliveryTime: string
    OriginalShippingPrice: string
    ResponseTime: string
    AllowBuyLabel: boolean
}

export interface QuoteForm {
    recipient_cep: string
    products: (Product & { quantity: number })[]
    franchise_id: number
}
