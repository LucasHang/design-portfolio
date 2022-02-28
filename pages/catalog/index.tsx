import { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import ArtCard from '../../components/artCard';
import Layout from '../../components/layout';
import { getArts } from '../../services/art';
import { Art, ContentTag, ContentType } from '../../types/art';
import { getQueryArrayIfExists } from '../../utils';
import styles from './catalog.module.scss';

export interface CatalogProps {
    arts: Array<Art>;
}

export default function Catalog({ arts }: CatalogProps) {
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

    const arts = artsData.map(art => {
        const images = art.contents.filter(content => content.type === ContentType.IMAGE);
        const videos = art.contents.filter(content => content.type === ContentType.VIDEO);

        let tag: ContentTag;

        if (images.length >= 1 && videos.length >= 1) {
            tag = ContentTag.IMAGE_VIDEO;
        } else {
            if (images.length >= 1) {
                tag = images.length > 1 ? ContentTag.IMAGES : ContentTag.IMAGE;
            }

            if (videos.length >= 1) {
                tag = videos.length > 1 ? ContentTag.VIDEOS : ContentTag.VIDEO;
            }
        }

        art.tags = [tag];

        return art;
    });

    return {
        props: {
            arts,
        },
    };
};
