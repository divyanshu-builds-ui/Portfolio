import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">
      {/* Floating astronaut */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 3, -3, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
        className="text-7xl sm:text-9xl mb-6"
      >
        🧑‍🚀
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-6xl sm:text-8xl font-black text-primary/80 font-mono"
      >
        404
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-muted text-lg sm:text-xl mt-4 mb-2"
      >
        Lost in space...
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-gray-600 text-sm max-w-sm mb-8"
      >
        The page you're looking for doesn't exist or has been moved to another galaxy.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <Link
          to="/"
          className="px-8 py-3 bg-primary/10 border border-primary/50 text-primary font-bold rounded-full hover:bg-primary/20 hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95 text-sm font-mono"
        >
          ← back_to_home()
        </Link>
      </motion.div>

      {/* Floating stars */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ opacity: [0.2, 0.8, 0.2] }}
          transition={{ repeat: Infinity, duration: 2 + Math.random() * 3, delay: Math.random() * 2 }}
          className="absolute w-1 h-1 bg-white/40 rounded-full"
          style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
        />
      ))}
    </div>
  )
}
