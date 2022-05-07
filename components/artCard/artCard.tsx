import Link from 'next/link';
import classNames from 'classnames';
import { Art } from '../../types/art';
import utilStyles from '../../styles/utils.module.scss';
import { ArtContent, ArtContentPreview } from '../artContent';
import styles from './artCard.module.scss';

interface ArtCardProps {
    art: Art;
}

export default function ArtCard({ art }: ArtCardProps) {
    const [mainContent, ...otherContents] = art.contents;

    const previewContents = [...otherContents];
    previewContents.length = 2;

    return (
        <Link href={`/arts/${art.slug}`}>
            <a className={classNames(styles.root, styles.slim)} aria-label={art.name}>
                <div className={styles.header}>
                    <div className={styles.title}>
                        <span className={utilStyles.headingMd}>{art.name}</span>
                    </div>
                </div>

                <ArtContent
                    content={mainContent}
                    artName={art.name}
                    tags={art.tags}
                    relatedContentsQtd={otherContents.length}
                />

                <div className={styles.footer}>
                    <div className={styles.preview}>
                        {previewContents.map(content => {
                            return <ArtContentPreview key={content.url} content={content} artName={art.name} />;
                        })}
                    </div>
                </div>
            </a>
        </Link>
    );
}
