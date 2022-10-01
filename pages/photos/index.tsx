import { GetServerSideProps } from 'next';
import { getArts } from '../../services/art';
import { Art } from '../../types/art';
import Layout from '../../components/layout';
import styles from './photos.module.scss';
import { PhotoContent } from '../../components/photoContent';

export interface PhotosProps {
    photoArts: Array<Art>;
}

function Photos({ photoArts }: PhotosProps) {
    console.log(JSON.stringify(photoArts));
    return (
        <Layout>
            <div className={styles.container}>
                {photoArts.map(art => {
                    return <PhotoContent key={art.slug} artName={art.name} content={art.contents[0]} />;
                })}
            </div>
        </Layout>
    );
}

export const getServerSideProps: GetServerSideProps = async () => {
    const artsData = await getArts();

    let photoArts = artsData.filter(art => !!art.contents.find(content => content.mimeType.includes('image')));

    photoArts = photoArts.map(art => ({
        ...art,
        contents: [art.contents.find(content => content.mimeType.includes('image'))],
    }));

    return {
        props: {
            photoArts,
        },
    };
};

export default Photos;
