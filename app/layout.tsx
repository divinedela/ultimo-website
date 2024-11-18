"use client";

import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { PropsWithChildren } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "Ultimo Garden",
  description: "Home of homes",
  icons: {
    icon: "../public/assets/img/ultimo_logo.png",
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  const currentPath = usePathname();

  const containerVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 0.5,
      },
    },
  };

  return (
    <html lang="en">
      <body className={`${inter.className} font-sans bg-white`}>
        <Header />
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPath}
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
          >
            {children}
          </motion.div>
        </AnimatePresence>
        <Footer />
      </body>
    </html>
  );
}
