import { Art, ContentType } from '../types/art';

const inImages = (name: string) => `/images/${name}`;
const inVideos = (name: string) => `/videos/${name}`;

const arts: Array<Art> = [
    {
        name: 'Ane com Look Amarelo',
        slug: 'ane-look-amarelo',
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
        contents: [
            {
                url: inVideos('SITIO_A_VENDA.mp4'),
                blurDataUrl: inVideos('SITIO_A_VENDA.mp4'),
                type: ContentType.VIDEO,
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
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
        contents: [
            {
                url: inImages('ANE_LOOKMORENA.jpg'),
                blurDataUrl: inImages('ANE_LOOKMORENA.jpg'),
                type: ContentType.IMAGE,
            },
            {
                url: inVideos('SITIO_A_VENDA.mp4'),
                blurDataUrl: inVideos('SITIO_A_VENDA.mp4'),
                type: ContentType.VIDEO,
            },
        ],

        categories: ['photos', '3d'],
    },
    {
        name: 'Ane com Look Preto',
        slug: 'ane-look-preto',
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
        contents: [
            {
                url: inVideos('SITIO_A_VENDA.mp4'),
                blurDataUrl: inVideos('SITIO_A_VENDA.mp4'),
                type: ContentType.VIDEO,
            },
            {
                url: inVideos('SITIO_A_VENDA.mp4'),
                blurDataUrl: inVideos('SITIO_A_VENDA.mp4'),
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
                url: inVideos('SITIO_A_VENDA.mp4'),
                blurDataUrl: inVideos('SITIO_A_VENDA.mp4'),
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
];

export async function getArts(categories?: Array<string>): Promise<Array<Art>> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(
                arts.filter(item => !categories || item.categories.some(item2 => categories.includes(item2))),
            );
        }, 500);
    });
}

export async function getArtBySlug(slug: string): Promise<Art> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(arts.find(art => art.slug === slug));
        }, 500);
    });
}
