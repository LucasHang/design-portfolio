export interface Art {
    name: string;
    slug: string;
    description?: string;
    contents: Array<Content>;
    categories: Array<string>;
    tags?: Array<ContentTag>;
}

export interface Content {
    url: string;
    blured?: { url: string };
    mimeType: string;
}

export enum ContentTag {
    IMAGE = 'image',
    IMAGES = 'images',
    VIDEO = 'video',
    VIDEOS = 'videos',
    IMAGE_VIDEO = 'image_video',
}
