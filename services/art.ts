import { Art, ContentType } from '../types/art';

const inImages = (name: string) => `/images/${name}`;

export async function getArts(categories?: Array<string>): Promise<Array<Art>> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(
                [
                    {
                        name: 'Ane com Look Amarelo',
                        slug: 'ane-look-amarelo',
                        contents: [
                            {
                                url: inImages('ANE_LOOKAMARELO.jpg'),
                                blurDataUrl: inImages('ANE_LOOKAMARELO.jpg'),
                                type: ContentType.IMAGE,
                            },
                            {
                                url: inImages('ANE_LOOKAMARELO.jpg'),
                                blurDataUrl: inImages('ANE_LOOKAMARELO.jpg'),
                                type: ContentType.IMAGE,
                            },
                            {
                                url: inImages('ANE_LOOKAMARELO.jpg'),
                                blurDataUrl: inImages('ANE_LOOKAMARELO.jpg'),
                                type: ContentType.IMAGE,
                            },
                            {
                                url: inImages('ANE_LOOKAMARELO.jpg'),
                                blurDataUrl: inImages('ANE_LOOKAMARELO.jpg'),
                                type: ContentType.IMAGE,
                            },
                        ],
                        categories: ['photos'],
                    },
                    {
                        name: 'Ane com Look Moreno',
                        slug: 'ane-look-moreno',
                        contents: [
                            {
                                url: inImages('ANE_LOOKMORENA.jpg'),
                                blurDataUrl: inImages('ANE_LOOKMORENA.jpg'),
                                type: ContentType.IMAGE,
                            },
                            {
                                url: inImages('ANE_LOOKMORENA.jpg'),
                                blurDataUrl: inImages('ANE_LOOKMORENA.jpg'),
                                type: ContentType.VIDEO,
                            },
                        ],

                        categories: ['photos', '3d'],
                    },
                    {
                        name: 'Ane com Look Preto',
                        slug: 'ane-look-preto',
                        contents: [
                            {
                                url: inImages('ANE_LOOKPRETO.jpg'),
                                blurDataUrl: inImages('ANE_LOOKPRETO.jpg'),
                                type: ContentType.VIDEO,
                            },
                            {
                                url: inImages('ANE_LOOKPRETO.jpg'),
                                blurDataUrl: inImages('ANE_LOOKPRETO.jpg'),
                                type: ContentType.VIDEO,
                            },
                        ],

                        categories: ['videos', 'books'],
                    },
                    {
                        name: 'Ane com Look Preto 2',
                        slug: 'ane-look-preto-2',
                        contents: [
                            {
                                url: inImages('ANE_LOOKPRETO_2.jpg'),
                                blurDataUrl: inImages('ANE_LOOKPRETO_2.jpg'),
                                type: ContentType.VIDEO,
                            },
                        ],

                        categories: ['photos'],
                    },
                    {
                        name: 'Ane com Look Rosa',
                        slug: 'ane-look-rosa',
                        contents: [
                            {
                                url: inImages('ANE_LOOKROSA.jpg'),
                                blurDataUrl: inImages('ANE_LOOKROSA.jpg'),
                                type: ContentType.IMAGE,
                            },
                        ],

                        categories: ['tutorials'],
                    },
                    {
                        name: 'Ane com Look Rosinha',
                        slug: 'ane-look-rosinha',
                        contents: [
                            {
                                url: inImages('ANE_LOOKROSINHA.jpg'),
                                blurDataUrl: inImages('ANE_LOOKROSINHA.jpg'),
                                type: ContentType.IMAGE,
                            },
                        ],

                        categories: ['ui/ux', 'typography'],
                    },
                    {
                        name: 'Germano apenas',
                        slug: 'germano-apenas',
                        contents: [
                            {
                                url: inImages('GERMANO.jpg'),
                                blurDataUrl: inImages('GERMANO.jpg'),
                                type: ContentType.IMAGE,
                            },
                        ],

                        categories: ['ui/ux', 'typography'],
                    },
                ].filter(item => !categories || item.categories.some(item2 => categories.includes(item2))),
            );
        }, 500);
    });
}
