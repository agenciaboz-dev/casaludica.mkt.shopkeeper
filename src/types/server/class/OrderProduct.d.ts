import { Prisma } from "@prisma/client";
export type OrderProductPrisma = Prisma.OrderProductGetPayload<{}>;
export declare class OrderProduct {
    id: number;
    name: string;
    price: number;
    quantity: number;
    referenceId: number;
    orderId: number;
    review: string | null;
    rating: number | null;
    reviewDate: string | null;
    constructor(data: OrderProductPrisma);
}
