import { Prisma } from "@prisma/client";
import { OrderProduct } from "./OrderProduct";
import { Charge } from "../types/bozpay/Charge";
import { IgestNewOrder } from "../types/igest/Order";
import { ClientOrderForm } from "../types/shared/ClientOrderForm";
import { User } from "./User";
export declare const order_include: {
    products: true;
    coupon: true;
};
export type OrderPrisma = Prisma.OrderGetPayload<{
    include: typeof order_include;
}>;
export interface BozPayAddressData {
    id: number;
    addressId: number;
    address: {
        address: string;
        city: string;
        complement: string;
        district: string;
        id: number;
        number: string;
        postcode: string;
        state: string;
    };
    personalData: {
        cpf: string;
        email: string;
        id: number;
        name: string;
        phone: string;
    };
}
export interface BozPayOrder {
    billingId: number;
    dateCreated: string;
    dateModified: string;
    id: number;
    pag_error: string | null;
    referenceId: string;
    shippingId: number;
    shippingInfo: string;
    shippingPrice: number;
    status: string;
    store: string;
    total: number;
    billing: BozPayAddressData;
    shipping: BozPayAddressData;
    products: {
        id: number;
        name: string;
        price: number;
        quantity: number;
        referenceId: number;
        orderId: number;
    }[];
}
export interface ReviewForm {
    orderId: number;
    referenceId: number;
    rating: number;
    comment?: string | null;
}
export declare class Order {
    id: number;
    storeId: number;
    notes: string | null;
    datetime: string;
    total: number;
    shippingPrice: number;
    shippingType: string;
    paymentType: string | null;
    installments: number | null;
    userId: number;
    products: OrderProduct[];
    requestLog: string | null;
    responseLog: string | null;
    coupon_id?: string;
    test: boolean;
    bozpay_order?: BozPayOrder;
    constructor(id: number, data?: OrderPrisma);
    init(): Promise<void>;
    static list(store_id?: number, take?: number, skip?: number, userId?: string): Promise<Order[]>;
    static find(data: {
        id?: number;
        user_id?: number;
    }): Promise<Order[]>;
    static new(data: ClientOrderForm, user_id: number): Promise<{
        bozpayOrder: any;
        order: Order;
        error?: undefined;
    } | {
        error: unknown;
        bozpayOrder?: undefined;
        order?: undefined;
    }>;
    static addReview(data: ReviewForm): Promise<import(".prisma/client").OrderProduct | undefined>;
    load(data: OrderPrisma): void;
    update(data: Partial<Order>): Promise<void>;
    onPaid(charge: Charge): Promise<void>;
    logPaidRequest(data: IgestNewOrder): Promise<void>;
    logPaidResponse(data: any): Promise<void>;
    getLogs(): Promise<{
        request: any;
        response: any;
    }>;
    getProducts(): Promise<OrderProduct[]>;
    getUser(): Promise<User | undefined>;
    sendPaidToIgest(): Promise<import("axios").AxiosResponse<any, any>>;
    getBozpay(): Promise<BozPayOrder>;
}
