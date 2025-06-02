import { Prisma } from "@prisma/client";
import { WithoutFunctions } from "./helpers";
export declare const coupon_include: {
    _count: true;
};
export type CouponPrisma = Prisma.CouponGetPayload<{
    include: typeof coupon_include;
}>;
export type CouponForm = Omit<WithoutFunctions<Coupon>, "id" | "active" | "used" | "created_at">;
export declare class Coupon {
    id: string;
    code: string;
    value: number;
    is_percent: boolean;
    valid_from: string;
    valid_until: string;
    active: boolean;
    limit: number;
    used: number;
    created_at: string;
    min_value: number;
    static list(): Promise<Coupon[]>;
    static new(data: CouponForm): Promise<Coupon>;
    static try(code: string, user_id?: number): Promise<false | Coupon | null>;
    constructor(data: string | CouponPrisma);
    load(data: CouponPrisma): void;
    init(): Promise<void>;
    update(data: Partial<Coupon>): Promise<void>;
    isValid(user_id?: number): Promise<boolean>;
}
