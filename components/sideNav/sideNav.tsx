import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import classnames from 'classnames';
import utilStyles from '../../styles/utils.module.scss';
import { randomRgb, getQueryArrayIfExists } from '../../utils/functions';
import { getCategories } from '../../services/category';
import styles from './sideNav.module.scss';
import { FaTimes } from 'react-icons/fa';

const caretInterval = 500;

interface SideNavProps {
    opened: boolean;
    onClose(): void;
}

export default function SideNav({ opened, onClose }: SideNavProps) {
    return (
        <nav className={classnames(styles.nav, utilStyles.scrollbar, { [styles.opened]: opened })}>
            <div className={styles.navItems}>
                <FaTimes onClick={onClose} style={{ cursor: 'pointer' }} />

                <hr style={{ width: '100%', margin: '1rem 0' }} />

                <Link href="/about">
                    <a className={classnames(utilStyles.headingMd, { [styles.active]: true })}>Sobre mim</a>
                </Link>
                <Link href="/contact">
                    <a className={classnames(utilStyles.headingMd, { [styles.active]: true })}>Contato</a>
                </Link>
                <Link href="/videos">
                    <a className={classnames(utilStyles.headingMd, { [styles.active]: true })}>Vídeos</a>
                </Link>
                <Link href="/photos">
                    <a className={classnames(utilStyles.headingMd, { [styles.active]: true })}>Fotos</a>
                </Link>
            </div>
        </nav>
    );
}
