import { motion } from 'framer-motion'

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-surface dark:bg-surface-dark flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <div className="font-mono text-2xl text-ink dark:text-ink-dark flex items-center gap-1">
        <span>{'<'}</span>
        <motion.span
          animate={{ opacity: [1, 0.2, 1] }}
          transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
        >
          loading
        </motion.span>
        <span>{' />'}</span>
      </div>
    </motion.div>
  )
}
