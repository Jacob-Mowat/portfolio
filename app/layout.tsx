import { Metadata } from "next";
import '@/styles/globals.css';

export const metadata: Metadata = {
    title: "Jacob Mowat - Software Engineer",
    description: "Software Engineer based in Scotland, Edinburgh. focused on Machine Learning and Full-Stack Development"
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                { children }
            </body>
        </html>
    )
}
