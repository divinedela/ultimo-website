import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { PropsWithChildren } from "react";
import Header from "./Header";
import Footer from "./Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ultimo Garden",
  description: "Home of homes",
  icons: {
    icon: "../public/assets/img/ultimo_logo.png",
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={`${inter.className} font-sans bg-white`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
