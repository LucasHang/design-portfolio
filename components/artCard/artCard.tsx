import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';
import styles from './artCard.module.scss';

export interface Art {
    name: string;
    slug: string;
    description?: string;
    url: string;
    blurDataURL?: string;
}

interface ArtCardProps {
    art: Art;
}

const placeholderImg = '/art-img-placeholder.svg';

export default function ArtCard({ art }: ArtCardProps) {
    return (
        <Link href={`/arts/${art.slug}`}>
            <a className={classNames(styles.root, styles.slim)} aria-label={art.name}>
                {/* <div className={styles.header}>{art.name}</div> */}

                <div>
                    <Image
                        {...art}
                        quality="100"
                        src={art.url || placeholderImg}
                        alt={art.name || 'Art Image'}
                        height="100%"
                        width="100%"
                        layout="responsive"
                        placeholder="blur"
                        className={styles.artImage}
                    />
                </div>
            </a>
        </Link>
    );
}
