import { useEffect, useState } from 'react';
import Link from 'next/link';
import classnames from 'classnames';
import styles from './sideNav.module.scss';
import utilStyles from '../../styles/utils.module.scss';
import { randomRgb } from '../../utils/functions';

const caretInterval = 500;

const categories = ['home', 'photos', 'videos', '3d', 'books', 'tutorials', 'typography', 'ui/ux'];

interface SideNavProps {
    opened: boolean;
}

export default function SideNav({ opened }: SideNavProps) {
    const [borderHovered, setBorderHovered] = useState(false);
    const [borderHoverColor, setBorderHoverColor] = useState<string>();

    function handleNavItemMouseOver() {
        setBorderHoverColor(randomRgb());
        setBorderHovered(true);
    }

    function handleNavItemMouseOut() {
        setBorderHovered(false);
    }

    useEffect(() => {
        const currentBorderHoverColor = borderHoverColor;

        // Simulate a caret behavior, changing between current color and transparent
        const interval = setInterval(() => {
            setBorderHoverColor(state => {
                if (state === 'transparent') {
                    return currentBorderHoverColor;
                }

                return 'transparent';
            });
        }, caretInterval);

        return () => clearInterval(interval);
    }, [borderHovered]);

    return (
        <nav className={classnames(styles.nav, utilStyles.scrollbar, { [styles.opened]: opened })}>
            <Link href="/">
                <a className={classnames(utilStyles.headingLg, styles.brandName)}>Arts by Leandro</a>
            </Link>

            <div className={styles.navItems}>
                {categories.map(category => {
                    return (
                        <Link key={category} href="/">
                            <a
                                className={utilStyles.headingMd}
                                onMouseOver={handleNavItemMouseOver}
                                onMouseOut={handleNavItemMouseOut}
                                style={{ borderColor: borderHoverColor }}
                            >
                                {category}
                            </a>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}
