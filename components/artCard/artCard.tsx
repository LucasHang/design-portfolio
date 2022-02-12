import { FC } from 'react';
import Link from 'next/link';
import styles from './artCard.module.scss';
import Image, { ImageProps } from 'next/image';

interface ArtCardProps {
    art: { name: string; slug: string; description: string; url: string };
    imgProps?: Omit<ImageProps, 'src' | 'layout' | 'placeholder' | 'blurDataURL'>;
}

const placeholderImg = '/art-img-placeholder.svg';

const ArtCard: FC<ArtCardProps> = ({ art, imgProps }) => {
    return (
        <Link href={`/arts/${art.slug}`}>
            <a className={styles.slim} aria-label={art.name}>
                <div className={styles.header}>
                    <span>{art.name}</span>
                </div>
                <div>
                    <Image
                        quality="85"
                        src={art.url || placeholderImg}
                        alt={art.name || 'Art Image'}
                        height={320}
                        width={320}
                        layout="fixed"
                        {...imgProps}
                    />
                </div>
            </a>
        </Link>
    );
};

export default ArtCard;
