"use client";

import { motion } from "motion/react";

interface LaunchButtonProps {
  onLaunch: () => void;
}

export function LaunchButton({ onLaunch }: LaunchButtonProps) {
  return (
    <motion.button
      className="px-8 py-4 text-2xl font-bold text-white bg-red-600 rounded-full shadow-lg hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onLaunch}
    >
      Launch Website
    </motion.button>
  );
}
