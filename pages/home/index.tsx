import classNames from 'classnames';
import React from 'react';
import Layout from '../../components/layout';
import styles from './home.module.scss';

function Home() {
    return (
        <Layout>
            <div className={styles.container}>
                <div className={classNames(styles.panel, styles.leftPanel)}></div>
                <div className={classNames(styles.panel, styles.rightPanel)}></div>
            </div>
        </Layout>
    );
}

export default Home;
