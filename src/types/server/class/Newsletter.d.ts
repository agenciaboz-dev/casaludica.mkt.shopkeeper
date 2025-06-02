import { Prisma } from "@prisma/client";
import { WithoutFunctions } from "./helpers";
export type PrismaNewsletter = Prisma.NewsletterGetPayload<{}>;
export type NewsletterForm = Omit<WithoutFunctions<Newsletter>, "id" | "datetime"> & {
    franchise_id: number;
};
export declare class Newsletter {
    id: number;
    name: string;
    email: string;
    datetime: string;
    constructor(data: PrismaNewsletter);
    static list(): Promise<Newsletter[]>;
    static new(data: NewsletterForm): Promise<Newsletter>;
    static exportList(): Promise<string>;
}
