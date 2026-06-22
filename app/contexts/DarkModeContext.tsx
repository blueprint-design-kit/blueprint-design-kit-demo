'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const DarkModeContext = createContext({ isDark: false });

// Helper function to read directly from the URL
function getDarkFromUrl() {
    if (typeof window === 'undefined') return false; // SSR fallback
    const params = new URLSearchParams(window.location.search);
    return params.get('dark') === 'dark';
}

export const DarkModeProvider = ({ children }) => {
    // We use a dummy local state counter strictly to trigger a re-render
    // when the browser URL history is updated programmatically.
    const [, forceUpdate] = useState(0);

    useEffect(() => {
        const handleLocationChange = () => {
            forceUpdate((prev) => prev + 1);
        };

        // Listen to browser back/forward buttons
        window.addEventListener('popstate', handleLocationChange);
        // Listen to our custom URL change event (for programmatic updates)
        window.addEventListener('urlchange', handleLocationChange);

        return () => {
            window.removeEventListener('popstate', handleLocationChange);
            window.removeEventListener('urlchange', handleLocationChange);
        };
    }, []);

    // Read value directly from the URL on every render pass
    const isDark = getDarkFromUrl();

    return (
        <DarkModeContext.Provider value={{ isDark }}>
            {children}
        </DarkModeContext.Provider>
    );
};

export const useDarkMode = () => useContext(DarkModeContext);
