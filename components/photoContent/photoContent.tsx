import Image from 'next/image';

import { Content } from '../../types/art';
import styles from './photoContent.module.scss';

interface PhotoContentProps {
    artName: string;
    content: Content;
    onClick: () => void;
}

export default function PhotoContent({ artName, content, onClick }: PhotoContentProps) {
    return (
        <div style={{ position: 'relative', width: '100%', height: '34rem' }}>
            <Image
                quality="100"
                src={content.url}
                alt={artName}
                layout="fill"
                placeholder="blur"
                blurDataURL={content.blured?.url || content.url}
                onClick={onClick}
                className={styles.artImage}
            />
        </div>
    );
}
