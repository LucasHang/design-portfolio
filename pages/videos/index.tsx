import { useState } from 'react';
import { GetServerSideProps } from 'next';
import FsLightbox from 'fslightbox-react';
import Layout from '../../components/layout';
import { VideoContent } from '../../components/videoContent';
import { getArts } from '../../services/art';
import { Art } from '../../types/art';
import styles from './videos.module.scss';

export interface VideosProps {
    videoArts: Array<Art>;
}

function Videos({ videoArts }: VideosProps) {
    const [lightBoxController, setLightBoxController] = useState({
        toggler: false,
        slide: 1,
    });

    function openLightBoxOnSlide(number) {
        setLightBoxController({
            toggler: !lightBoxController.toggler,
            slide: number,
        });
    }

    const allContentsUrl = videoArts.map(art => art.contents[0].url);

    return (
        <Layout>
            <div className={styles.container}>
                {videoArts.map(art => {
                    return <VideoContent key={art.slug} artName={art.name} content={art.contents[0]} />;
                })}
            </div>

            <FsLightbox
                toggler={lightBoxController.toggler}
                sources={allContentsUrl}
                slide={lightBoxController.slide}
            />
        </Layout>
    );
}

export const getServerSideProps: GetServerSideProps = async () => {
    const artsData = await getArts();

    let videoArts = artsData.filter(art => !!art.contents.find(content => content.mimeType.includes('video')));

    videoArts = videoArts.map(art => ({
        ...art,
        contents: [art.contents.find(content => content.mimeType.includes('video'))],
    }));

    return {
        props: {
            videoArts,
        },
    };
};

export default Videos;
