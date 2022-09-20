import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';
import Layout from '../../components/layout';
import styles from './home.module.scss';

function Home() {
    return (
        <Layout>
            <div className={styles.container}>
                <Link href="/videos">
                    <a>
                        <div className={classNames(styles.panel, styles.leftPanel)}>
                            <div className={styles.backgroundImage}>
                                <h1 className={styles.panelTitle}>VÍDEOS</h1>
                            </div>
                        </div>
                    </a>
                </Link>
                <Link href="/photos">
                    <a>
                        <div className={classNames(styles.panel, styles.rightPanel)}>
                            <div className={styles.backgroundImage}>
                                <h1 className={styles.panelTitle}>FOTOS</h1>
                            </div>
                        </div>
                    </a>
                </Link>
            </div>
        </Layout>
    );
}

export default Home;
