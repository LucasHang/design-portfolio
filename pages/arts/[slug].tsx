import { GetServerSideProps } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { VscChevronLeft } from 'react-icons/vsc';
import { useKeenSlider } from 'keen-slider/react';
import Layout from '../../components/layout';
import { getArtBySlug } from '../../services/art';
import { Art, Content } from '../../types/art';
import utilStyles from '../../styles/utils.module.scss';
import styles from './arts.module.scss';
import classNames from 'classnames';

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

    return (
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

                <div ref={sliderRef} className={classNames('keen-slider', styles.contentsContainer)}>
                    {art.contents.map(content => {
                        return (
                            <div className="keen-slider__slide">
                                <Image
                                    key={content.url}
                                    src={content.url}
                                    placeholder="blur"
                                    blurDataURL={content.blurDataUrl}
                                    alt={art.name || 'Art Image'}
                                    height="100%"
                                    width="100%"
                                    layout="responsive"
                                    className={styles.artImage}
                                />
                            </div>
                        );
                    })}

                    <div className={styles.crossLine}></div>
                </div>
            </div>
        </Layout>
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
