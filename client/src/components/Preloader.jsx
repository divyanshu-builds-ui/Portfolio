import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Preloader() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) { clearInterval(interval); return 100 }
        return p + Math.random() * 15
      })
    }, 150)
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => { clearTimeout(timer); clearInterval(interval) }
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center"
          style={{ backgroundColor: '#020617' }}
        >
          {/* Animated logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.3, rotateY: -90 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <span className="text-4xl sm:text-5xl font-black font-mono">
              <span className="text-primary">{'<'}</span>
              <span className="text-white">D</span>
              <span className="text-white/80">G</span>
              <span className="text-primary">{'/>'}</span>
            </span>
            {/* Glow ring */}
            <motion.div
              animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute inset-0 rounded-full border border-primary/30"
              style={{ margin: '-20px' }}
            />
          </motion.div>

          {/* Progress bar */}
          <div className="w-32 sm:w-40 h-[2px] bg-white/5 mt-8 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: `${Math.min(progress, 100)}%` }}
              className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
            />
          </div>

          {/* Status text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-[10px] font-mono text-gray-700 mt-4 tracking-wider"
          >
            {progress < 30 ? 'loading modules...' : progress < 70 ? 'compiling assets...' : 'rendering UI...'}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
