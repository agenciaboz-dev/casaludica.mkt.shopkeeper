import { Prisma } from "@prisma/client";
export type PrismaSoldout = Prisma.SoldoutProductWatchingGetPayload<{}>;
export interface SoldOutProductForm {
    product_id: number;
    franchise_id: number;
    name: string;
    email: string;
    phone: string;
}
export declare class SoldOutProductWatching {
    id: number;
    product_id: number;
    franchise_id: number;
    name: string;
    email: string;
    phone: string;
    datetime: string;
    notified: boolean;
    constructor(data: PrismaSoldout);
    static new(form: SoldOutProductForm): Promise<SoldOutProductWatching>;
    sendMail(): Promise<void>;
}
