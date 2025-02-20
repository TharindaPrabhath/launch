"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export function Countdown() {
  const [count, setCount] = useState(5);

  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => setCount(count - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      window.location.href = "http://imeche.uom.lk";
    }
  }, [count]);

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="mb-8 text-7xl font-extrabold text-white">
        Launching in...
      </h2>
      <AnimatePresence mode="wait">
        <motion.div
          key={count}
          initial={{ opacity: 0, scale: 5.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-9xl mt-20 font-bold text-white"
        >
          {count}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
