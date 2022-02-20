import { Art } from '../types/art';

const inImages = (name: string) => `/images/${name}`;

export async function getArts(categories?: Array<string>): Promise<Array<Art>> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(
                [
                    {
                        name: 'Ane com Look Amarelo',
                        slug: 'ane-look-amarelo',
                        url: inImages('ANE_LOOKAMARELO.jpg'),
                        categories: ['photos'],
                    },
                    {
                        name: 'Ane com Look Moreno',
                        slug: 'ane-look-moreno',
                        url: inImages('ANE_LOOKMORENA.jpg'),
                        categories: ['photos', '3d'],
                    },
                    {
                        name: 'Ane com Look Preto',
                        slug: 'ane-look-preto',
                        url: inImages('ANE_LOOKPRETO.jpg'),
                        categories: ['videos', 'books'],
                    },
                    {
                        name: 'Ane com Look Preto 2',
                        slug: 'ane-look-preto-2',
                        url: inImages('ANE_LOOKPRETO_2.jpg'),
                        categories: ['photos'],
                    },
                    {
                        name: 'Ane com Look Rosa',
                        slug: 'ane-look-rosa',
                        url: inImages('ANE_LOOKROSA.jpg'),
                        categories: ['tutorials'],
                    },
                    {
                        name: 'Ane com Look Rosinha',
                        slug: 'ane-look-rosinha',
                        url: inImages('ANE_LOOKROSINHA.jpg'),
                        categories: ['ui/ux', 'typography'],
                    },
                    {
                        name: 'Germano apenas',
                        slug: 'germano-apenas',
                        url: inImages('GERMANO.jpg'),
                        categories: ['ui/ux', 'typography'],
                    },
                ].filter(item => !categories || item.categories.some(item2 => categories.includes(item2))),
            );
        }, 500);
    });
}
