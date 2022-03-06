import Image from 'next/image';
import { Content, ContentType } from '../../types/art';
import styles from './artContent.module.scss';

interface ArtContentProps {
    artName: string;
    content: Content;
}

export default function ArtContent({ artName, content }: ArtContentProps) {
    if (content.type === ContentType.IMAGE) {
        return (
            <Image
                quality="100"
                src={content.url}
                alt={artName}
                height="100%"
                width="100%"
                layout="responsive"
                placeholder="blur"
                blurDataURL={content.blurDataUrl}
                className={styles.artImage}
            />
        );
    }

    return (
        <div className={styles.videoWrapper}>
            <video preload="metadata" height="100%" width="100%" className={styles.artImage}>
                <source src={content.url} type="video/mp4" />
            </video>
        </div>
    );
}

export function ArtContentPreview({ artName, content }: ArtContentProps) {
    if (content.type === ContentType.IMAGE) {
        return (
            <Image
                key={content.url}
                src={content.url}
                placeholder="blur"
                blurDataURL={content.blurDataUrl}
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
