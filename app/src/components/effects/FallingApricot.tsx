"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Petal = {
  id: number;
  x: number;
  duration: number;
  delay: number;
  emoji: string;
};

export default function FallingApricot() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      duration: 6 + Math.random() * 6,
      delay: Math.random() * 5,
      emoji: i % 2 === 0 ? "🌼" : "🌸",
    }));

    setPetals(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-60">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          initial={{ y: -50, x: `${petal.x}vw`, opacity: 0 }}
          animate={{
            y: "110vh",
            rotate: 360,
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ position: "absolute", fontSize: 24 }}
        >
          {petal.emoji}
        </motion.div>
      ))}
    </div>
  );
}
