import { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { getPlaiceholder } from 'plaiceholder';
import ArtCard from '../../components/artCard';
import Layout from '../../components/layout';
import { getArts } from '../../services/art';
import { getQueryArrayIfExists } from '../../utils';
import styles from './home.module.scss';

export default function Home({ arts }: InferGetServerSidePropsType<typeof getServerSideProps>) {
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

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const filteredCategories = getQueryArrayIfExists(query?.category);

    const artsData = await getArts(filteredCategories);

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
