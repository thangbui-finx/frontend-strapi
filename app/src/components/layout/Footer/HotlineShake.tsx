"use client";

import { motion } from "framer-motion";

export default function HotlineShake() {
  return (
    <motion.img
      src="/hotline-vikki-footer.png"
      alt="hotline-vikki"
      className="w-45 mt-6"
      animate={{
        rotate: [0, -5, 5, -5, 5, 0],
      }}
      transition={{
        duration: 0.6,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 2,
      }}
    />
  );
}
