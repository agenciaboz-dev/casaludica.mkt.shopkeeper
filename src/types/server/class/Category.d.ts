export declare class Category {
    id: number;
    name: string;
    collectionId: number;
    static list(): Promise<Category[]>;
    constructor(igest_category: IgestCategory);
}
