import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AnnouncementBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0, y: 50 }}
      animate={{
        scale: 1,
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          stiffness: 120,
          damping: 8,
          bounce: 0.5
        }
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 25px rgba(255, 215, 0, 0.5)",
        background: "linear-gradient(to right, rgba(30, 41, 59, 0.7), rgba(51, 65, 85, 0.7))",
        transition: { duration: 0.4 }
      }}
      className="relative mx-auto mt-6 p-6 backdrop-blur-lg bg-white/10 border-l-8 border-yellow-400 rounded-2xl shadow-2xl flex flex-col items-center text-center max-w-xl text-white border border-white/20"
    >
      {/* Close Button - Fixed with better styling */}
      <motion.button
        onClick={() => setVisible(false)}
        whileHover={{ scale: 1.2, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
        whileTap={{ scale: 0.9 }}
        className="absolute top-3 right-3 text-yellow-300 hover:text-yellow-500 transition w-8 h-8 flex items-center justify-center rounded-full bg-white/10"
        aria-label="Close alert"
      >
        ✕
      </motion.button>

      {/* Animated Icon */}
      <motion.div
        animate={{
          y: [0, -6, 0],
          transition: { repeat: Infinity, duration: 1.6, ease: "easeInOut" }
        }}
        className="mb-4"
      >
        <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center shadow-md backdrop-blur-sm">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-yellow-300"
            viewBox="0 0 20 20"
            fill="currentColor"
            animate={{
              scale: [1, 1.25, 1],
              transition: { repeat: Infinity, duration: 1.8, ease: "easeInOut" }
            }}
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z"
              clipRule="evenodd"
            />
          </motion.svg>
        </div>
      </motion.div>

      {/* Text */}
      <motion.div
        animate={{
          scale: [1, 1.02, 1],
          transition: { repeat: Infinity, duration: 2.5, ease: "easeInOut" }
        }}
      >
        <p className="text-yellow-300 font-extrabold text-2xl mb-2 tracking-wide animate-pulse">
          <Link href="/tentativeSchedule" className="hover:underline">
            Click for Tentative Program Schedule
          </Link>
        </p>
      </motion.div>
    </motion.div>
  );
}