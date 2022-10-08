import { GetServerSideProps } from 'next';
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import Layout from '../../components/layout';
import { getContactFooter } from '../../services/contactFooter';
import { ContactFooter } from '../../types/contactFooter';
import styles from './contact.module.scss';

interface ContactProps {
    contactFooter: ContactFooter;
}

function Contact({ contactFooter }: ContactProps) {
    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.contacts}>
                    <form>
                        <input type="text" className={styles.formControl} placeholder="Nome" />
                        <input type="email" className={styles.formControl} placeholder="Email" />
                        <input type="phone" className={styles.formControl} placeholder="Telefone" />
                        <textarea className={styles.formControl} placeholder="Mensagem" />

                        <button type="submit" className={styles.formControl}>
                            Enviar
                        </button>
                    </form>

                    <div className={styles.contactLinks}>
                        <img src="/static/images/logo.svg" alt="Hang Leandro Logo" height="36px" />

                        <a
                            href="http://api.whatsapp.com/send?phone=554891830339"
                            className={styles.whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaWhatsapp /> Pedir Orçamento
                        </a>

                        <a href="mailto:leandro.hang@gmail.com" className={styles.emailLink}>
                            leandro.hang@gmail.com
                        </a>
                    </div>
                </div>

                <img src={contactFooter.image.url} alt="Imagem de Rodapé" width="100%" height="100px" />
            </div>
        </Layout>
    );
}

export const getServerSideProps: GetServerSideProps = async () => {
    const contactFooter = await getContactFooter();

    return {
        props: {
            contactFooter,
        },
    };
};

export default Contact;
