import Image from 'next/image';

import { Content } from '../../types/art';
import styles from './photoContent.module.scss';

interface PhotoContentProps {
    artName: string;
    content: Content;
}

export default function PhotoContent({ artName, content }: PhotoContentProps) {
    return (
        <Image
            quality="100"
            src={content.url}
            alt={artName}
            width="100%"
            height="100%"
            layout="responsive"
            placeholder="blur"
            blurDataURL={content.blured?.url || content.url}
            className={styles.artImage}
        />
    );
}
