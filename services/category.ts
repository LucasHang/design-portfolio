export async function getCategories(): Promise<Array<string>> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(['photos', 'videos', '3d', 'books', 'tutorials', 'typography', 'ui/ux']);
        }, 500);
    });
}
