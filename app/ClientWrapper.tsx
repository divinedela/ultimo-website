"use client";

import { PropsWithChildren } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function ClientWrapper({ children }: PropsWithChildren) {
  const currentPath = usePathname();

  return (
    <AnimatePresence>
      <div className="fixed top-[20%] lg:top-1/2 lg:-translate-y-1/2 right-1/2 translate-x-1/2 flex justify-center items-center">
        <div className="loader"></div>
      </div>
      <motion.div
        key={currentPath}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="z-10 relative"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
