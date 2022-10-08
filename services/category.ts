import { ArtsData } from './art';
import graphcms from './graphClient';

export async function getCategories(): Promise<Array<string>> {
    const artsData = await graphcms.request<ArtsData>(
        `
            query ArtsCategories {
                arts {
                    categories
                }
            }
        `,
    );

    const onlyCategories = [];

    artsData.arts.forEach(art => {
        art.categories.forEach(category => {
            if (!onlyCategories.includes(category)) {
                onlyCategories.push(category);
            }
        });
    });

    return onlyCategories;
}
