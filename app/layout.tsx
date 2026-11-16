import type {Metadata, Viewport} from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Homely",
    description: "Homely, the real estate brand",
};

// Lets content use the full screen on notched phones and keeps pinch-zoom enabled
export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
};

export default function RootLayout({children}: LayoutProps<"/">) {
    return (
        <html lang="en" className="h-full antialiased">
        <body className="flex min-h-full flex-col">{children}</body>
        </html>
    );
}