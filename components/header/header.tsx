import Link from 'next/link';
import { CgMenuRightAlt } from 'react-icons/cg';
import classnames from 'classnames';
import styles from './header.module.scss';

interface HeaderProps {
    onToggleSideNav(): void;
}

export default function Header({ onToggleSideNav }: HeaderProps) {
    return (
        <>
            <header className={classnames(styles.header, styles.desktopHeader)}>
                <Link href="/">
                    <a>
                        <img src="static/images/logo.svg" alt="Hang Leandro Logo" height="40px" />
                    </a>
                </Link>

                <nav className={styles.nav}>
                    <Link href="/about">
                        <a>Sobre mim</a>
                    </Link>
                    <Link href="/contact">
                        <a>Contato</a>
                    </Link>
                    <Link href="/videos">
                        <a>Vídeos</a>
                    </Link>
                    <Link href="/photos">
                        <a>Fotos</a>
                    </Link>
                </nav>
            </header>

            <header className={classnames(styles.header, styles.mobileHeader)}>
                <Link href="/">
                    <a>
                        <img src="static/images/logo.svg" alt="Hang Leandro Logo" height="40px" />
                    </a>
                </Link>

                <button className={styles.sideNavToggle}>
                    <CgMenuRightAlt onClick={onToggleSideNav} size={28} />
                </button>
            </header>
        </>
    );
}
