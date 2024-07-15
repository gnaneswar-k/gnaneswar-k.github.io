import { Inter } from "next/font/google";
import "./globals.css";
// import NavBar from "@/app/_components/navbar"
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " flex flex-col min-h-dvh overflow-y-auto"} id="body">
        {children}
      </body>
    </html>
  );
}
