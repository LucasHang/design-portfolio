import { PropsWithChildren, useState } from 'react';
import Head from 'next/head';
import SideNav from '../sideNav';
import utilStyles from '../../styles/utils.module.scss';
import styles from './layout.module.scss';
import Header from '../header';

export const siteTitle = 'Arts by Leandro';

export default function Layout({ children }: PropsWithChildren<unknown>) {
    const [sideNavOpened, setSideNavOpened] = useState(false);

    function onToggleSideNav() {
        setSideNavOpened(state => !state);
    }

    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Portifólio de artes de design gráfico" />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle,
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
                <title>{siteTitle}</title>
            </Head>

            <Header onToggleSideNav={onToggleSideNav} />

            <SideNav opened={sideNavOpened} />

            <main className={utilStyles.scrollbar}>{children}</main>
        </div>
    );
}
