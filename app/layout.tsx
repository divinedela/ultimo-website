import "./globals.css";
import { PropsWithChildren } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ClientWrapper from "./ClientWrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ultimo Garden",
  description: "Home of homes",
  icons: {
    icon: "assets/img/ultimo_logo.png",
  },
};

export default function RootLayout({ children }: PropsWithChildren) {


  return (
    <html lang="en">
      <body className={`font-effra bg-white`}>
        <Header />
        <ClientWrapper>{children}</ClientWrapper>
        <Footer />
      </body>
    </html>
  );
}
