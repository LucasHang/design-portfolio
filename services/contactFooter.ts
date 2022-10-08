import graphcms from './graphClient';
import { ContactFooter } from '../types/contactFooter';

interface ContactFooterData {
    contactFooters: Array<ContactFooter>;
}

export async function getContactFooter(): Promise<ContactFooter> {
    const contactFooterData = await graphcms.request<ContactFooterData>(
        `
            query ContactFooter {
                contactFooters {
                    image {
                        url
                    }
                }
            }
        `,
    );

    return contactFooterData.contactFooters[0];
}
