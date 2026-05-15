import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Preloader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[99999] bg-dark-950 flex flex-col items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-black font-mono"
          >
            <span className="text-primary">{'<'}</span>DG<span className="text-primary">{'/>'}</span>
          </motion.div>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 120 }}
            transition={{ duration: 1.4, ease: 'easeInOut', delay: 0.3 }}
            className="h-[2px] bg-gradient-to-r from-primary to-accent mt-4 rounded-full"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-[10px] font-mono text-gray-700 mt-4"
          >
            initializing...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
