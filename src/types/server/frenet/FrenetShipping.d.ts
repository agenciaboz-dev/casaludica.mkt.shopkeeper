export interface FrenetShipping {
    SellerCEP: string
    RecipientCEP: string
    ShipmentInvoiceValue: number
    ShippingServiceCode: null

    ShippingItemArray: FrenetShippingItem[]
    RecipientCountry: "BR"
}

export interface FrenetShippingItem {
    Height: number
    Length: number
    Quantity: number
    Weight: number
    Width: number

    SKU?: string
    Category?: string
}

export interface FrenetQuoteInput {
    seller_cep: string
    recipient_cep: string
    invoice_value: number
    items: FrenetShippingItem[]
}
