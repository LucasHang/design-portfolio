import { Art } from '../types/art';
import { ArtsData } from './art';
import graphcms from './graphClient';

export async function getCategories(): Promise<Array<string>> {
    console.log('getCategories');
    const artsData = await graphcms.request<ArtsData>(
        `
            query ArtsCategories {
                arts {
                    categories
                }
            }
        `,
    );

    console.log('artsData', artsData);

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
