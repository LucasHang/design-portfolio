import { InferGetStaticPropsType } from 'next';
import { getPlaiceholder } from 'plaiceholder';
import ArtCard, { Art } from '../../components/artCard';
import Layout from '../../components/layout';
import styles from './home.module.scss';

const inImages = (name: string) => `/images/${name}`;

const artsData: Array<Art> = [
    {
        name: 'Ane com Look Amarelo',
        slug: 'ane-look-amarelo',
        url: inImages('ANE_LOOKAMARELO.jpg'),
    },
    {
        name: 'Ane com Look Moreno',
        slug: 'ane-look-moreno',
        url: inImages('ANE_LOOKMORENA.jpg'),
    },
    {
        name: 'Ane com Look Preto',
        slug: 'ane-look-preto',
        url: inImages('ANE_LOOKPRETO.jpg'),
    },
    {
        name: 'Ane com Look Preto 2',
        slug: 'ane-look-preto-2',
        url: inImages('ANE_LOOKPRETO_2.jpg'),
    },
    {
        name: 'Ane com Look Rosa',
        slug: 'ane-look-rosa',
        url: inImages('ANE_LOOKROSA.jpg'),
    },
    {
        name: 'Ane com Look Rosinha',
        slug: 'ane-look-rosinha',
        url: inImages('ANE_LOOKROSINHA.jpg'),
    },
    {
        name: 'Germano apenas',
        slug: 'germano-apenas',
        url: inImages('GERMANO.jpg'),
    },
];

export default function Home({ arts }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <Layout>
            <div className={styles.root}>
                <div className={styles.artsGrid}>
                    {arts.map(art => {
                        return <ArtCard key={art.slug} art={art} />;
                    })}
                </div>
            </div>
        </Layout>
    );
}

export const getStaticProps = async () => {
    const arts = await Promise.all(
        artsData.map(async art => {
            const { base64, img } = await getPlaiceholder(art.url);

            return {
                ...art,
                ...img,
                blurDataURL: base64,
            };
        }),
    ).then(values => values);

    return {
        props: {
            arts,
        },
    };
};
