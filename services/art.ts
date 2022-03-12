import graphcms from './graphClient';

import { Art } from '../types/art';

export interface ArtsData {
    arts: Array<Art>;
}

export async function getArts(categories?: Array<string>): Promise<Array<Art>> {
    const whereCategories = categories?.length
        ? `(where: {categories_contains_some: [${categories.join(', ')}]})`
        : '';

    const artsData = await graphcms.request<ArtsData>(
        `
            query Arts {
                arts ${whereCategories} {
                    name
                    slug
                    description
                    contents {
                        url
                        mimeType
                        blured {
                            url
                        }
                    }
                }
            }
        `,
    );

    return artsData.arts;
}

export async function getArtBySlug(slug: string): Promise<Art> {
    const artsData = await graphcms.request<ArtsData>(
        `
            query Arts {
                arts (where: { slug: "${slug}" }) {
                    name
                    slug
                    description
                    contents {
                        url
                        mimeType
                        blured {
                            url
                        }
                    }
                }
            }
        `,
    );

    return artsData.arts[0];
}
