"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

import { LaunchButton } from "./launch-button";
import { Countdown } from "./countdown";

export function LaunchPad() {
  const [isLaunching, setIsLaunching] = useState(false);

  const handleLaunch = () => {
    setIsLaunching(true);
  };

  return (
    <div className="text-center">
      <AnimatePresence>
        {!isLaunching ? (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
          >
            <h1 className="mb-8 text-7xl font-extrabold leading-snug text-white">
              Welcome to the IMechE UoM Website Launch
            </h1>
            <LaunchButton onLaunch={handleLaunch} />
          </motion.div>
        ) : (
          <Countdown />
        )}
      </AnimatePresence>
    </div>
  );
}
