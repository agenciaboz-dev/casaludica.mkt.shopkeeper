import { User } from "./User";
import jwt from "jsonwebtoken";
export interface LoginForm {
    login: string;
    password: string;
}
export declare class Session {
    static secret: string;
    static new(user: User): string;
    static get(token: string): string | jwt.JwtPayload;
}
