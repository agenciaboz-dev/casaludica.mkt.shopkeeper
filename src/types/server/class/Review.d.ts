import { ReviewForm } from "./Order";
import { User } from "./User";
export declare class Review {
    user: User;
    orderId: number;
    datetime: string;
    rating: number;
    review?: string;
    constructor(data: ReviewForm);
}
