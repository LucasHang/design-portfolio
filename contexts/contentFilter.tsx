import { createContext, useContext, useState } from 'react';

interface ContentFilterProps {
    category: string;
    setCategory(val: string): void;
}

const ContentFilterContext = createContext<ContentFilterProps>({} as ContentFilterProps);

export function ContentFilterProvider({ children }) {
    const [category, setCategory] = useState<string>();

    return (
        <ContentFilterContext.Provider value={{ category, setCategory }}>
            {children}
        </ContentFilterContext.Provider>
    );
}

export function useContentFilterContext() {
    return useContext(ContentFilterContext);
}
