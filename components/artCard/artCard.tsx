import Link from 'next/link';
import classNames from 'classnames';
import { FaImage, FaImages, FaPhotoVideo } from 'react-icons/fa';
import { MdOutlineVideoLibrary, MdOutlineSlowMotionVideo } from 'react-icons/md';
import { Art, ContentTag } from '../../types/art';
import utilStyles from '../../styles/utils.module.scss';
import { ArtContent, ArtContentPreview } from '../artContent';
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

                <ArtContent content={mainContent} artName={art.name} />

                <div className={styles.footer}>
                    <div className={styles.preview}>
                        {otherContents.map(content => {
                            return <ArtContentPreview key={content.url} content={content} artName={art.name} />;
                        })}
                    </div>
                </div>
            </a>
        </Link>
    );
}
