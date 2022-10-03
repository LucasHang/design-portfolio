import { GetServerSideProps } from 'next';
import Layout from '../../components/layout';
import { VideoContent } from '../../components/videoContent';
import { getArts } from '../../services/art';
import { Art } from '../../types/art';
import styles from './videos.module.scss';

export interface VideosProps {
    videoArts: Array<Art>;
}

function Videos({ videoArts }: VideosProps) {
    return (
        <Layout>
            <div className={styles.container}>
                {videoArts.map(art => {
                    return <VideoContent key={art.slug} artName={art.name} content={art.contents[0]} />;
                })}
            </div>
        </Layout>
    );
}

export const getServerSideProps: GetServerSideProps = async () => {
    const artsData = await getArts();

    let videoArts = artsData.filter(art => !!art.contents.find(content => content.mimeType.includes('image')));

    videoArts = videoArts.map(art => ({
        ...art,
        contents: [art.contents.find(content => content.mimeType.includes('image'))],
    }));

    return {
        props: {
            videoArts,
        },
    };
};

export default Videos;
