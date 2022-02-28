import { useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';
import { FaImage, FaImages, FaPhotoVideo } from 'react-icons/fa';
import { MdOutlineVideoLibrary, MdOutlineSlowMotionVideo } from 'react-icons/md';
import { Art, ContentTag } from '../../types/art';
import utilStyles from '../../styles/utils.module.scss';
import styles from './artCard.module.scss';

const ICONS_BY_TAG = {
    [ContentTag.IMAGE]: <FaImage />,
    [ContentTag.IMAGES]: <FaImages />,
    [ContentTag.VIDEO]: <MdOutlineSlowMotionVideo />,
    [ContentTag.VIDEOS]: <MdOutlineVideoLibrary />,
    [ContentTag.IMAGE_VIDEO]: <FaPhotoVideo />,
};

interface TagIconProps {
    icon: JSX.Element;
}

function TagIcon({ icon }: TagIconProps) {
    return <div className={styles.tagIcon}>{icon}</div>;
}

interface ArtCardProps {
    art: Art;
}

export default function ArtCard({ art }: ArtCardProps) {
    const [mainContent, ...otherContents] = art.contents;

    return (
        <Link href={`/arts/${art.slug}`}>
            <a className={classNames(styles.root, styles.slim)} aria-label={art.name}>
                <div className={styles.header}>
                    <div className={styles.title}>
                        <span className={utilStyles.headingMd}>{art.name}</span>
                    </div>

                    <div className={styles.tags}>
                        {art.tags?.map(tag => (
                            <TagIcon key={tag} icon={ICONS_BY_TAG[tag]} />
                        ))}
                    </div>
                </div>

                <div>
                    <Image
                        quality="100"
                        src={mainContent.url}
                        alt={art.name || 'Art Image'}
                        height="100%"
                        width="100%"
                        layout="responsive"
                        placeholder="blur"
                        blurDataURL={mainContent.blurDataUrl}
                        className={styles.artImage}
                    />
                </div>

                <div className={styles.footer}>
                    <div className={styles.preview}>
                        {otherContents.map(content => {
                            return (
                                <Image
                                    key={content.url}
                                    src={content.url}
                                    placeholder="blur"
                                    blurDataURL={content.blurDataUrl}
                                    alt={art.name || 'Art Image'}
                                    height={84}
                                    width={72}
                                    layout="fixed"
                                    className={styles.artImage}
                                />
                            );
                        })}
                    </div>
                </div>
            </a>
        </Link>
    );
}
