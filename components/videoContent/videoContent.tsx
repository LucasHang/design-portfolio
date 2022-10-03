import Image from 'next/image';

import { Content, ContentTag } from '../../types/art';
import styles from './videoContent.module.scss';

interface ArtContentProps {
    artName: string;
    content: Content;
}

export default function ArtContent({ artName, content }: ArtContentProps) {
    console.log('content', content);
    return (
        <div className={styles.videoWrapper}>
            <video preload="metadata" height="100%" width="100%" className={styles.videoContent}>
                <source src={content.url} type="video/mp4" />
            </video>
        </div>
    );
}
