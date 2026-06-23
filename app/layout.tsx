import "./global.css";
import { DarkModeProvider } from "./contexts/DarkModeContext";
import { LocaleProvider } from "./contexts/LocaleContext";
import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
    title: "Demo | Blueprint",
};

const rootStyle = {
    margin: 0,
    padding: 0,
};

export default function RootLayout({ children }) {
    return (
        <html style={rootStyle}>
            <body style={rootStyle}>
                <LocaleProvider>
                    <DarkModeProvider>
                        {children}
                    </DarkModeProvider>
                </LocaleProvider>
                <Analytics />
            </body>
        </html>
    );
}
