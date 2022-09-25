import { useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { CgMenuRightAlt } from 'react-icons/cg';
import classNames from 'classnames';
import styles from './header.module.scss';

const PAGE_TITLE_BY_PATH = {
    about: 'Sobre mim',
    contact: 'Contato',
    videos: 'Vídeos',
    photos: 'Fotos',
};

interface HeaderProps {
    onToggleSideNav(): void;
}

export default function Header({ onToggleSideNav }: HeaderProps) {
    const { pathname } = useRouter();

    const isAtHome = pathname === '/home';

    const currentPageTitle = useMemo(() => {
        const cleanPath = pathname.replace('/', '');

        if (!cleanPath) {
            return '';
        }

        return PAGE_TITLE_BY_PATH[cleanPath];
    }, [pathname]);

    return (
        <>
            <header className={classNames(styles.header, styles.desktopHeader)}>
                <Link href="/home">
                    <a>
                        <img
                            src={`static/images/${isAtHome ? 'logo' : 'logo-icon'}.svg`}
                            alt="Hang Leandro Logo"
                            height="40px"
                        />
                    </a>
                </Link>

                <nav className={styles.nav}>
                    <Link href="/about">
                        <a className={classNames({ [styles.active]: pathname === '/about' })}>
                            {PAGE_TITLE_BY_PATH.about}
                        </a>
                    </Link>
                    <Link href="/contact">
                        <a className={classNames({ [styles.active]: pathname === '/contact' })}>
                            {PAGE_TITLE_BY_PATH.contact}
                        </a>
                    </Link>
                    <Link href="/videos">
                        <a className={classNames({ [styles.active]: pathname === '/videos' })}>
                            {PAGE_TITLE_BY_PATH.videos}
                        </a>
                    </Link>
                    <Link href="/photos">
                        <a className={classNames({ [styles.active]: pathname === '/photos' })}>
                            {PAGE_TITLE_BY_PATH.photos}
                        </a>
                    </Link>
                </nav>
            </header>

            <header className={classNames(styles.header, styles.mobileHeader)}>
                <div className={styles.headerTitle}>
                    <Link href="/home">
                        <a>
                            <img
                                src={`static/images/${isAtHome ? 'logo' : 'logo-icon'}.svg`}
                                alt="Hang Leandro Logo"
                                height="40px"
                            />
                        </a>
                    </Link>

                    {!isAtHome && currentPageTitle && (
                        <div className={styles.pageTitle}>{currentPageTitle}</div>
                    )}
                </div>

                <button className={styles.sideNavToggle}>
                    <CgMenuRightAlt onClick={onToggleSideNav} size={28} />
                </button>
            </header>
        </>
    );
}
