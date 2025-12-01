'use client';

import { motion } from "framer-motion";

const directionOffsets = {
  up: { axis: "y", value: 32 },
  down: { axis: "y", value: -32 },
  left: { axis: "x", value: 32 },
  right: { axis: "x", value: -32 },
  none: { axis: "y", value: 0 },
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
  duration = 0.8,
  direction = "up",
  offset = 32,
}) {
  const config = directionOffsets[direction] ?? directionOffsets.up;
  const axis = config.axis;
  const value = config.value === 0 ? 0 : Math.sign(config.value) * offset;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, [axis]: value }}
      whileInView={{ opacity: 1, [axis]: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay, duration, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}
