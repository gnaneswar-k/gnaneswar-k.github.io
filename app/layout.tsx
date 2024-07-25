import { Inter } from "next/font/google";
import "./globals.css";
// import Navigation from "./_components/navigation/navigation";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " flex flex-col min-h-dvh overflow-y-auto"} id="body">
        {/* <header><Navigation /></header> */}
        {children}
      </body>
    </html>
  );
}
