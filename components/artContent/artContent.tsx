import Image from 'next/image';

import { Content, ContentTag } from '../../types/art';
import styles from './artContent.module.scss';
import ContentsQtdIndicator from './components/contentsQtdIndicator';
import ContentTags from './components/contentTags';

interface ArtContentProps {
    artName: string;
    content: Content;
    relatedContentsQtd?: number;
    tags?: Array<ContentTag>;
}

export default function ArtContent({ artName, content, tags, relatedContentsQtd = 1 }: ArtContentProps) {
    return (
        <div style={{ position: 'relative' }}>
            {tags.length && (
                <div className={styles.tags}>
                    <ContentTags tags={tags} />

                    {relatedContentsQtd > 1 && <ContentsQtdIndicator quantity={relatedContentsQtd} />}
                </div>
            )}

            {content.mimeType.includes('image') ? (
                <Image
                    quality="100"
                    src={content.url}
                    alt={artName}
                    height="100%"
                    width="100%"
                    layout="responsive"
                    placeholder="blur"
                    blurDataURL={content.blured?.url || content.url}
                    className={styles.artImage}
                />
            ) : (
                <div className={styles.videoWrapper}>
                    <video preload="metadata" height="100%" width="100%" className={styles.artImage}>
                        <source src={content.url} type="video/mp4" />
                    </video>
                </div>
            )}
        </div>
    );
}

export function ArtContentPreview({ artName, content }: ArtContentProps) {
    if (content.mimeType.includes('image')) {
        return (
            <Image
                key={content.url}
                quality="50%"
                src={content.url}
                placeholder="blur"
                blurDataURL={content.blured?.url || content.url}
                alt={artName}
                height={84}
                width={72}
                layout="fixed"
                className={styles.artImage}
            />
        );
    }

    return (
        <div className={styles.videoWrapper} style={{ height: 84, width: 72 }}>
            <video preload="metadata" height="100%" width="100%" className={styles.artImage}>
                <source src={content.url} type="video/mp4" />
            </video>
        </div>
    );
}
