import React from 'react';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import classNames from 'classnames';
import Layout from '../../components/layout';
import { HomePanel } from '../../types/homePanel';
import styles from './home.module.scss';
import { getHomePanel } from '../../services/homePanel';

export interface HomeProps {
    homePanel: HomePanel;
}

function Home({ homePanel }: HomeProps) {
    return (
        <Layout>
            <div className={styles.container}>
                <Link href="/videos">
                    <a>
                        <div className={classNames(styles.panel, styles.leftPanel)}>
                            <div
                                className={styles.backgroundImage}
                                style={{
                                    backgroundImage: `url(${homePanel.leftImage.url})`,
                                }}
                            >
                                <h1 className={styles.panelTitle}>VÍDEOS</h1>
                            </div>
                        </div>
                    </a>
                </Link>
                <Link href="/photos">
                    <a>
                        <div className={classNames(styles.panel, styles.rightPanel)}>
                            <div
                                className={styles.backgroundImage}
                                style={{
                                    backgroundImage: `url(${homePanel.rightImage.url})`,
                                }}
                            >
                                <h1 className={styles.panelTitle}>FOTOS</h1>
                            </div>
                        </div>
                    </a>
                </Link>
            </div>
        </Layout>
    );
}

export const getServerSideProps: GetServerSideProps = async () => {
    const homePanel = await getHomePanel();

    return {
        props: {
            homePanel,
        },
    };
};

export default Home;
