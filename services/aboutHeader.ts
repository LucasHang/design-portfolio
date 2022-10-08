import graphcms from './graphClient';
import { AboutHeader } from '../types/aboutHeader';

interface AboutHeaderData {
    aboutHeaders: Array<AboutHeader>;
}

export async function getAboutHeader(): Promise<AboutHeader> {
    const aboutHeaderData = await graphcms.request<AboutHeaderData>(
        `
            query AboutHeader {
                aboutHeaders {
                    image {
                        url
                    }
                    description
                }
            }
        `,
    );

    return aboutHeaderData.aboutHeaders[0];
}
