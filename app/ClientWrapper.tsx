"use client";

import { PropsWithChildren } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function ClientWrapper({ children }: PropsWithChildren) {
  const currentPath = usePathname();

  return (
    <AnimatePresence>
      <motion.div
        key={currentPath}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
