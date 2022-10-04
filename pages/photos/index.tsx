import { useState } from 'react';
import { GetServerSideProps } from 'next';
import FsLightbox from 'fslightbox-react';
import { getArts } from '../../services/art';
import { Art } from '../../types/art';
import Layout from '../../components/layout';
import { PhotoContent } from '../../components/photoContent';
import styles from './photos.module.scss';

export interface PhotosProps {
    photoArts: Array<Art>;
}

function Photos({ photoArts }: PhotosProps) {
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

    const allContentsUrl = photoArts.map(art => art.contents[0].url);

    return (
        <Layout>
            <div className={styles.container}>
                {photoArts.map((art, index) => {
                    return (
                        <PhotoContent
                            key={art.slug}
                            artName={art.name}
                            content={art.contents[0]}
                            onClick={() => openLightBoxOnSlide(index + 1)}
                        />
                    );
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
