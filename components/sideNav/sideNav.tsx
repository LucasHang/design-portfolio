import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import classnames from 'classnames';
import utilStyles from '../../styles/utils.module.scss';
import { randomRgb, getQueryArrayIfExists } from '../../utils/functions';
import { getCategories } from '../../services/category';
import styles from './sideNav.module.scss';

const caretInterval = 500;

interface SideNavProps {
    opened: boolean;
}

export default function SideNav({ opened }: SideNavProps) {
    const router = useRouter();

    const [categories, setCategories] = useState<Array<string>>([]);
    const [newBorderHoverColor, setNewBorderHoverColor] = useState<string>();
    const [borderHoverColor, setBorderHoverColor] = useState<string>();

    const filteredCategories = getQueryArrayIfExists(router.query?.category);

    const isInRoot = !filteredCategories;

    function isCategorySelected(category: string) {
        return !isInRoot && filteredCategories.includes(category);
    }

    function handleNavItemMouseOver() {
        const newColor = randomRgb();
        setNewBorderHoverColor(newColor);
        setBorderHoverColor(newColor);
    }

    function concatWithCategoriesQuery(category: string) {
        return [...(filteredCategories || []), category].map(item => encodeURIComponent(item)).join(',');
    }
    function removeFromCategoriesQuery(category: string) {
        return [...(filteredCategories?.filter(item => item !== category) || [])]
            .map(item => encodeURIComponent(item))
            .join(',');
    }

    function toogleCategoryFilter(category: string) {
        const newCategoryFilter = filteredCategories?.includes(category)
            ? removeFromCategoriesQuery(category)
            : concatWithCategoriesQuery(category);
        router.replace(`/catalog?category=${newCategoryFilter}`);
    }

    useEffect(() => {
        // Simulate a caret behavior, changing between current color and transparent
        const interval = setInterval(() => {
            setBorderHoverColor(state => {
                if (state === 'transparent') {
                    return newBorderHoverColor;
                }

                return 'transparent';
            });
        }, caretInterval);

        return () => clearInterval(interval);
    }, [newBorderHoverColor]);

    useEffect(() => {
        getCategories().then(setCategories).catch(console.error);
    }, []);

    return (
        <nav className={classnames(styles.nav, utilStyles.scrollbar, { [styles.opened]: opened })}>
            <Link href="/catalog">
                <a className={classnames(utilStyles.headingLg, styles.brandName)}>Arts by Leandro</a>
            </Link>

            <div className={styles.navItems}>
                <Link href="/catalog">
                    <a
                        className={classnames(utilStyles.headingMd, { [styles.active]: isInRoot })}
                        onMouseOver={handleNavItemMouseOver}
                        style={{ borderColor: borderHoverColor }}
                    >
                        catalog
                    </a>
                </Link>

                {categories.map(category => {
                    return (
                        <a
                            key={category}
                            onClick={() => toogleCategoryFilter(category)}
                            className={classnames(utilStyles.headingMd, {
                                [styles.active]: isCategorySelected(category),
                            })}
                            onMouseOver={handleNavItemMouseOver}
                            style={{ borderColor: borderHoverColor }}
                        >
                            {category}
                        </a>
                    );
                })}
            </div>
        </nav>
    );
}
