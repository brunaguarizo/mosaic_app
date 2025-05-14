import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Mosaic App",
    description: "Mosaic App - Portfolio Management",
    icons: {
        icon: [
            {
                url: "/mosaic-favicon.svg",
                type: "image/svg+xml",
            },
        ],
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <head>
                <link
                    rel='icon'
                    type='image/svg+xml'
                    href='/mosaic-favicon.svg'
                />
            </head>
            <body className={`${geistSans.variable} ${geistMono.variable}`}>
                {children}
            </body>
        </html>
    );
}
