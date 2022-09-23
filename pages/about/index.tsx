import classNames from 'classnames';
import Image from 'next/image';
import React from 'react';
import Layout from '../../components/layout';
import styles from './about.module.scss';

function About() {
    return (
        <Layout>
            <div style={{ position: 'relative', width: '100%', height: '50%' }}>
                <Image
                    src="/static/images/about_background.jpg"
                    quality="100"
                    alt="About Background Image"
                    layout="fill"
                    objectFit="contain"
                />
            </div>

            <p style={{ width: '100%', textAlign: 'justify', padding: '0px 16px' }}>
                It is a long established fact that a reader will be distracted by the readable content of a page
                when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using 'Content here, content here', making it look like
                readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as
                their default model text, and a search for 'lorem ipsum' will uncover many web sites still in
                their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on
                purpose (injected humour and the like).
            </p>
        </Layout>
    );
}

export default About;
