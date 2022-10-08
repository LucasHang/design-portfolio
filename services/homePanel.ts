import graphcms from './graphClient';
import { HomePanel } from '../types/homePanel';

interface HomePanelData {
    homePanels: Array<HomePanel>;
}

export async function getHomePanel(): Promise<HomePanel> {
    const homePanelData = await graphcms.request<HomePanelData>(
        `
            query HomePanel {
                homePanels {
                    leftImage {
                        url
                    }
                    rightImage {
                        url
                    }
                }
            }
        `,
    );

    return homePanelData.homePanels[0];
}
