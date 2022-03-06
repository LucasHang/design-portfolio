import { useState } from 'react';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { VscChevronLeft } from 'react-icons/vsc';
import { useKeenSlider } from 'keen-slider/react';
import FsLightbox from 'fslightbox-react';
import Layout from '../../components/layout';
import { getArtBySlug } from '../../services/art';
import { Art, Content } from '../../types/art';
import utilStyles from '../../styles/utils.module.scss';
import styles from './arts.module.scss';
import classnames from 'classnames';
import { ArtContent } from '../../components/artContent';

export interface ArtsProps {
    art: Art;
}

export default function Arts({ art }: ArtsProps) {
    const [sliderRef] = useKeenSlider({
        mode: 'snap',
        slides: {
            origin: 'center',
            perView: 2,
            spacing: 16,
        },
        breakpoints: {
            '(max-width: 640px)': {
                slides: {
                    perView: 1,
                    spacing: 8,
                },
            },
        },
    });

    const [lightboxController, setLightboxController] = useState({
        toggler: false,
        slide: 1,
    });

    function openLightboxOnSlide(number) {
        setLightboxController({
            toggler: !lightboxController.toggler,
            slide: number,
        });
    }

    return (
        <>
            <Layout>
                <div className={styles.root}>
                    <div className={styles.header}>
                        <div className={styles.title}>
                            <Link href="/catalog">
                                <a>
                                    <VscChevronLeft size={28} />
                                </a>
                            </Link>

                            <h1 className={utilStyles.headingXl}>{art.name}</h1>
                        </div>
                        {Boolean(art.description) && <p>{art.description}</p>}
                    </div>

                    <div ref={sliderRef} className={classnames('keen-slider', styles.contentsContainer)}>
                        {art.contents.map((content, index) => {
                            return (
                                <div
                                    key={content.url}
                                    className={classnames('keen-slider__slide', styles.slide)}
                                    onClick={() => openLightboxOnSlide(index + 1)}
                                >
                                    <ArtContent content={content} artName={art.name} />
                                </div>
                            );
                        })}

                        <div className={styles.crossLine}></div>
                    </div>
                </div>
            </Layout>

            <FsLightbox
                toggler={lightboxController.toggler}
                sources={art.contents.map(content => content.url)}
                slide={lightboxController.slide}
            />
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const slug = Array.isArray(query.slug) ? query.slug[0] : query.slug;

    const artData = await getArtBySlug(slug);

    return {
        props: {
            art: artData,
        },
    };
};
