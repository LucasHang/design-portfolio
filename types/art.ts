export interface Art {
    name: string;
    slug: string;
    description?: string;
    url: string;
    blurDataURL?: string;
    categories: Array<string>;
}
