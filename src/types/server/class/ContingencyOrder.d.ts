import { Prisma } from "@prisma/client";
import { WithoutFunctions } from "./helpers";
export type ContingencyPrisma = Prisma.ContingencyPaidOrderGetPayload<{}>;
export type ContingencyOrderForm = Omit<WithoutFunctions<ContingencyOrder>, "id" | "created_at" | "success" | "last_update" | "tries" | "last_data">;
export declare class ContingencyOrder {
    id: number;
    data: string;
    last_data: string;
    created_at: string;
    success: boolean;
    last_update: string;
    order_id: number;
    tries: number;
    static new(data: ContingencyOrderForm): Promise<ContingencyOrder>;
    static list(): Promise<ContingencyOrder[]>;
    static retryAll(): Promise<void>;
    constructor(data: ContingencyPrisma | number, id_type?: "order" | "this");
    init(): Promise<void>;
    load(data: ContingencyPrisma): void;
    retry(): Promise<void>;
    update(data: Partial<ContingencyOrder>): Promise<void>;
    onFail(error?: string): Promise<void>;
    onSuccess(): Promise<void>;
}
