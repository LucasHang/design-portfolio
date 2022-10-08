import { GetServerSideProps } from 'next';
import Image from 'next/image';
import React from 'react';
import Layout from '../../components/layout';
import { getAboutHeader } from '../../services/aboutHeader';
import { AboutHeader } from '../../types/aboutHeader';

interface AboutProps {
    aboutHeader: AboutHeader;
}

function About({ aboutHeader }: AboutProps) {
    return (
        <Layout>
            <div style={{ position: 'relative', width: '100%', height: '50%' }}>
                <Image
                    src={aboutHeader.image.url}
                    quality="100"
                    alt="About Background Image"
                    layout="fill"
                    objectFit="contain"
                />
            </div>

            <p style={{ width: '100%', textAlign: 'justify', padding: '0px 16px' }}>
                {aboutHeader.description}
            </p>
        </Layout>
    );
}

export const getServerSideProps: GetServerSideProps = async () => {
    const aboutHeader = await getAboutHeader();

    return {
        props: {
            aboutHeader,
        },
    };
};

export default About;
