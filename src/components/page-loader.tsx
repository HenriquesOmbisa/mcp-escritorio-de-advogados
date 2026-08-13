"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Scale } from "lucide-react";

const PROGRESS_STEP = 120;
const COMPLETE_DELAY = 400;
const INITIAL_DURATION = 1400;

export function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimers = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    intervalRef.current = null;
    timeoutRef.current = null;
  }, []);

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      intervalRef.current = setInterval(() => {
        setProgress((p) => {
          if (p >= 90) return p;
          return p + Math.floor(Math.random() * 9) + 2;
        });
      }, PROGRESS_STEP);
    });

    timeoutRef.current = setTimeout(() => {
      clearTimers();
      setProgress(100);
      timeoutRef.current = setTimeout(() => {
        setVisible(false);
        setProgress(0);
      }, COMPLETE_DELAY);
    }, INITIAL_DURATION);

    return () => {
      cancelAnimationFrame(raf);
      clearTimers();
    };
  }, [clearTimers]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="page-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          className="fixed inset-0 z-[110] flex flex-col items-center justify-center bg-forest"
          aria-hidden="true"
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <motion.span
              className="flex size-16 items-center justify-center border-2 border-gold bg-white/5"
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(169,122,52,0.4)",
                  "0 0 0 14px rgba(169,122,52,0)",
                ],
              }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
            >
              <Scale className="size-8 text-gold" aria-hidden="true" />
            </motion.span>

            <p className="mt-6 font-heading text-2xl font-bold tracking-wide text-white">
              MPC
            </p>
            <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.3em] text-gold">
              Escritório de Advogados
            </p>

            <div className="mt-8 h-[3px] w-44 overflow-hidden bg-white/10">
              <div
                className="h-full bg-gold transition-[width] duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default PageLoader;
