import { Prisma } from "@prisma/client";
import { UploadedFile } from "express-fileupload";
import { Order } from "./Order";
import { WithoutFunctions } from "./helpers";
export declare const include: {
    orders: {
        include: {
            products: true;
            coupon: true;
        };
    };
};
export type UserPrisma = Prisma.UserGetPayload<{
    include: typeof include;
}>;
export type UserForm = Omit<WithoutFunctions<User>, "id" | "orders" | "totalSpent" | "token">;
export declare class User {
    id: number;
    password: string | null;
    name: string;
    lastname: string;
    cpf: string;
    company: string | null;
    postcode: string;
    address: string;
    number: string;
    district: string;
    complement: string | null;
    city: string;
    state: string;
    phone: string;
    email: string;
    profilePicUrl: string;
    shopkeeper: boolean | null;
    token: string;
    orders: Order[];
    totalSpent: number;
    static JWT_SECRET: string;
    constructor(id: number, user_prisma?: UserPrisma);
    static list(): Promise<User[]>;
    static login(login: string, password: string): Promise<User | null>;
    static find(...params: string[]): Promise<User | null>;
    static signup(data: UserForm, franchise_id: number): Promise<User | undefined>;
    init(): Promise<void>;
    load(user_prisma: UserPrisma): void;
    updateImage(file: UploadedFile): Promise<string>;
    update(data: Partial<User>): Promise<void>;
    sanitizeData(data: Partial<User>): Partial<User>;
    getTotalSpent(): number;
    getToken(): string;
}
