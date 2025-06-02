import { Prisma } from "@prisma/client";
import { FileUpload, WithoutFunctions } from "./helpers";
export type PrismaBanner = Prisma.BannerGetPayload<{}>;
export type BannerForm = Omit<WithoutFunctions<Banner>, "id" | "updated_at" | "url_desktop" | "url_mobile"> & {
    file_desktop: FileUpload;
    file_mobile: FileUpload;
};
export interface UpdateBannersForm {
    to_create: BannerForm[];
    to_update: (Banner & {
        file_desktop?: FileUpload;
        file_mobile?: FileUpload;
    })[];
}
export declare class Banner {
    id: string;
    url_desktop: string;
    url_mobile: string;
    position: number;
    updated_at: string;
    from_date?: string | null;
    until_date?: string | null;
    link?: string | null;
    static list(): Promise<Banner[]>;
    static new(data: BannerForm): Promise<Banner>;
    static onUpdateBanners(data: UpdateBannersForm): Promise<Banner[]>;
    static delete(id: string): Promise<Banner[]>;
    constructor(data: PrismaBanner);
}
