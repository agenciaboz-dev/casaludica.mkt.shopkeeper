export declare class Franchise {
    id: number;
    active: boolean;
    name: string;
    fantasy_name: string;
    cnpj: string;
    email: string;
    phone: string;
    address: {
        street: string;
        number: string;
        complement: string;
        district: string;
        cep: string;
        city: string;
        uf: string;
        ibge: string;
    };
    pagseguro_token: string;
    pagseguro_token_sandbox: string;
    credit_card_public_key: string;
    featured_category_id?: number;
    constructor(data: IgestFranchise);
    static get(id?: number): Promise<Franchise>;
    static franchisor(): Promise<Franchise>;
    formatAddress(): string;
}
