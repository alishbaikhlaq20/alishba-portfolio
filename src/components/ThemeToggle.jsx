import { motion } from 'framer-motion'
import { FiMoon, FiSun } from 'react-icons/fi'

export default function ThemeToggle({ theme, toggleTheme }) {
  const isDark = theme === 'dark'

  return (
    <button
      aria-label="Toggle dark mode"
      onClick={toggleTheme}
      className="relative w-14 h-8 rounded-full flex items-center px-1 bg-ink/10 dark:bg-white/10 transition-colors"
    >
      <motion.div
        className="w-6 h-6 rounded-full bg-white dark:bg-ink shadow-soft flex items-center justify-center text-[11px]"
        animate={{ x: isDark ? 24 : 0 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      >
        {isDark ? <FiMoon className="text-primary" /> : <FiSun className="text-accent" />}
      </motion.div>
    </button>
  )
}
