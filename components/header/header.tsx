import Link from 'next/link';
import { CgMenuRightAlt } from 'react-icons/cg';
import classnames from 'classnames';
import styles from './header.module.scss';
import utilStyles from '../../styles/utils.module.scss';

interface HeaderProps {
    onToggleSideNav(): void;
}

export default function Header({ onToggleSideNav }: HeaderProps) {
    return (
        <header className={styles.header}>
            <Link href="/">
                <a className={classnames(utilStyles.headingLg, styles.brandName)}>Arts by Leandro</a>
            </Link>

            <div style={{ width: '0.8rem' }} />

            <button className={styles.sideNavToggle}>
                <CgMenuRightAlt onClick={onToggleSideNav} size={28} />
            </button>
        </header>
    );
}
